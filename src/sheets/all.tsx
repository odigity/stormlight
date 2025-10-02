import {CardType} from "../types/cardType.ts";
import type {SheetData} from "../types/types.ts";


const sheets: SheetData[] = [
    {
        name  : "Foo",
        type  : CardType.ACTION,
        cards : [
            "Brace",
        ],
    },
    {
        name  : "PartyItems",
        type  : CardType.ITEM,
        cards : [
            // Ofer
            "Greatsword",
            "Longbow",
            "Longspear",
            // Nate
            "Knife",
            "Knife",
            "Sling",
            // Taye
            "Longbow",
            "Shortspear",
            // TJ
            "?",
            "?",
            "?",
            "?",
        ],
    },
];


export default sheets;
