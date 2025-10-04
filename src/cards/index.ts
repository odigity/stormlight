import _                from "lodash";
import actions          from "./actions.tsx";
import actions_combat   from "./actions_combat.tsx";
import actions_items    from "./actions_items.tsx";
import actions_radiant  from "./actions_radiant.tsx";
import actions_surges   from "./actions_surges.tsx";
import conditions       from "./conditions.tsx";
import effects          from "./effects.tsx";
import free_actions     from "./free_actions.tsx";
import infusions        from "./infusions.tsx";
import items            from "./items.tsx";
import magic_items      from "./magic_items.tsx";
import reactions        from "./reactions.tsx";
import {CardType}       from "../types/card_type.ts";
import artFileNames     from "./art_names.json";

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

const normalizeNameForSvg = (name) => name.replace(/[^a-zA-Z0-9]/g, '');
export const allCards = _.map([
    ..._.map( actions,          (c) => ({ ...c, type: CardType.ACTION                   })),
    ..._.map( actions_combat,   (c) => ({ ...c, type: CardType.ACTION                   })),
    ..._.map( actions_items,    (c) => ({ ...c, type: CardType.ACTION                   })),
    ..._.map( actions_radiant,  (c) => ({ ...c, type: CardType.ACTION                   })),
    ..._.map( actions_surges,   (c) => ({ ...c, type: CardType.ACTION                   })),
    ..._.map( conditions,       (c) => ({ ...c, type: CardType.CONDITION                })),
    ..._.map( free_actions,     (c) => ({ ...c, type: CardType.FREE_ACTION              })),
    ..._.map( infusions,        (c) => ({ ...c, type: CardType.INFUSION,   magic: true  })),
    ..._.map( items,            (c) => ({ ...c, type: CardType.ITEM                     })),
    ..._.map( magic_items,      (c) => ({ ...c, type: CardType.MAGIC_ITEM, magic: true  })),
    ..._.map( reactions,        (c) => ({ ...c, type: CardType.REACTION                 })),
    ..._.map( effects,          (c) => ({ ...c, type: CardType.EFFECT                   })),
], (card) => {
  return {
    ...card,
    hasArt: artFileNames.includes(normalizeNameForSvg(card.name)),
  }
})
