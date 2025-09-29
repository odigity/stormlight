import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const magic_items: CardData[] = [
    {
        name          : "?",
        type          : ItemType.MAGIC_ITEM,
        rulesCentered : false,
        icon          : "?.svg",
        rules         : <>
            ?
        </>,
        source        : "p.?",
    },
];


export default magic_items;
