import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The 3 Stormlight actions and child cards + shared Order talents + radiant shardblade & shardplate and child cards.
// TODO: Order talents
const radiant: CardData[] = [

    //  Breathe Stormlight

    {
        name    : "Breathe Stormlight",
        status  : "PROOF",
        source  : "p.124",
        type     : CardType.ACTION,
        actions : 2,
        rules   : <>
            <p>Refill IP from spheres within 5'.<br/><i>(1 IP / infused mark or broam)</i></p>
            <p>Can use when Unconcscious or prevented from using free_actions.</p>
        </>,
    },

    //
    //  Enhance
    //

    {
        name     : "Enhance",
        status   : "PROOF",
        source   : "p.124",
        flipCard : "Maintain Enhance",
        type     : CardType.ACTION,
        actions  : 1,
        ip       : 1,
        fp       : 1,
        rules    : <>
            Until end of next turn:<br/>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            <i>To renew, see reverse side.</i>
        </>,
    },
    {
        name     : "Enhanced (Physical)",
        status   : "TODO",
        source   : "p.294",
        type     : CardType.CONDITION,
        keyProps : "Stacking",
        rules    : <>
            TODO: ADD WHITEBOARD!!!
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            Doesn't affect Physical Defense or HP.
        </>,
    },
    {
        name     : "Maintain Enhance",
        status   : "PROOF",
        source   : "p.125",
        type     : CardType.FREE_ACTION,
        inset    : true,
        actions  : 0,
        ip       : 1,
        rules    : <>
            Maintain existing Enhance effect until end of next turn.
        </>,
    },

    //  Regenerate

    {
        name    : "Regenerate",
        status  : "PROOF",
        source  : "p.125",
        type     : CardType.FREE_ACTION,
        actions : 0,
        ip      : 1,
        rules   : <>
            <p>HP += 1d6 + tier.</p>
            <p>Can use even when Unconscious or prevented from using free_actions.</p>
        </>,
    },

    //
    //  Radiant Shardblade
    //

    {
        name     : "Shardblade (Radiant)",
        status   : "TODO",
        source   : "p.248",
        type     : CardType.MAGIC_ITEM,
        keyProps : "Special Weapon",
        rules    : <>
            TODO<br/>
            <b>Skill: *<br/>2d* spirit</b><br/>Deadly, *
        </>,
    },
    {
        name    : "Shape Shardblade",
        status  : "TODO",
        source  : "p.249",
        type    : CardType.FREE_ACTION,
        actions : 0,
        rules   : <>
            "Malleable Form"
        </>,
    },

    //
    //  Radiant Shardplate
    //

    {
        name   : "Shardplate (Radiant)",
        status : "TODO",
        source : "p.254",
        type     : CardType.MAGIC_ITEM,
        rules  : <>
            TODO
        </>,
    },
    {
        name    : "Command Armor",
        status  : "TODO",
        source  : "p.255",
        type    : CardType.ACTION,
        actions : 1,
        rules   : <>
            "Living Armor"
        </>,
    },

];


export default radiant;
