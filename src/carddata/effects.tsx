import type {CardData} from "../types/types.ts";
import {CardType} from "../types/types.ts";


const effects: CardData[] = [
    {
        name : "?",
        type : CardType.EFFECT,
        icon : "?.svg",
        rules: <>
            ?
        </>,
        source: "p.?",
        status: "TODO",
    },
];


export default effects;
