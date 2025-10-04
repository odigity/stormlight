import type {ReactNode} from "react";
import type {CardType} from "./card_type.ts";


export interface CardData {

    // Essentials
    name      : string;
    source    : string;
    status    : 'TODO' | 'PROOF' | 'DONE';

    // Relationships
    flipCard? : string;         // card.name; reverse side; declared by parent card  (ex: Brace -> Braced)
    fromCard? : string;         // card.name; parental relationship; declared by child card  (ex: Task Illusions -> Illumination)
    inset?    : boolean;        // determines border color

    // Card Specs
    type?     : CardType;       // determines: paper color  (populated by index.ts)
    actions?  : number;         // determines: paper width  (-1 = Reaction, 0 = Free Action, 1-3 = width of Action)
    radiant?  : boolean;        // determines: gold corner highlights

    // Header  (Cost Bubbles)
    ip?       : number;         // investiture
    fp?       : number;         // focus
    ch?       : number;         // item charge

    // Rules
    keyProps? : string;         // "Stacking", "Once per scene", "Light Weapon"
    charges?  : number;         // -> whiteboard checkboxes
    rules?    : ReactNode;      // keep on bottom for visibility (and it breaks the eslint aligner)
    rules2?   : ReactNode;      // for page 2 of two-page cards

  // code-only props
  hasArt?        : boolean,
}


export interface SheetData {

    name  : string;
    type  : CardType;           // determines paper color
    cards : string[];

}


export const gold_set: string[] = [

    // Stormlight Actions
    "Breathe Stormlight",
    "Enhance",
    "Maintain Enhance",
    "Regenerate",

    // Surges
    "Abrasion",
    "Adhesion",
    "Cohesion",
    "Division",
    "Gravitation",
    "Illumination",
    "Progression",
    "Tension",
    "Transformation",
    "Transportation",

    // Radiant Shardblade/Shardplate
    "Shardblade (Radiant)",
    "Shape Shardblade",
    "Shardplate (Radiant)",
    "Command Armor",

];
