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
        name  : "1-Actions",
        type  : CardType.ACTION,
        cards : [
        ],
    },
    {
        name  : "1-Conditions",
        type  : CardType.CONDITION,
        cards : [
        ],
    },
    {
        name  : "1-Effects",
        type  : CardType.EFFECT,
        cards : [
        ],
    },
    {
        name  : "1-FreeActions",
        type  : CardType.FREE_ACTION,
        cards : [
        ],
    },
    {
        name  : "1-Reactions",
        type  : CardType.REACTION,
        cards : [
        ],
    },
    {
        name  : "1-Items",
        type  : CardType.ITEM,
        cards : [
            // Ofer
            "Greatsword", "Longbow", "Longspear",
            // Nate
            "Knife", "Knife", "Sling",
            // Taye
            "Longbow", "Shortspear",
            // TJ
            "?", "?", "?", "?",
        ],
    },
];


export default sheets;
