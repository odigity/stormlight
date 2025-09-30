import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const conditions: CardData[] = [
    {
        name : "Afflicted",
        type : ItemType.CONDITION,
        icon : "Afflicted.svg",
        rules: <>
            Take specified damage...
            <br/>• <b>combat:</b> ...at end of turn.
            <br/>• <b>!combat:</b> ...every 10s and when someone attempts to remove it.
        </>,
        source: "p.293",
        status: "PROOF",
    },
    {
        name : "Braced",
        type : ItemType.CONDITION,
        icon : "?.svg",
        rules: <>
            TODO
        </>,
        source: "p.303",
        status: "PROOF",
    },
    {
        name : "Determined",
        type : ItemType.CONDITION,
        icon : "Determined.svg",
        rules: <>
            May add <span className="dingbats">o</span> to 1 failed test.
        </>,
        source: "p.293",
        status: "PROOF",
    },
    {
        name : "Disoriented",
        type : ItemType.CONDITION,
        icon : "Disoriented.svg",
        rules: <>
            • Can't use <span className="dingbats">r</span>.
            <br/>• Senses are obscured.
            <br/>• Perception tests gain a Disadvantage.
        </>,
        source: "p.293",
        status: "PROOF",
    },
    {
        name : "Empowered",
        type : ItemType.CONDITION,
        icon : "Empowered.svg",
        rules: <>
            Until end of scene:
            <br/>• All tests gain an Advantage.
            <br/>• IP refills each turn.
        </>,
        source: "p.293",
        status: "PROOF",
    },
    {
        name : "Enhanced",
        type : ItemType.CONDITION,
        icon : "Enhanced.svg",
        rules: <>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            Doesn't affect Physical Defense or HP.
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Enhanced Strength",
        type : ItemType.CONDITION,
        icon : "EnhancedStrength.svg",
        rules: <>
            Doesn't affect Physical Defense or HP.
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Enhanced Speed",
        type : ItemType.CONDITION,
        icon : "EnhancedSpeed.svg",
        rules: <>
            Doesn't affect Physical Defense.
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Enhanced Intellect",
        type : ItemType.CONDITION,
        icon : "EnhancedIntellect.svg",
        rules: <>
            Doesn't affect Cognitive Defense.
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Enhanced Willpower",
        type : ItemType.CONDITION,
        icon : "EnhancedWillpower.svg",
        rules: <>
            Doesn't affect Cognitive Defense or FP.
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Enhanced Awareness",
        type : ItemType.CONDITION,
        icon : "EnhancedAwareness.svg",
        rules: <>
            Doesn't affect Spiritual Defense or IP.
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Enhanced Presence",
        type : ItemType.CONDITION,
        icon : "EnhancedPresence.svg",
        rules: <>
            Doesn't affect Spiritual Defense or IP.
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Exhausted",
        type : ItemType.CONDITION,
        icon : "Exhausted.svg",
        rules: <>
            Apply penalty to all tests. (Stacks)
            <br/>• stacks
            <br/>• long rest reduces penalty by 1
        </>,
        note  : "Stacking",
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Focused",
        type : ItemType.CONDITION,
        icon : "Focused.svg",
        rules: <>
            FP costs reduced by 1.
        </>,
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Immobilized",
        type : ItemType.CONDITION,
        icon : "Immobilized.svg",
        rules: <>
            • Movement becomes 0'.
            <br/>• can't move or be moved
        </>,
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Prone",
        type : ItemType.CONDITION,
        icon : "Prone.svg",
        rules: <>
            • Slowed
            <br/>• adv ➡ melee against you
            <br/>• can Brace wo/cover
            <br/>• stand up as ▷, then movement -= 5' until next turn
        </>,
        source: "p.294",
        reverseCard: "Stand Up",
        status: "PROOF",
    },
    {
        name : "Restrained",
        type : ItemType.CONDITION,
        icon : "Restrained.svg",
        rules: <>
            • movement = 0'
            <br/>• disadv ➡ tests other than to escape
        </>,
        source: "p.294",
        status: "PROOF",
    },
    {
        name : "Slowed",
        type : ItemType.CONDITION,
        icon : "Slowed.svg",
        rules: <>
            Half movement, rounded up.
        </>,
        source: "p.295",
        status: "PROOF",
    },
    {
        name : "Stunned",
        type : ItemType.CONDITION,
        icon : "Stunned.svg",
        rules: <>
            • lose all ↻
            <br/>• next turn: gain -2 ▶ and -1 ↻
        </>,
        source: "p.295",
        status: "PROOF",
    },
    {
        name : "Surprised",
        type : ItemType.CONDITION,
        icon : "Surprised.svg",
        rules: <>
            <p>
                • lose all ↻
                <br/>• don't gain ↻ at SoC
            </p>
            <p>
                First turn:
                <br/>• can't take fast turn
                <br/>• gain -1 ▶ and ↻
            </p>
        </>,
        source: "p.295",
        status: "PROOF",
    },
    {
        name : "Unconscious",
        type : ItemType.CONDITION,
        icon : "Unconscious.svg",
        rules: <>
            Can only:
            <br/>• Breathe Stormlight
            <br/>• Regenerate
            <br/>• regain consciousness at end of any turn (HP 0 ➡ 1)
        </>,
        source: "p.295",
        status: "PROOF",
    },
];


export default conditions;
