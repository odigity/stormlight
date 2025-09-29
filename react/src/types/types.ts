import type {ReactNode} from "react";
import {ItemType} from "./itemType.ts";

export interface CardData {
    name            : string;
    type            : ItemType;
    actions?        : number;     // 1 default; 2=double-wide, 3=triple-wide for actions; -1=reaction (single-wide)
    ip?             : number;     // investiture cost
    fp?             : number;     // focus cost
    ch?             : number;     // charge cost
    rules           : ReactNode;  // JSX preferred
    icon            : string;     // resolved at import time in data files
    rulesCentered   : boolean;    // center entire rules block when true
    note?           : string;
    source          : string;
    mirrorIcon?     : boolean;
    rotRightIcon?   : boolean;
    rotLeftIcon?    : boolean;
}
