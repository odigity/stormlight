import type {ReactNode} from "react";
import type {CardType} from "./cardType.ts";


export interface CardData {

    // Essentials
    name       : string;
    source     : string;
    status     : 'TODO' | 'PROOF' | 'DONE';

    // Relationships
    flipCard?  : string;        // should match "name" property of target card
    inset?     : boolean;       // determines border color

    // Card Specs
    type?      : CardType;      // determines paper color  (populated by index.ts)
    actions?   : number;        // determines paper width  (-1 = Reaction, 0 = Free Action, 1-3 = width of Costly Action)

    // Header  (Cost Bubbles)
    ip?        : number;        // investiture
    fp?        : number;        // focus
    ch?        : number;        // item charge

    // Art
    art?       : string;
    mirrorArt? : boolean;

    // Rules
    centered?  : boolean;
    keyProps?  : string;        // "Stacking", "Once per scene", "Light Weapon"
    charges?   : number;        // -> whiteboard checkboxes
    rules?     : ReactNode;     // keep on bottom for visibility (and it breaks the eslint aligner)

}


export interface SheetData {
    name  : string;
    cards : string[];
}
