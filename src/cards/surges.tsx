import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The 10 surges (pages ) and child cards — including infusion cards.
const surges: CardData[] = [

    //
    //  Shared Actions
    //

    {
        name    : "Add to Infusion",
        status  : "TODO",
        source  : "p.210",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO
        </>,
    },

    //
    //  Abrasion
    //

    {
        name    : "Abrasion",
        status  : "TODO",
        source  : "p.212",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            ?
        </>,
    },
    {
        name   : "Skate",
        status : "TODO",
        source : "p.212",
        type   : CardType.FREE_ACTION,
        actions: -1,
        rules   : <>
            ?
        </>,
    },

    //
    //  Adhesion
    //

    {
        name    : "Adhesion",
        status  : "TODO",
        source  : "p.215",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            ?
        </>,
    },
    {
        name   : "Adhesion Infusion",
        status : "PROOF",
        source : "p.215",
        type   : CardType.INFUSION,
    },

    //
    //  Cohesion
    //

    {
        name    : "Cohesion",
        status  : "TODO",
        source  : "p.217",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            1+ IP infuse unattended non-Invested stone object or surface wi/reach
            1 IP/rd - stone is moldable and soft like clay
            shaping:
            - rough: free as part of action
            - moderate: use Interact
            - intricate: Use a Skill
            Cohesion vs Physical for held object or surface supporting enemy (fail: no IP cost)
            trapped in stone:  Immobilized or Restrained (if enough of the body is encased)
                Use a Skill on Athletics vs Cohesion to slip out -or- 10m+ to dig them out
        </>,
    },
    {
        name   : "Cohesion Infusion",
        status : "PROOF",
        source : "p.217",
        type   : CardType.INFUSION,
    },

    //  Division

    {
        name    : "Division",
        status  : "TODO",
        source  : "p.220",
        type     : CardType.ACTION,
        actions : 2,
        rules   : <>
            ?
        </>,
    },

    //
    //  Gravitation
    //

    {
        name    : "Gravitation",
        status  : "TODO",
        source  : "p.223",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            ?
        </>,
    },
    {
        name   : "Gravitation Infusion",
        status : "PROOF",
        source : "p.223",
        type   : CardType.INFUSION,
    },

    //
    //  Illumination
    //

    {
        name    : "Illumination",
        status  : "TODO",
        source  : "p.226",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            TODO - fp: * (after supported)
            1+ IP infuse air wi/bond range and surge size
            Simple & Complex Illusions: mute/inanimate obj = 1 IP / 10m; else 1 IP / rd
            Disguising Yourself: free - but must _have_ IP; end as free (see reverse)
        </>,
        rules2: <>
            Deceiving Chars: simple objs / diguise self = convincing; more complex might need Illum test vs Cognitive of passive observer
                if scrutinizing, Illum test vs Perception
            Can control complex illusions wi/bond range.  Out of range: only last simple/mindless task
            See: End Disguise, Task Illusions, Task Illusion, Maintain Illusions
        </>,
    },
    {
        name   : "Illumination Infusion",
        status : "PROOF",
        source : "p.226",
        type   : CardType.INFUSION,
    },
    {
        name   : "End Disguise",
        status : "TODO",
        source : "p.226",
        type   : CardType.FREE_ACTION,
        actions: 0,
        rules   : <>
            ?
        </>,
    },
    {
        name   : "Task Illusion",
        status : "TODO",
        source : "p.226",
        type   : CardType.ACTION,
        actions: 1,
        rules   : <>
            ?
        </>,
    },
    {
        name   : "Task Illusions",
        status : "TODO",
        source : "p.226",
        type   : CardType.FREE_ACTION,
        actions: 0,
        rules   : <>
            ?
        </>,
    },
    {
        name   : "Maintain Illusions",
        status : "TODO",
        source : "p.226",
        type   : CardType.FREE_ACTION,
        actions: 0,
        rules   : <>
            ?
        </>,
    },

    //
    //  Progression
    //

    {
        name    : "Progression",
        status  : "TODO",
        source  : "p.229",
        type     : CardType.ACTION,
        actions : 2,
        rules   : <>
            Growth: 1 IP rapidly grow plant/seed up to Surge Size or natural limit
            Regrowth: 1+ IP infuse char: 1 ip/rd: recover HP = Prog modifier + 1d4..12 (ranks 1..5)
        </>,
    },
    {
        name   : "Progression Infusion",
        status : "PROOF",
        source : "p.229",
        type   : CardType.INFUSION,
    },

    //
    //  Tension
    //

    {
        name    : "Tension",
        status  : "TODO",
        source  : "p.231",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            1+ IP infuse non-invested object wi/reach - rigid for 1 IP/rd
            shaping:
            - rough: free as part of action
            - moderate: use Interact
            - intricate: Use a Skill
            Hardened Defense: if worn : +2 Physical (wrap material around character as part of action) (non-Stacking)
            if weapon: improvised non-special wo/fragile
        </>,
    },
    {
        name   : "Tension Infusion",
        status : "PROOF",
        source : "p.231",
        type   : CardType.INFUSION,
    },

    //  Transformation

    {
        name    : "Transformation",
        status  : "TODO",
        source  : "p.234",
        type     : CardType.ACTION,
        actions : 2,
        rules   : <>
            Soulcast: Transformation test on non-living (at first), non-Invested object or surface wi/reach
            IP = target size (1: Sm, etc)
            if causes opponent to make test, DC = Transformation test
            also...  2 IP: 1 Transportation effect w/10' range
            <div className="rules-table" style={{ fontSize: ".7rem" }}>
                <div className="rules-header"><div className="rules-cell"></div><div className="rules-cell">Solids</div><div className="rules-cell">Organics</div><div className="rules-cell">Liquids</div><div className="rules-cell">Vapors</div><div className="rules-cell">Clear Air</div><div className="rules-cell">Flame*</div></div>
                <div className="rules-row"><div className="rules-cell">Solids</div><div className="rules-cell">10</div><div className="rules-cell">10</div><div className="rules-cell">15</div><div className="rules-cell">20</div><div className="rules-cell">25</div><div className="rules-cell">30</div></div>
                <div className="rules-row"><div className="rules-cell">Organics</div><div className="rules-cell">10</div><div className="rules-cell">10</div><div className="rules-cell">10</div><div className="rules-cell">15</div><div className="rules-cell">20</div><div className="rules-cell">25</div></div>
                <div className="rules-row"><div className="rules-cell">Liquids</div><div className="rules-cell">15</div><div className="rules-cell">10</div><div className="rules-cell">15</div><div className="rules-cell">10</div><div className="rules-cell">15</div><div className="rules-cell">20</div></div>
                <div className="rules-row"><div className="rules-cell">Vapors</div><div className="rules-cell">20</div><div className="rules-cell">15</div><div className="rules-cell">10</div><div className="rules-cell">10</div><div className="rules-cell">10</div><div className="rules-cell">15</div></div>
                <div className="rules-row"><div className="rules-cell">Clear Air</div><div className="rules-cell">25</div><div className="rules-cell">20</div><div className="rules-cell">15</div><div className="rules-cell">10</div><div className="rules-cell">10</div><div className="rules-cell">10</div></div>
                <div className="rules-row"><div className="rules-cell">Flame</div><div className="rules-cell">30</div><div className="rules-cell">25</div><div className="rules-cell">20</div><div className="rules-cell">15</div><div className="rules-cell">10</div><div className="rules-cell">-</div></div>
            </div>
            * Flame requires Flamecasting talent
        </>,
        rules2: <>
            ?
        </>,
    },

    //  Transportation

    {
        name    : "Transportation",
        status  : "TODO",
        source  : "p.237",
        type     : CardType.ACTION,
        actions : 2,
        ip      : 1,    // TODO - change to "*"
        rules   : <>
            One effect (wi/bond range) per IP:<br/>
            • **Learn Emotions and Motives** _(by observing surrounding spren)_<br/>
            • **Locate Characters** _(think Marauder's Map)_<br/>
            • **Sense Investiture** _(in objects and people)_<br/>
            Might involve Transportation test.
        </>,
        rules2: <>
            ?
        </>,
    },
];


export default surges;
