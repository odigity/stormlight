import costly_actions from "./costly_actions.tsx";
import free_actions from "./free_actions.tsx";
import reactions from "./reactions.tsx";
import conditions from "./conditions.tsx";
import items from "./items.tsx";

export { costly_actions, free_actions, reactions, conditions, items };

export const allCardsInOrder = [
    { id: "costly-actions", title: "Costly Actions", cards: costly_actions },
    { id: "free-actions", title: "Free Actions", cards: free_actions },
    { id: "reactions", title: "Reactions", cards: reactions },
    { id: "conditions", title: "Conditions", cards: conditions },
    { id: "items", title: "Items", cards: items },
];
