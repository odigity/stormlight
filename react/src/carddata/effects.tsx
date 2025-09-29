import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const effects: CardData[] = [
    {
        name          : "?",
        type          : ItemType.EFFECT,
        rulesCentered : false,
        icon          : "?.svg",
        rules         : <>
            ?
        </>,
        source        : "p.?",
    },
];


export default effects;
