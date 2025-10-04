import React, { createContext, useContext, useReducer } from "react";
import type {ReactNode} from 'react'
import type {CardData} from "../types/types.ts";
import _ from "lodash";
import {onlyText} from 'react-children-utilities';
import type {CardType} from "../types/card_type.ts";


export const propertyFilters = [
    'Magic',
    'Charges',
    'Flips',
    'IP Cost',
    'FP Cost',
    'CH Cost'
];
export const actionFilters = [
    'Any', // no filter
    'None', // things with no action cost
    "-1", // reaction
    "0", // free action
    "1",
    "2",
    "3",
    "*", // cost includes *
];
export const statusFilters = [
    "TODO",
    "PROOF",
    "DONE",
];

type FilterState = {
    type: CardType[];
    status: string[];
    actions: 'Any' | 'None' | "*" | string; // use string version of action cost
    properties: string[];// one of the propertyFilters
    nameQuery: string;
    textQuery: string;
    artQuery: "Any" | "Yes" | "No"; // true = has art, false = lacks art, Any = no filter
};

type Action =
    | { type: "setType"; payload: string[] }
    | { type: "setStatus"; payload: string }
    | { type: "setActions"; payload: string }
    | { type: "setProperties"; payload: string[] }
    | { type: "setNameQuery"; payload: string }
    | { type: "setTextQuery"; payload: string }
    | { type: "setArtQuery"; payload: "Any" | "Yes" | "No" }
    | { type: "reset" };

const initialState: FilterState = {
    type       : [],
    status     : [],
    actions    : "Any",
    properties : [],
    nameQuery  : "",
    textQuery  : "",
    artQuery   : "Any",
};

function reducer(state: FilterState, action: Action): FilterState {
  switch (action.type) {
    case "setType":
      return { ...state, type: action.payload };
    case "setStatus":
      return { ...state, status: action.payload };
    case "setActions":
      return { ...state, actions: action.payload };
    case "setProperties":
      return { ...state, properties: action.payload };
    case "setNameQuery":
      return { ...state, nameQuery: action.payload };
    case "setTextQuery":
      return { ...state, textQuery: action.payload };
    case "setArtQuery":
      return { ...state, artQuery: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const FilterStateContext = createContext<FilterState | undefined>(undefined);
const FilterDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
    return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

export const useFilterState = () => {
  const ctx = useContext(FilterStateContext);
  if (!ctx) throw new Error("useFilterState must be used within FilterProvider");
  return ctx;
};

export const useFilterDispatch = () => {
  const ctx = useContext(FilterDispatchContext);
  if (!ctx) throw new Error("useFilterDispatch must be used within FilterProvider");
  return ctx;
};

export function applyFiltersToCards(cards: CardData[], filters: FilterState): CardData[] {
    return _.filter(cards, (card) => cardPassesFilters(card,filters));
}

export function cardPassesFilters(card: CardData, filters: FilterState): boolean {
    if (filters.type.length && card.type && !filters.type.includes(card.type)) {
        return false
    }
    if (filters.status.length && card.status && !filters.status.includes(card.status)) {
        return false;
    }
    if (filters.nameQuery && card.name !== filters.nameQuery) {
        return false;
    }
    if(filters.textQuery && !cardHasText(card, filters.textQuery)){
        return false;
    }
    if(filters.artQuery !== 'Any') {
        return (filters.artQuery === "Yes") === card.hasArt;
    }
    if(filters.actions !== 'Any') {
        if(filters.actions === 'None') {
            return _.isNil(card.actions)
        } else if(filters.actions === "*") {
            return !_.isNil(card.actions) && card.actions.toString().includes("*");
        } else {
            return _.toNumber(card.actions) === _.toNumber(filters.actions);
        }
    }
    if(filters.properties.length) {
        const {properties} = filters;

        if(properties.includes('Magic') && !(card.ip || card.ch || card.charges || card.magic)){
            return false
        }
        if(properties.includes('Charges') && !(card.ch || card.charges)){
            return false
        }
        if(properties.includes('Flips') && !(card.flipCard || card.inset)){
            return false;
        }
        if(properties.includes('IP Cost') && !(card.ip)) {
            return false;
        }
        if(properties.includes('FP Cost') && !(card.fp)) {
            return false
        }
        if(properties.includes('CH Cost') && !(card.ch)){
            return false
        }
    }
    return true;
}

// Checks name, rules, rules2, and keyProps for the given text. Case insensitive.
function cardHasText(card: CardData, text: string): boolean {
    text = text.toLowerCase();
    if (card.name.toLowerCase().includes(text)) {
        return true
    }
    if (card.rules && onlyText(card.rules).toLowerCase().includes(text)) {
        return true
    }
    if (card.rules2 && onlyText(card.rules).toLowerCase().includes(text)) {
        return true;
    }
    if (card.keyProps && card.keyProps.toLowerCase().includes(text)) {
        return true;
    }

    return false;
}
