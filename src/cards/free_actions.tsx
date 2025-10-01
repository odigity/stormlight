import type {CardData} from "../types/types.ts";


const free_actions: CardData[] = [
    {
        name     : "End Grapple",
        status   : "PROOF",
        source   : "p.304",
        inset    : true,
        actions  : 2,
        rules    : <>
            <br/><i>This space intentionally left blank.</i>
        </>,
    },
    {
        name     : "Maintain Enhance",
        status   : "PROOF",
        source   : "p.125",
        inset    : true,
        actions  : 0,
        magic    : true,
        ip       : 1,
        rules    : <>
            Maintain existing Enhance effect until end of next turn.
        </>,
    },
    {
        name    : "Quickdraw",
        status  : "TODO",
        source  : "p.245",
        actions : 0,
        rules   : <>
            TODO<br/>
            for weapons with Quickdraw trait
            (include text: "counts as Interact action")
        </>,
    },
    {
        name    : "Regenerate",
        status  : "PROOF",
        source  : "p.125",
        actions : 0,
        magic   : true,
        ip      : 1,
        rules   : <>
            <p>HP += 1d6 + tier.</p>
            <p>Can use even when Unconscious or prevented from using free_actions.</p>
        </>,
    },
    {
        name    : "Sense Emotions",
        status  : "TODO",
        source  : "p.263",
        actions : 0,
        magic   : true,
        rules   : <>
            TODO
        </>,
    },
    {
        name     : "Stand Up",
        status   : "PROOF",
        source   : "p.294",
        actions  : 0,
        inset    : true,
        rules    : <>
            Movement reduced by 5' until next turn.
        </>,
    },
];


export default free_actions;
