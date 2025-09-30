import type {CardData} from "../types/types.ts";


const conditions: CardData[] = [
    {
        name   : "Afflicted",
        status : "PROOF",
        source : "p.293",
        art    : "Afflicted.svg",
        rules  : <>
            Take specified damage...
            <br/>• <b>combat:</b> ...at end of turn.
            <br/>• <b>!combat:</b> ...every 10s and when someone attempts to remove it.
        </>,
    },
    {
        name   : "Braced",
        status : "PROOF",
        source : "p.303",
        art    : "?.svg",
        rules  : <>
            TODO
        </>,
    },
    {
        name   : "Determined",
        status : "PROOF",
        source : "p.293",
        art    : "Determined.svg",
        rules  : <>
            May add <span className="dingbats">o</span> to 1 failed test.
        </>,
    },
    {
        name   : "Disoriented",
        status : "PROOF",
        source : "p.293",
        art    : "Disoriented.svg",
        rules  : <>
            • Can't use <span className="dingbats">r</span>.
            <br/>• Senses are obscured.
            <br/>• Perception tests gain a Disadvantage.
        </>,
    },
    {
        name   : "Empowered",
        status : "PROOF",
        source : "p.293",
        art    : "Empowered.svg",
        rules  : <>
            Until end of scene:
            <br/>• All tests gain an Advantage.
            <br/>• IP refills each turn.
        </>,
    },
    {
        name     : "Enhanced",
        status   : "PROOF",
        source   : "p.294",
        art      : "Enhanced.svg",
        keyProps : "Stacking",
        rules    : <>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            Doesn't affect Physical Defense or HP.
        </>,
    },
    {
        name   : "Enhanced Strength",
        status : "PROOF",
        source : "p.294",
        art    : "EnhancedStrength.svg",
        keyProps : "Stacking",
        rules  : <>
            Doesn't affect Physical Defense or HP.
        </>,
    },
    {
        name     : "Enhanced Speed",
        status   : "PROOF",
        source   : "p.294",
        art      : "EnhancedSpeed.svg",
        keyProps : "Stacking",
        rules    : <>
            Doesn't affect Physical Defense.
        </>,
    },
    {
        name     : "Enhanced Intellect",
        status   : "PROOF",
        source   : "p.294",
        art      : "EnhancedIntellect.svg",
        keyProps : "Stacking",
        rules    : <>
            Doesn't affect Cognitive Defense.
        </>,
    },
    {
        name     : "Enhanced Willpower",
        status   : "PROOF",
        source   : "p.294",
        art      : "EnhancedWillpower.svg",
        keyProps : "Stacking",
        rules    : <>
            Doesn't affect Cognitive Defense or FP.
        </>,
    },
    {
        name     : "Enhanced Awareness",
        status   : "PROOF",
        source   : "p.294",
        art      : "EnhancedAwareness.svg",
        keyProps : "Stacking",
        rules    : <>
            Doesn't affect Spiritual Defense or IP.
        </>,
    },
    {
        name     : "Enhanced Presence",
        status   : "PROOF",
        source   : "p.294",
        art      : "EnhancedPresence.svg",
        keyProps : "Stacking",
        rules    : <>
            Doesn't affect Spiritual Defense or IP.
        </>,
    },
    {
        name     : "Exhausted",
        status   : "PROOF",
        source   : "p.294",
        art      : "Exhausted.svg",
        keyProps : "Stacking",
        rules    : <>
            Apply penalty to all tests. (Stacks)
            <br/>• stacks
            <br/>• long rest reduces penalty by 1
        </>,
    },
    {
        name   : "Focused",
        status : "PROOF",
        source : "p.294",
        art    : "Focused.svg",
        rules  : <>
            FP costs reduced by 1.
        </>,
    },
    {
        name   : "Immobilized",
        status : "PROOF",
        source : "p.294",
        art    : "Immobilized.svg",
        rules  : <>
            • Movement becomes 0'.
            <br/>• can't move or be moved
        </>,
    },
    {
        name        : "Prone",
        status      : "PROOF",
        source      : "p.294",
        flipCard : "Stand Up",
        art         : "Prone.svg",
        rules       : <>
            • Slowed
            <br/>• adv ➡ melee against you
            <br/>• can Brace wo/cover
            <br/>• stand up as ▷, then movement -= 5' until next turn
        </>,
    },
    {
        name   : "Restrained",
        status : "PROOF",
        source : "p.294",
        art    : "Restrained.svg",
        rules  : <>
            • movement = 0'
            <br/>• disadv ➡ tests other than to escape
        </>,
    },
    {
        name   : "Slowed",
        status : "PROOF",
        source : "p.295",
        art    : "Slowed.svg",
        rules  : <>
            Half movement, rounded up.
        </>,
    },
    {
        name   : "Stunned",
        status : "PROOF",
        source : "p.295",
        art    : "Stunned.svg",
        rules  : <>
            • lose all ↻
            <br/>• next turn: gain -2 ▶ and -1 ↻
        </>,
    },
    {
        name   : "Surprised",
        status : "PROOF",
        source : "p.295",
        art    : "Surprised.svg",
        rules  : <>
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
    },
    {
        name   : "Unconscious",
        status : "PROOF",
        source : "p.295",
        art    : "Unconscious.svg",
        rules  : <>
            Can only:
            <br/>• Breathe Stormlight
            <br/>• Regenerate
            <br/>• regain consciousness at end of any turn (HP 0 ➡ 1)
        </>,
    },
];


export default conditions;
