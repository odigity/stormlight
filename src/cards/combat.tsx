import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The 15 combat actions (pages 303-305, ignoring Banter & Drop) and child cards.
const combat: CardData[] = [

    //  Aid

    {
        name    : "Aid",
        status  : "PROOF",
        source  : "p.305",
        type     : CardType.REACTION,
        actions : -1,
        fp      : 1,
        rules   : <>
            Grant an ally an Advantage on their current test.
        </>,
    },

    //  Avoid Danger

    {
        name    : "Avoid Danger",
        status  : "PROOF",
        source  : "p.305",
        type     : CardType.REACTION,
        actions : -1,
        rules   : <>
            <i>Agility vs DC15 or enemy's instigating test:</i><br/>
            Avoid harm (within reason).
        </>,
    },

    //
    //  Brace
    //

    {
        name     : "Brace",
        status   : "DONE",
        source   : "p.303",
        flipCard : "Braced",
        type     : CardType.ACTION,
        actions  : 1,
        rules    : <>
            Hide behind cover within 5'. Grants a Disadvantage on attacks against you until you attack or move.
        </>,
    },
    {
        name     : "Braced",
        status   : "TODO",
        source   : "p.303",
        type     : CardType.EFFECT,
        rules    : <>
            TODO
        </>,
    },

    //  Disengage

    {
        name    : "Disengage",
        status  : "PROOF",
        source  : "p.303",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            Move 5' without provoking a Reactive Strike.
        </>,
    },

    //  Dodge

    {
        name    : "Dodge",
        status  : "PROOF",
        source  : "p.305",
        type     : CardType.REACTION,
        actions : -1,
        fp      : 1,
        rules   : <>
            Add a Disadvantage to attacker's test.
        </>,
    },

    //  Gain Advantage

    {
        name    : "Gain Advantage",
        status  : "PROOF",
        source  : "p.303",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            <i>Any skill vs enemy's corresponding defense:</i>
            <br/>Gain an Advantage on next test using a different skill vs that enemy.
        </>,
    },

    //
    //  Grapple
    //

    {
        name     : "Grapple",
        status   : "PROOF",
        source   : "p.304",
        flipCard : "End Grapple",
        type     : CardType.ACTION,
        actions  : 2,
        rules    : <>
            <i>Athletics vs Physical:</i> Restrained until...
            <br/>• you become Unconcscious
            <br/>• they exit your reach somehow
            <br/>• you end as ▷
        </>,
    },
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

    //  Interact

    {
        name     : "Interact",
        status   : "PROOF",
        source   : "p.303",
        flipCard : "Quickdraw",
        type     : CardType.ACTION,
        actions  : 1,
        keyProps : "Reusable",
        rules    : <>
            • draw / sheath weapon
            <br/>• open / close door
            <br/>• pick up / fetch item
            <br/>• hand item to ally
        </>,
    },

    //  Move

    {
        name     : "Move",
        status   : "PROOF",
        source   : "p.303",
        type     : CardType.ACTION,
        actions  : 1,
        keyProps : "Reusable.svg",
        rules    : <>
            Slowed if crawling, climbing, swimming, or stealthy.
        </>,
    },

    //  Reactive Strike

    {
        name    : "Reactive Strike",
        status  : "PROOF",
        source  : "p.305",
        type     : CardType.REACTION,
        actions : -1,
        fp      : 1,
        rules   : <>
            When enemy voluntarily exits reach:<br/>
            <i>Melee vs Physical</i>
        </>,
    },

    //  Ready

    {
        name    : "Ready",
        status  : "PROOF",
        source  : "p.304",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            Choose trigger and action.
            <br/>Pay the action cost up front.
        </>,
    },

    //  Recover

    {
        name     : "Recover",
        status   : "PROOF",
        source   : "p.304",
        type     : CardType.ACTION,
        actions  : 2,
        keyProps : "Once per scene",
        rules    : <>
            Recovery die ➡ HP and/or FP.
        </>,
    },

    //  Shove

    {
        name    : "Shove",
        status  : "PROOF",
        source  : "p.304",
        type     : CardType.ACTION,
        actions : 2,
        rules   : <>
            <p><i>Athletics vs Physical:</i> Push or pull target 5' horizontally.</p>
            <p>Also breaks Grapple.</p>
        </>,
    },

    //
    //  Strike
    //

    {
        name      : "Strike (Offhand)",
        status    : "PROOF",
        source    : "p.303",
        type     : CardType.ACTION,
        actions   : 1,
        fp        : 2,
        rules     : <>
            <div>
                <div className="italic" style={{marginBottom: '10px'}}>Unarmed or Weapon<br/>vs Physical</div>
            </div>
            <br />
            <b>Tip:</b> Offhand trait = -1 FP
        </>,
    },
    {
        name    : "Strike (Primary)",
        status  : "PROOF",
        source  : "p.303",
        type     : CardType.ACTION,
        actions : 1,
        //fp      : "*",
        rules   : <>
            <div>
                <div className='italic'>Unarmed or Weapon<br/>vs Physical</div>
            </div>
            <br />
            <b>Tip:</b> miss ➡ graze for 1 FP<br /><i>(dice dmg only)</i>
        </>,
    },

    // Use a Skill

    {
        name    : "Use a Skill",
        status  : "PROOF",
        source  : "p.303",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            Perform challenging task around battlefield.
        </>,
    },

];


export default combat;
