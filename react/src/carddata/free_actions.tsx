import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const free_actions: CardData[] = [
    {
        name         : "End Grapple",
        type         : ItemType.FREE_ACTION,
        actions      : 2,
        rulesCentered: true,
        icon         : "EndGrapple.svg",
        rules        : <>
            <br/><i>This space intentionally left blank.</i>
        </>,
        source: "p.304",
    },
    {
        name         : "Maintain Enhance",
        type         : ItemType.FREE_ACTION,
        actions      : 0,
        rulesCentered: false,
        icon         : "MaintainEnhance.svg",
        ip           : 1,
        rules        : <>
            Maintain existing Enhance effect until end of next turn.
        </>,
        source: "p.125",
    },
    {
        name         : "Regenerate",
        type         : ItemType.FREE_ACTION,
        actions      : 0,
        rulesCentered: false,
        icon         : "Regenerate.svg",
        ip           : 1,
        rules        : <>
            <p>HP += 1d6 + tier.</p>
            <p>Can use even when Unconscious or prevented from using free_actions.</p>
        </>,
        source: "p.125",
    },
    {
        name         : "Stand Up",
        type         : ItemType.FREE_ACTION,
        actions      : 0,
        rulesCentered: false,
        icon         : "StandUp.svg",
        rules        : <>
            Movement reduced by 5' until next turn.
        </>,
        source: "p.294",
    },
];


export default free_actions;
