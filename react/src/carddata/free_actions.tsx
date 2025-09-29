import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";

// Icons
import IconEndGrapple from "../assets/icons/free/EndGrapple.svg";
import IconMaintainEnhance from "../assets/icons/free/MaintainEnhance.svg";
import IconRegenerate from "../assets/icons/free/Regenerate.svg";
import IconStandUp from "../assets/icons/free/StandUp.svg";

const free_actions: CardData[] = [
    {
        name: "End Grapple",
        type: ItemType.FREE_ACTION,
        actions: 2, // double-wide
        rulesCentered: true,
        icon: IconEndGrapple,
        rules: <><br/><i>This space intentionally left blank.</i></>,
        source: "p.304",
    },
    {
        name: "Maintain Enhance",
        type: ItemType.FREE_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconMaintainEnhance,
        ip: 1,
        rules: <>Maintain existing Enhance effect until end of next turn.</>,
        source: "p.125",
    },
    {
        name: "Regenerate",
        type: ItemType.FREE_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconRegenerate,
        ip: 1,
        rules: <>
            <p>HP += 1d6 + tier.</p>
            <p>Can use even when Unconscious or prevented from using free_actions.</p>
        </>,
        source: "p.125",
    },
    {
        name: "Stand Up",
        type: ItemType.FREE_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconStandUp,
        rules: <>Movement reduced by 5' until next turn.</>,
        source: "p.294",
    },
];

export default free_actions;
