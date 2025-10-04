import _ from "lodash";

import topic_combat         from "./topic_combat.tsx";
import topic_items          from "./topic_items.tsx";
import topic_radiant        from "./topic_radiant.tsx";
import topic_surges         from "./topic_surges.tsx";
import type_actions         from "./type_actions.tsx";
import type_conditions      from "./type_conditions.tsx";
import type_effects         from "./type_effects.tsx";
import type_free_actions    from "./type_free_actions.tsx";
import type_infusions       from "./type_infusions.tsx";
import type_items           from "./type_items.tsx";
import type_magic_items     from "./type_magic_items.tsx";
import type_reactions       from "./type_reactions.tsx";
import {CardType}           from "../types/card_type.ts";
import artFileNames         from "./art_names.json";

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
    ..._.map( topic_combat,         (c) => ({ ...c })),
    ..._.map( topic_items,          (c) => ({ ...c })),
    ..._.map( topic_radiant,        (c) => ({ ...c })),
    ..._.map( topic_surges,         (c) => ({ ...c })),
    ..._.map( type_actions,         (c) => ({ ...c, type: CardType.ACTION                   })),
    ..._.map( type_conditions,      (c) => ({ ...c, type: CardType.CONDITION                })),
    ..._.map( type_effects,         (c) => ({ ...c, type: CardType.EFFECT                   })),
    ..._.map( type_free_actions,    (c) => ({ ...c, type: CardType.FREE_ACTION              })),
    ..._.map( type_infusions,       (c) => ({ ...c, type: CardType.INFUSION,   magic: true  })),
    ..._.map( type_items,           (c) => ({ ...c, type: CardType.ITEM                     })),
    ..._.map( type_magic_items,     (c) => ({ ...c, type: CardType.MAGIC_ITEM, magic: true  })),
    ..._.map( type_reactions,       (c) => ({ ...c, type: CardType.REACTION                 })),
], (card) => {
  return {
    ...card,
    hasArt: artFileNames.includes(normalizeNameForSvg(card.name)),
  }
})
