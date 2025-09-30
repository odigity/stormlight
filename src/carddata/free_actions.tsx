import type {CardData} from "../types/types.ts";
import {CardType} from "../types/types.ts";


const free_actions: CardData[] = [
    {
        name         : "End Grapple",
        type         : CardType.FREE_ACTION,
        actions      : 2,
        rulesCentered: true,
        icon         : "EndGrapple.svg",
        rules        : <>
            <br/><i>This space intentionally left blank.</i>
        </>,
        source       : "p.304",
        inset        : true,
        status       : "PROOF",
    },
    {
        name         : "Maintain Enhance",
        type         : CardType.FREE_ACTION,
        actions      : 0,
        icon         : "MaintainEnhance.svg",
        ip           : 1,
        rules        : <>
            Maintain existing Enhance effect until end of next turn.
        </>,
        source       : "p.125",
        status       : "PROOF",
    },
    {
        name         : "Quickdraw",
        type         : CardType.FREE_ACTION,
        actions      : 0,
        icon         : "Quickdraw.svg",
        rules        : <>
            TODO<br/>
            (include text: "counts as Interact action")
        </>,
        source       : "p.245",
        status       : "TODO",
    },
    {
        name         : "Regenerate",
        type         : CardType.FREE_ACTION,
        actions      : 0,
        icon         : "Regenerate.svg",
        ip           : 1,
        rules        : <>
            <p>HP += 1d6 + tier.</p>
            <p>Can use even when Unconscious or prevented from using free_actions.</p>
        </>,
        source       : "p.125",
        status       : "PROOF",
    },
    {
        name         : "Sense Emotions",
        type         : CardType.FREE_ACTION,
        actions      : 0,
        icon         : "SenseEmotions.svg",
        rules        : <>
            TODO
        </>,
        source       : "p.263",
        status       : "TODO",
    },
    {
        name         : "Stand Up",
        type         : CardType.FREE_ACTION,
        actions      : 0,
        icon         : "StandUp.svg",
        rules        : <>
            Movement reduced by 5' until next turn.
        </>,
        source       : "p.294",
        status       : "PROOF",
    },
];


export default free_actions;
