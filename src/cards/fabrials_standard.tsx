import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The 12 standard fabrials (pages 262-264, ignoring Freechair) and child cards + Deactivate Fabrial.
const fabrials_std: CardData[] = [

    //  Alerter

    {
        name    : "Alerter",
        status  : "TODO",
        source  : "p.262",
        type     : CardType.MAGIC_ITEM,
        charges : 5,
        rules   : <>
            TODO
        </>,
    },

    //  Attractor

    {
        name    : "Attractor",
        status  : "TODO",
        source  : "p.262",
        type     : CardType.MAGIC_ITEM,
        charges : 5,
        rules   : <>
            TODO
        </>,
    },

    //  Clock Fabrial

    {
        name    : "Clock Fabrial",
        status  : "TODO",
        source  : "p.262",
        type     : CardType.MAGIC_ITEM,
        charges : 3,
        rules   : <>
            TODO
        </>,
    },

    //  Drainer

    {
        name    : "Drainer",
        status  : "TODO",
        source  : "p.262",
        type     : CardType.MAGIC_ITEM,
        charges : 2,
        rules   : <>
            TODO
        </>,
    },

    //
    //  Emotion Bracelet
    //

    {
        name     : "Emotion Bracelet",
        status   : "TODO",
        source   : "p.263",
        type     : CardType.MAGIC_ITEM,
        flipCard : "Sense Emotions",
        charges  : 3,
        rules    : <>
            TODO
        </>,
    },
    {
        name    : "Sense Emotions",
        status  : "TODO",
        source  : "p.263",
        type     : CardType.FREE_ACTION,
        actions : 0,
        rules   : <>
            TODO
        </>,
    },

    //  Heatrial

    {
        name    : "Heatrial",
        status  : "TODO",
        source  : "p.263",
        type     : CardType.MAGIC_ITEM,
        charges : 5,
        rules   : <>
            TODO
        </>,
    },

    //  Painrial (amplifying)

    {
        name    : "Painrial (amplifying)",
        status  : "TODO",
        source  : "p.263",
        type     : CardType.MAGIC_ITEM,
        charges : 3,
        rules   : <>
            TODO
        </>,
    },

    //
    //  Fabrials
    //

    {
        name     : "Painrial (numbing)",
        status   : "TODO",
        source   : "p.263",
        type     : CardType.MAGIC_ITEM,
        flipCard : "Numb Pain",
        charges  : 3,
        rules    : <>
            TODO
        </>,
    },
    {
        name    : "Numb Pain",
        status  : "TODO",
        source  : "p.263",
        type     : CardType.REACTION,
        actions : -1,
        rules   : <>
            TODO
        </>,
    },

    //  Repeller

    {
        name    : "Repeller",
        status  : "TODO",
        source  : "p.263",
        type     : CardType.MAGIC_ITEM,
        charges : 5,
        rules   : <>
            TODO
        </>,
    },

    //  Soulcaster

    {
        name    : "Soulcaster",
        status  : "TODO",
        source  : "p.264",
        type     : CardType.MAGIC_ITEM,
        charges : 5,
        rules   : <>
            TODO
        </>,
    },

    //  Spanreed

    {
        name    : "Spanreed",
        status  : "TODO",
        source  : "p.264",
        type     : CardType.MAGIC_ITEM,
        charges : 3,
        rules   : <>
            TODO
        </>,
    },

    //  Suppressor

    {
        name    : "Suppressor",
        status  : "TODO",
        source  : "p.264",
        type     : CardType.MAGIC_ITEM,
        charges : 2,
        rules   : <>
            TODO
        </>,
    },

    //  Deactivate Fabrial

    {
        name    : "Deactivate Fabrial",
        status  : "TODO",
        source  : "p.262",
        type    : CardType.FREE_ACTION,
    },

];


export default fabrials_std;
