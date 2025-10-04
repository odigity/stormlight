import _ from "lodash";

import combat       from "./combat.tsx";
import conditions   from "./conditions.tsx";
import equipment    from "./equipment.tsx";
import fabrials_spc from "./fabrials_special.tsx";
import fabrials_std from "./fabrials_standard.tsx";
import misc         from "./misc.tsx";
import radiant      from "./radiant.tsx";
import shards       from "./shards.tsx";
import surges       from "./surges.tsx";
import weapons      from "./weapons.tsx";
import artFileNames from "./art_names.json";

/*
export { actions, actions_surges, conditions, effects, free_actions, items, magic_items, reactions };

export const allCardsByType = [
    { id: "actions",      title: "Actions",      cards: actions      },
    { id: "conditions",   title: "Conditions",   cards: conditions   },
    { id: "effects",      title: "Effects",      cards: effects      },
    { id: "free-actions", title: "Free Actions", cards: free_actions },
    { id: "infusions",    title: "Infusions",    cards: infusions    },
    { id: "items",        title: "Items",        cards: items        },
    { id: "magic-items",  title: "Magic Items",  cards: magic_items  },
    { id: "reactions",    title: "Reactions",    cards: reactions    },
];
*/

const normalizeNameForSvg = (name) => name.replace(/[^a-zA-Z0-9]/g, '');
export const allCards = _.map([
    ..._.map( combat,       (c) => ({ ...c })),
    ..._.map( conditions,   (c) => ({ ...c })),
    ..._.map( equipment,    (c) => ({ ...c })),
    ..._.map( fabrials_spc, (c) => ({ ...c })),
    ..._.map( fabrials_std, (c) => ({ ...c })),
    ..._.map( misc,         (c) => ({ ...c })),
    ..._.map( radiant,      (c) => ({ ...c, radiant: true })),
    ..._.map( shards,       (c) => ({ ...c })),
    ..._.map( surges,       (c) => ({ ...c })),
    ..._.map( weapons,      (c) => ({ ...c })),
], (card) => {
  return {
    ...card,
    hasArt: artFileNames.includes(normalizeNameForSvg(card.name)),
  }
})
