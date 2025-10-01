import conditions     from "./conditions.tsx";
import costly_actions from "./costly_actions.tsx";
import effects        from "./effects.tsx";
import free_actions   from "./free_actions.tsx";
import infusions      from "./infusions.tsx";
import items          from "./items.tsx";
import magic_items    from "./magic_items.tsx";
import reactions      from "./reactions.tsx";
import _ from "lodash";
import {CardType} from "../types/cardType.ts";

export { conditions, costly_actions, effects, free_actions, items, magic_items, reactions };

export const allCardsByType = [
    { id : "conditions",     title : "Conditions",     cards : conditions     },
    { id : "costly-actions", title : "Costly Actions", cards : costly_actions },
    { id : "free-actions",   title : "Free Actions",   cards : free_actions   },
    { id : "infusions",      title : "Infusions",      cards : infusions      },
    { id : "items",          title : "Items",          cards : items          },
    { id : "magic-items",    title : "Magic Items",    cards : magic_items    },
    { id : "reactions",      title : "Reactions",      cards : reactions      },
    { id : "effects",      title : "Effects",      cards : effects      },
];

export const allCards = [
    ..._.map(conditions, (c) => ({...c, type : CardType.CONDITION})),
    ..._.map(costly_actions, (c) => ({...c, type : CardType.COSTLY_ACTION})),
    ..._.map(free_actions, (c) => ({...c, type : CardType.FREE_ACTION})),
    ..._.map(infusions, (c) => ({...c, type : CardType.INFUSION, magic : true})),
    ..._.map(items, (c) => ({...c, type : CardType.ITEM})),
    ..._.map(magic_items, (c) => ({...c, type : CardType.MAGIC_ITEM, magic : true})),
    ..._.map(reactions, (c) => ({...c, type : CardType.REACTION})),
    ..._.map(effects, (c) => ({...c, type : CardType.EFFECT})),
];
