import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The child cards of the 15 unique fabrial effects (pages 270-273).
const fabrials_spc: CardData[] = [

    //  Armor Augmenter

    {
        name    : "Augment Armor",
        status  : "TODO",
        source  : "p.270",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            +2 deflect
        </>,
    },


    //
    //  Ascender
    //

    {
        name    : "Ascend",
        status  : "TODO",
        source  : "p.271",
        type    : CardType.FREE_ACTION,
        actions : 0,
        rules   : <>
            TODO
            fly 30' end of next turn
        </>,
    },
    {
        name    : "Hover / Descend",
        status  : "TODO",
        source  : "p.271",
        type    : CardType.FREE_ACTION,
        actions : 0,
        rules   : <>
            TODO
            hover in place or lower yourself to ground
        </>,
    },
    {
        name    : "Fling Up",
        status  : "TODO",
        source  : "p.271",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            tag target to lift 30'
        </>,
    },

    //  Bindrial (area)

    {
        name    : "Immobilize All",
        status  : "TODO",
        source  : "p.271",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            immobilize everyone
        </>,
    },

    //
    //  Bindrial (self)
    //

    {
        name    : "Spiderclimb",
        status  : "TODO",
        source  : "p.271",
        type    : CardType.FREE_ACTION,
        actions : 0,
        rules   : <>
            TODO
            spiderclimb 1rd
        </>,
    },
    {
        name    : "Immobilize",
        status  : "TODO",
        source  : "p.271",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            tag target: Immobilized 1rd
        </>,
    },

    //  Compressor

    {
        name    : "Stiffen Creature",
        status  : "TODO",
        source  : "p.271",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            tag target to Slow/disadv physical
        </>,
    },

    //  Cremrial

    {
        name    : "Soften Stone",
        status  : "TODO",
        source  : "p.272",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            soften area until end of turn
        </>,
    },

    //  Cultivator

    {
        name    : "Grow Rapidly",
        status  : "TODO",
        source  : "p.272",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            grow plants to Medium
        </>,
    },

    //
    //  Disruptor
    //

    {
        name    : "Disintegrate Object",
        status  : "TODO",
        source  : "p.272",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            disintegrate object
        </>,
    },
    {
        name    : "Disintegrate Creature",
        status  : "TODO",
        source  : "p.272",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            Discipline vs Spiritual
        </>,
    },

    //  Drainer

    {
        name    : "Drain Stormlight",
        status  : "TODO",
        source  : "p.272",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            drain Stormlight
        </>,
    },

    //  Liferial

    {
        name    : "Heal Creature",
        status  : "TODO",
        source  : "p.272",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            heal self or target
        </>,
    },


    //  Lightrial

    {
        name    : "Dazzle",
        status  : "TODO",
        source  : "p.272",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
            dazzle target
        </>,
    },


    //  Painrial (hybrid)

    {
        name    : "Absorb Pain",
        status  : "TODO",
        source  : "p.273",
        type    : CardType.REACTION,
        actions : -1,
        rules   : <>
            TODO
        </>,
    },

];


export default fabrials_spc;
