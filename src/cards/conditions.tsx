import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The 14 conditions (pages 293-295) and child cards.
const conditions: CardData[] = [

    //  Afflicted

    {
        name   : "Afflicted",
        status : "PROOF",
        source : "p.293",
        type   : CardType.CONDITION,
        rules  : <>
            Take specified damage...
            <br/>• <b>combat:</b> ...at end of turn.
            <br/>• <b>!combat:</b> ...every 10s and when someone attempts to remove it.
        </>,
    },

    //  Determined

    {
        name   : "Determined",
        status : "PROOF",
        source : "p.293",
        type   : CardType.CONDITION,
        rules  : <>
            May add <span className="dingbats">o</span> to 1 failed test.
        </>,
    },

    //  Disoriented

    {
        name   : "Disoriented",
        status : "PROOF",
        source : "p.293",
        type   : CardType.CONDITION,
        rules  : <>
            • Can't use <span className="dingbats">r</span>.
            <br/>• Senses are obscured.
            <br/>• Perception tests gain a Disadvantage.
        </>,
    },

    //  Empowered

    {
        name   : "Empowered",
        status : "PROOF",
        source : "p.293",
        type   : CardType.CONDITION,
        rules  : <>
            Until end of scene:
            <br/>• All tests gain an Advantage.
            <br/>• IP refills each turn.
        </>,
    },

    //  Enhanced

    {
        name     : "Enhanced",
        status   : "TODO",
        source   : "p.294",
        type   : CardType.CONDITION,
        keyProps : "Stacking",
        rules    : <>
            TODO: ADD WHITEBOARD!!!
            Doesn't affect Defenses or HP / FP / IP.
        </>,
    },

    //  Exhausted

    {
        name     : "Exhausted",
        status   : "TODO",
        source   : "p.294",
        type   : CardType.CONDITION,
        keyProps : "Stacking",
        rules    : <>
            TODO: ADD WHITEBOARD!!!
            Apply penalty to all tests. (Stacks)
            <br/>• stacks
            <br/>• long rest reduces penalty by 1
        </>,
    },

    //  Focused

    {
        name   : "Focused",
        status : "PROOF",
        source : "p.294",
        type   : CardType.CONDITION,
        rules  : <>
            FP costs reduced by 1.
        </>,
    },

    //  Immobilized

    {
        name   : "Immobilized",
        status : "PROOF",
        source : "p.294",
        type   : CardType.CONDITION,
        rules  : <>
            • Movement becomes 0'.
            <br/>• can't move or be moved
        </>,
    },

    //
    //  Prone
    //

    {
        name     : "Prone",
        status   : "PROOF",
        source   : "p.294",
        type   : CardType.CONDITION,
        flipCard : "Stand Up",
        rules    : <>
            • Slowed
            <br/>• adv ➡ melee against you
            <br/>• can Brace wo/cover
            <br/>• stand up as ▷, then movement -= 5' until next turn
        </>,
    },
    {
        name     : "Stand Up",
        status   : "PROOF",
        source   : "p.294",
        type     : CardType.FREE_ACTION,
        actions  : 0,
        inset    : true,
        rules    : <>
            Movement reduced by 5' until next turn.
        </>,
    },

    //  Restrained

    {
        name   : "Restrained",
        status : "PROOF",
        source : "p.294",
        type   : CardType.CONDITION,
        rules  : <>
            • movement = 0'
            <br/>• disadv ➡ tests other than to escape
        </>,
    },

    //  Slowed

    {
        name   : "Slowed",
        status : "PROOF",
        source : "p.295",
        type   : CardType.CONDITION,
        rules  : <>
            Half movement, rounded up.
        </>,
    },

    //  Stunned

    {
        name   : "Stunned",
        status : "PROOF",
        source : "p.295",
        type   : CardType.CONDITION,
        rules  : <>
            • lose all ↻
            <br/>• next turn: gain -2 ▶ and -1 ↻
        </>,
    },

    //  Surprised

    {
        name   : "Surprised",
        status : "PROOF",
        source : "p.295",
        type   : CardType.CONDITION,
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

    //  Unconscious

    {
        name   : "Unconscious",
        status : "PROOF",
        source : "p.295",
        type   : CardType.CONDITION,
        rules  : <>
            Can only:
            <br/>• Breathe Stormlight
            <br/>• Regenerate
            <br/>• regain consciousness at end of any turn (HP 0 ➡ 1)
        </>,
    },

];


export default conditions;
