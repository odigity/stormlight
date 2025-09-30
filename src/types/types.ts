import type {ReactNode} from "react";


export enum CardType {
    CONDITION       = "Condition",
    COSTLY_ACTION   = "CostlyAction",
    EFFECT          = "Effect",
    FREE_ACTION     = "FreeAction",
    INFUSION        = "Infusion",
    ITEM            = "Item",
    MAGIC_ITEM      = "MagicItem",
    REACTION        = "Reaction",
    SKILL           = "Skill",
}


export interface CardData {

    name            : string;
    source          : string;

    // Card Specs
    type?           : CardType;     // determines paper color  (populated by index.ts)
    actions?        : number;       // determines paper width  (-1 = Reaction, 0 = Free Action, 1-3 = width of Costly Action)
    inset?          : boolean;      // determines border color

    // Cost Bubbles
    ip?             : number;       // investiture
    fp?             : number;       // focus
    ch?             : number;       // item charge

    // Art
    art?            : string;
    mirrorArt?      : boolean;
    rotRightArt?    : boolean;
    rotLeftArt?     : boolean;

    // Rules Content
    rulesCentered?  : boolean;
    rules?          : ReactNode;    // JSX preferred
    charges?        : number;       // -> whiteboard checkboxes
    note?           : string;       // Examples:  "Stacking", "Once per scene", "Light Weapon"

    // Relationships
    reverseCard?    : string;       // should match "name" property of target card
    //parentCard?     : string;      // should match "name" property of target card

    // Metadata
    status          : 'TODO' | 'PROOF' | 'DONE';

}


export interface SheetData {
    name  : string;
    cards : string[];
}
