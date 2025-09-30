import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const effects: CardData[] = [
    {
        name : "?",
        type : ItemType.EFFECT,
        icon : "?.svg",
        rules: <>
            ?
        </>,
        source: "p.?",
        status: "TODO",
    },
];


export default effects;
