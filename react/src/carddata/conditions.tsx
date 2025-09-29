import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const conditions: CardData[] = [
    {
        name         : "Afflicted",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Afflicted.svg",
        rules        : <>
            Take specified damage...
            <br/>• <b>combat:</b> ...at end of turn.
            <br/>• <b>!combat:</b> ...every 10s and when someone attempts to remove it.
        </>,
        source: "p.293",
    },
    {
        name         : "Determined",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Determined.svg",
        rules        : <>
            May add <span className="dingbats">o</span> to 1 failed test.
        </>,
        source       : "p.293",
    },
    {
        name         : "Disoriented",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Disoriented.svg",
        rules        : <>
            • Can't use <span className="dingbats">r</span>.
            <br/>• Senses are obscured.
            <br/>• Perception tests gain a Disadvantage.
        </>,
        source: "p.293",
    },
    {
        name         : "Empowered",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Empowered.svg",
        rules        : <>
            Until end of scene:
            <br/>• All tests gain an Advantage.
            <br/>• IP refills each turn.
        </>,
        source: "p.293",
    },
    {
        name         : "Enhanced",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Enhanced.svg",
        rules        : <>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            Doesn't affect Physical Defense or HP.
        </>,
        note  : "Stacking",
        source: "p.294",
    },
    {
        name         : "Enhanced Strength",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "EnhancedStrength.svg",
        rules        : <>
            Doesn't affect Physical Defense or HP.
        </>,
        note         : "Stacking",
        source       : "p.294",
    },
    {
        name         : "Enhanced Speed",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "EnhancedSpeed.svg",
        rules        : <>
            Doesn't affect Physical Defense.
        </>,
        note         : "Stacking",
        source       : "p.294",
    },
    {
        name         : "Enhanced Intellect",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "EnhancedIntellect.svg",
        rules        : <>
            Doesn't affect Cognitive Defense.
        </>,
        note         : "Stacking",
        source       : "p.294",
    },
    {
        name         : "Enhanced Willpower",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "EnhancedWillpower.svg",
        rules        : <>
            Doesn't affect Cognitive Defense or FP.
        </>,
        note         : "Stacking",
        source       : "p.294",
    },
    {
        name         : "Enhanced Awareness",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "EnhancedAwareness.svg",
        rules        : <>
            Doesn't affect Spiritual Defense or IP.
        </>,
        note         : "Stacking",
        source       : "p.294",
    },
    {
        name         : "Enhanced Presence",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "EnhancedPresence.svg",
        rules        : <>
            Doesn't affect Spiritual Defense or IP.
        </>,
        note         : "Stacking",
        source       : "p.294",
    },
    {
        name         : "Exhausted",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Exhausted.svg",
        rules        : <>
            Apply penalty to all tests. (Stacks)
            <br/>• stacks
            <br/>• long rest reduces penalty by 1
        </>,
        note  : "Stacking",
        source: "p.294",
    },
    {
        name         : "Focused",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Focused.svg",
        rules        : <>
            FP costs reduced by 1.
        </>,
        source       : "p.294",
    },
    {
        name         : "Immobilized",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Immobilized.svg",
        rules        : <>
            • Movement becomes 0'.
            <br/>• can't move or be moved
        </>,
        source: "p.294",
    },
    {
        name         : "Prone",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Prone.svg",
        rules        : <>
            • Slowed
            <br/>• adv ➡ melee against you
            <br/>• can Brace wo/cover
            <br/>• stand up as ▷, then movement -= 5' until next turn
        </>,
        source: "p.294",
    },
    {
        name         : "Restrained",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Restrained.svg",
        rules        : <>
            • movement = 0'
            <br/>• disadv ➡ tests other than to escape
        </>,
        source: "p.294",
    },
    {
        name         : "Slowed",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Slowed.svg",
        rules        : <>
            Half movement, rounded up.
        </>,
        source       : "p.295",
    },
    {
        name         : "Stunned",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Stunned.svg",
        rules        : <>
            • lose all ↻
            <br/>• next turn: gain -2 ▶ and -1 ↻
        </>,
        source: "p.295",
    },
    {
        name         : "Surprised",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Surprised.svg",
        rules        : <>
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
    },
    {
        name         : "Unconscious",
        type         : ItemType.CONDITION,
        rulesCentered: false,
        icon         : "Unconscious.svg",
        rules        : <>
            Can only:
            <br/>• Breathe Stormlight
            <br/>• Regenerate
            <br/>• regain consciousness at end of any turn (HP 0 ➡ 1)
        </>,
        source: "p.295",
    },
];


export default conditions;
