import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


const actions_combat: CardData[] = [

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
        name    : "Disengage",
        status  : "PROOF",
        source  : "p.303",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            Move 5' without provoking a Reactive Strike.
        </>,
    },
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


export default actions_combat;
