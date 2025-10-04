import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


const actions_items: CardData[] = [

    //
    //  Ammunition
    //

    {
        name    : "Reload",
        status  : "PROOF",
        source  : "p.245",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            Reload weapon to full ammunition.
        </>,
    },

    //
    //  Flint & Steel
    //

    {
        name    : "Ignite",
        status  : "TODO",
        source  : "p.258",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
        </>,
    },

    //
    //  Poison
    //

    {
        name    : "Apply Poison",
        status  : "TODO",
        source  : "p.259",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
        </>,
    },

    //
    //  Net
    //

    {
        name    : "Throw Net",
        status  : "TODO",
        source  : "p.259",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
        </>,
    },

];


export default actions_items;
