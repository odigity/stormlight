import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The 22 mundane weapons (pages 246-248) + 2 weapon trait actions.
const weapons: CardData[] = [

    //
    //  Light Weapons
    //

    {
        name     : "Javelin",
        status   : "PROOF",
        source   : "p.246",
        type     : CardType.ITEM,
        keyProps : "Light Weaponry",
        rules    : <>
            <b>1d6 keen</b><br/>30'/120'<br/><i>Indirect</i>
        </>,
    },
    {
        name      : "Knife",
        status    : "PROOF",
        source    : "p.246",
        type     : CardType.ITEM,
        keyProps  : "Light Weaponry",
        rules     : <>
            <b>1d4 keen</b><br/>Discreet<br/><i>Offhand, 20'/60'</i>
        </>,
    },
    {
        name     : "Mace",
        status   : "PROOF",
        source   : "p.246",
        type     : CardType.ITEM,
        keyProps : "Light Weaponry",
        rules    : <>
            <b>1d6 impact</b><br/><i>Momentum</i>
        </>,
    },
    {
        name     : "Rapier",
        status   : "PROOF",
        source   : "p.246",
        type     : CardType.ITEM,
        keyProps : "Light Weaponry",
        rules    : <>
            <b>1d6 keen</b><br/>Quickdraw<br/><i>Defensive</i>
        </>,
    },
    {
        name      : "Shortspear",
        status    : "PROOF",
        source    : "p.246",
        type     : CardType.ITEM,
        keyProps  : "Light Weaponry",
        rules     : <>
            <b>1d8 keen</b><br/>2🖐️<br/><i>not 2🖐️</i>
        </>,
    },
    {
        name     : "Sidesword",
        status   : "PROOF",
        source   : "p.246",
        type     : CardType.ITEM,
        keyProps : "Light Weaponry",
        rules    : <>
            <b>1d6 keen</b><br/>Quickdraw<br/><i>Offhand</i>
        </>,
    },
    {
        name     : "Staff",
        status   : "PROOF",
        source   : "p.246",
        type     : CardType.ITEM,
        keyProps : "Light Weaponry",
        rules    : <>
            <b>1d6 impact</b><br/>Discreet, 2🖐️<br/><i>Defensive</i>
        </>,
    },
    {
        name     : "Shortbow",
        status   : "PROOF",
        source   : "p.246",
        type     : CardType.ITEM,
        keyProps : "Light Weaponry",
        rules    : <>
            <b>1d6 keen</b><br/>80'/320', 2🖐️<br/><i>Quickdraw</i>
        </>,
    },
    {
        name     : "Sling",
        status   : "PROOF",
        source   : "p.246",
        type     : CardType.ITEM,
        keyProps : "Light Weaponry",
        rules    : <>
            <b>1d4 impact</b><br/>Discrete<br/><i>Indirect</i>
        </>,
    },

    //
    //  Heavy Weapons
    //

    {
        name     : "Axe",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d6 keen</b><br/>20'/60'<br/><i>Offhand</i>
        </>,
    },
    {
        name     : "Greatsword",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d10 keen</b><br/>2🖐️<br/><i>Deadly</i>
        </>,
    },
    {
        name     : "Hammer",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d10 impact</b><br/>2🖐️<br/><i>Momentum</i>
        </>,
    },
    {
        name     : "Longspear",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d8 keen</b><br/>2🖐️<br/><i>Defensive</i>
        </>,
    },
    {
        name     : "Longsword",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d8 keen</b><br/>Quickdraw, 2🖐️<br/><i>not 2🖐️</i>
        </>,
    },
    {
        name     : "Poleaxe",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d10 keen</b><br/>2🖐️<br/><i>+5'</i>
        </>,
    },
    {
        name     : "Shield",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d4 impact</b><br/>Defensive<br/><i>Offhand</i>
        </>,
    },
    {
        name     : "Crossbow",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d8 keen</b><br/>100'/400', Loaded [1], 2🖐️<br/><i>Deadly</i>
        </>,
    },
    {
        name     : "Longbow",
        status   : "PROOF",
        source   : "p.247",
        type     : CardType.ITEM,
        keyProps : "Heavy Weaponry",
        rules    : <>
            <b>1d6 keen</b><br/>150'/600', 2🖐️<br/><i>Indirect</i>
        </>,
    },

    //
    //  Special Weapons
    //

    {
        name     : "Grandbow",
        status   : "PROOF",
        source   : "p.248",
        type     : CardType.ITEM,
        keyProps : "Special Weapon",
        rules    : <>
            <b>Heavy Weaponry<br/>2d6 keen</b><br/>200'/800', Cumbersome [5], 2🖐️<br/><i>Pierce</i>
        </>,
    },
    {
        name     : "Improvised Weapon",
        status   : "PROOF",
        source   : "p.248",
        type     : CardType.ITEM,
        keyProps : "Special Weapon",
        rules    : <>
            <b>Skill: same as similar<br/>Dmg: same as similar</b><br/>Fragile
        </>,
    },
    {
        name     : "Unarmed Attack",
        status   : "PROOF",
        source   : "p.248",
        type     : CardType.ITEM,
        keyProps : "Special Weapon",
        rules    : <>
            <p>Athletics</p>
            <div className="rules-table" style={{ fontSize: ".7rem" }}>
                <div className="rules-header">
                    <div className="rules-cell">Str</div>
                    <div className="rules-cell">0-2</div>
                    <div className="rules-cell">3-4</div>
                    <div className="rules-cell">5-6</div>
                    <div className="rules-cell">7-8</div>
                    <div className="rules-cell">9+</div>
                </div>
                <div className="rules-row">
                    <div className="rules-cell">Dmg</div>
                    <div className="rules-cell">1</div>
                    <div className="rules-cell">1d4</div>
                    <div className="rules-cell">1d8</div>
                    <div className="rules-cell">2d6</div>
                    <div className="rules-cell">2d10</div>
                </div>
            </div>
            <p><i>Momentum, Offhand</i></p>
        </>,
    },
    {
        name     : "Warhammer",
        status   : "TODO",
        source   : "p.248",
        type     : CardType.ITEM,
        keyProps : "Special Weapon",
        rules    : <>
            <b>Heavy Weaponry<br/>2d10 impact</b><br/>Cumbersome [5], 2🖐️<br/><i>Expert: *</i>
        </>,
    },

    //
    //  Weapon Trait Actions
    //

    {
        name    : "Quickdraw",
        status  : "TODO",
        source  : "p.245",
        type     : CardType.FREE_ACTION,
        actions : 0,
        rules   : <>
            TODO<br/>
            for weapons with Quickdraw trait
            (include text: "counts as Interact action")
        </>,
    },
    {
        name    : "Reload",
        status  : "PROOF",
        source  : "p.245",
        type     : CardType.ACTION,
        actions : 1,
        rules   : <>
            Reload weapon to full ammunition.
        </>,
    },

];


export default weapons;
