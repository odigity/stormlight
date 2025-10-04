import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


const warrior_stances: CardData[] = [

    //
    //  Vigilant Stance
    //

    {
        name    : "Enter Vigilant Stance",
        status  : "TODO",
        source  : "p.115",
        type     : CardType.ACTION,
        actions : 1,
    },
    {
        name   : "Vigilant Stance",
        status : "TODO",
        source : "p.115",
        type   : CardType.EFFECT,
        rules  : <>
            -1 FP for Dodge | Reactive Strike
        </>,
    },
    {
        name    : "End Stance",
        status  : "TODO",
        source  : "p.115",
        type     : CardType.FREE_ACTION,
        actions : 0,
    },
    {
        name    : "Switch Stances",
        status  : "TODO",
        source  : "p.115",
        type     : CardType.FREE_ACTION,
        actions : 0,
        rules    : <>
            <i>Must currently be in Vigilant Stance.</i>
        </>,
    },

    //
    //  Bloodstance
    //

    {
        name    : "Enter Bloodstance",
        status  : "TODO",
        source  : "p.119",
        type     : CardType.ACTION,
        actions : 1,
    },
    {
        name   : "Bloodstance",
        status : "TODO",
        source : "p.119",
        type   : CardType.EFFECT,
        rules  : <>
            +2 Opp range for atk|Phy, -2 Defs
        </>,
    },

    //
    //  Flamestance
    //

    {
        name    : "Enter Flamestance",
        status  : "TODO",
        source  : "p.118",
        type     : CardType.ACTION,
        actions : 1,
    },
    {
        name   : "Flamestance",
        status : "TODO",
        source : "p.118",
        type   : CardType.EFFECT,
        rules  : <>
            adv on Intimidation; when alone with enemy: ▷ for ▶ to Gain Adv | attack
        </>,
    },

    //
    //  Ironstance
    //

    {
        name    : "Enter Ironstance",
        status  : "TODO",
        source  : "p.118",
        type     : CardType.ACTION,
        actions : 1,
    },
    {
        name   : "Ironstance",
        status : "TODO",
        source : "p.118",
        type   : CardType.EFFECT,
        rules  : <>
            adv on Insight; miss/graze you = AoO
        </>,
    },

    //
    //  Stonestance
    //

    {
        name    : "Enter Stonestance",
        status  : "TODO",
        source  : "p.120",
        type     : CardType.ACTION,
        actions : 1,
    },
    {
        name   : "Stonestance",
        status : "TODO",
        source : "p.120",
        type   : CardType.EFFECT,
        rules  : <>
            +1 Defl; +▶ for enemies wi/reach to attack allies
        </>,
    },

    //
    //  Vinestance
    //

    {
        name    : "Enter Vinestance",
        status  : "TODO",
        source  : "p.118",
        type     : CardType.ACTION,
        actions : 1,
    },
    {
        name   : "Vinestance",
        status : "TODO",
        source : "p.118",
        type   : CardType.EFFECT,
        rules  : <>
            +1 Phy/Cog Defs; melee hit/graze you = ↻ to Ath vs Cog = -1d4 FP + shove 5-25'
        </>,
    },

    //
    //  Windstance
    //

    {
        name    : "Enter Windstance",
        status  : "TODO",
        source  : "p.121",
        type     : CardType.ACTION,
        actions : 1,
    },
    {
        name   : "Windstance",
        status : "TODO",
        source : "p.121",
        type   : CardType.EFFECT,
        rules  : <>
            adv on Agility; 2+ wi/reach: ▷ = ▶ to Disengage | atk
        </>,
    },

];


export default warrior_stances;
