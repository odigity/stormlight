import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";

// Icons
import IconAfflicted from "../assets/icons/effects/Afflicted.svg";
import IconDetermined from "../assets/icons/effects/Determined.svg";
import IconDisoriented from "../assets/icons/effects/Disoriented.svg";
import IconEmpowered from "../assets/icons/effects/Empowered.svg";
import IconEnhanced from "../assets/icons/effects/Enhanced.svg";
import IconEnhancedStrength from "../assets/icons/effects/EnhancedStrength.svg";
import IconEnhancedSpeed from "../assets/icons/effects/EnhancedSpeed.svg";
import IconEnhancedIntellect from "../assets/icons/effects/EnhancedIntellect.svg";
import IconEnhancedWillpower from "../assets/icons/effects/EnhancedWillpower.svg";
import IconEnhancedAwareness from "../assets/icons/effects/EnhancedAwareness.svg";
import IconEnhancedPresence from "../assets/icons/effects/EnhancedPresence.svg";
import IconExhausted from "../assets/icons/effects/Exhausted.svg";
import IconFocused from "../assets/icons/effects/Focused.svg";
import IconImmobilized from "../assets/icons/effects/Immobilized.svg";
import IconProne from "../assets/icons/effects/Prone.svg";
import IconRestrained from "../assets/icons/effects/Restrained.svg";
import IconSlowed from "../assets/icons/effects/Slowed.svg";
import IconStunned from "../assets/icons/effects/Stunned.svg";
import IconSurprised from "../assets/icons/effects/Surprised.svg";
import IconUnconscious from "../assets/icons/effects/Unconscious.svg";
import {rules} from "eslint-plugin-react-hooks";

const conditions: CardData[] = [
    {
        name: "Afflicted",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconAfflicted,
        rules: <>
            Take specified damage...
            <br/>• <b>combat:</b> ...at end of turn.
            <br/>• <b>!combat:</b> ...every 10s and when someone attempts to remove it.
        </>,
        source: "p.293",
    },
    {
        name: "Determined",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconDetermined,
        rules: <>May add <span className="dingbats">o</span> to 1 failed test.</>,
        source: "p.293",
    },
    {
        name: "Disoriented",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconDisoriented,
        rules: <>
            • Can't use <span className="dingbats">r</span>.
            <br/>• Senses are obscured.
            <br/>• Perception tests gain a Disadvantage.
        </>,
        source: "p.293",
    },
    {
        name: "Empowered",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEmpowered,
        rules: <>
            Until end of scene:
            <br/>• All tests gain an Advantage.
            <br/>• IP refills each turn.
        </>,
        source: "p.293",
    },
    {
        name: "Enhanced",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhanced,
        rules: <>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            Doesn't affect Physical Defense or HP.
        </>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Enhanced Strength",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhancedStrength,
        rules: <>Doesn't affect Physical Defense or HP.</>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Enhanced Speed",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhancedSpeed,
        rules: <>Doesn't affect Physical Defense.</>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Enhanced Intellect",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhancedIntellect,
        rules: <>Doesn't affect Cognitive Defense.</>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Enhanced Willpower",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhancedWillpower,
        rules: <>Doesn't affect Cognitive Defense or FP.</>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Enhanced Awareness",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhancedAwareness,
        rules: <>Doesn't affect Spiritual Defense or IP.</>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Enhanced Presence",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhancedPresence,
        rules: <>Doesn't affect Spiritual Defense or IP.</>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Exhausted",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconExhausted,
        rules: <>
            Apply penalty to all tests. (Stacks)
            <br/>• stacks
            <br/>• long rest reduces penalty by 1
        </>,
        note: "Stacking",
        source: "p.294",
    },
    {
        name: "Focused",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconFocused,
        rules: <>FP costs reduced by 1.</>,
        source: "p.294",
    },
    {
        name: "Immobilized",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconImmobilized,
        rules: <>
            • Movement becomes 0'.
            <br/>• can't move or be moved
        </>,
        source: "p.294",
    },
    {
        name: "Prone",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconProne,
        rules: <>
            • Slowed
            <br/>• adv ➡ melee against you
            <br/>• can Brace wo/cover
            <br/>• stand up as ▷, then movement -= 5' until next turn
        </>,
        source: "p.294",
    },
    {
        name: "Restrained",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconRestrained,
        rules: <>
            • movement = 0'
            <br/>• disadv ➡ tests other than to escape
        </>,
        source: "p.294",
    },
    {
        name: "Slowed",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconSlowed,
        rules: <>Half movement, rounded up.</>,
        source: "p.295",
    },
    {
        name: "Stunned",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconStunned,
        rules: <>
            • lose all ↻
            <br/>• next turn: gain -2 ▶ and -1 ↻
        </>,
        source: "p.295",
    },
    {
        name: "Surprised",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconSurprised,
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
    },
    {
        name: "Unconscious",
        type: ItemType.CONDITION,
        actions: 1,
        rulesCentered: false,
        icon: IconUnconscious,
        rules: <>
            Can only:
            <br/>• Breathe Stormlight
            <br/>• Regenerate
            <br/>• regain consciousness at end of any turn (HP 0 ➡ 1)
        </>,
        source: "p.295",
    },
];

export default conditions;
