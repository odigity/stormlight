import conditions     from "./conditions.tsx";
import costly_actions from "./costly_actions.tsx";
import effects        from "./effects.tsx";
import free_actions   from "./free_actions.tsx";
import infusions      from "./infusions.tsx";
import items          from "./items.tsx";
import magic_items    from "./magic_items.tsx";
import reactions      from "./reactions.tsx";
import skills         from "./skills.tsx";

export { conditions, costly_actions, effects, free_actions, items, magic_items, reactions, skills };

export const allCardsByType = [
    { id: "conditions",     title: "Conditions",     cards: conditions     },
    { id: "costly-actions", title: "Costly Actions", cards: costly_actions },
    { id: "free-actions",   title: "Free Actions",   cards: free_actions   },
    { id: "infusions",      title: "Infusions",      cards: infusions      },
    { id: "items",          title: "Items",          cards: items          },
    { id: "magic-items",    title: "Magic Items",    cards: magic_items    },
    { id: "reactions",      title: "Reactions",      cards: reactions      },
    { id: "skills",         title: "Skills",         cards: skills         },
];

export const allCards = [
    ...conditions,
    ...costly_actions,
    ...free_actions,
    ...infusions,
    ...items,
    ...magic_items,
    ...reactions,
    ...skills
];
