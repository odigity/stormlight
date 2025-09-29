import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const items: CardData[] = [
    {
        name         : "Javelin",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Javelin.svg",
        rules        : <>
            <b>1d6 keen</b><br/>30'/120'<br/><i>Indirect</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
    },
    {
        name         : "Knife",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Knife.svg",
        rules        : <>
            <b>1d4 keen</b><br/>Discreet<br/><i>Offhand, 20'/60'</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
        mirrorIcon   : true,
    },
    {
        name         : "Mace",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Mace.svg",
        rules        : <>
            <b>1d6 impact</b><br/><i>Momentum</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
    },
    {
        name         : "Rapier",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Rapier.svg",
        rules        : <>
            <b>1d6 keen</b><br/>Quickdraw<br/><i>Defensive</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
    },
    {
        name         : "Shortbow",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Shortbow.svg",
        rules        : <>
            <b>1d6 keen</b><br/>80'/320', 2🖐️<br/><i>Quickdraw</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
    },
    {
        name         : "Shortspear",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Shortspear.svg",
        rules        : <>
            <b>1d8 keen</b><br/>2🖐️<br/><i>not 2🖐️</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
        mirrorIcon   : true,
    },
    {
        name         : "Sidesword",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Sidesword.svg",
        rules        : <>
            <b>1d6 keen</b><br/>Quickdraw<br/><i>Offhand</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
    },
    {
        name         : "Staff",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Staff.svg",
        rules        : <>
            <b>1d6 impact</b><br/>Discreet, 2🖐️<br/><i>Defensive</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
    },
    {
        name         : "Sling",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Sling.svg",
        rules        : <>
            <b>1d4 impact</b><br/>Discrete<br/><i>Indirect</i>
        </>,
        note         : "Light Weaponry",
        source       : "p.246",
    },
    // Heavy Weaponry
    {
        name         : "Axe",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Axe.svg",
        rules        : <>
            <b>1d6 keen</b><br/>20'/60'<br/><i>Offhand</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Crossbow",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Crossbow.svg",
        rules        : <>
            <b>1d8 keen</b><br/>100'/400', Loaded [1], 2🖐️<br/><i>Deadly</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Greatsword",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Greatsword.svg",
        rules        : <>
            <b>1d10 keen</b><br/>2🖐️<br/><i>Deadly</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Hammer",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Hammer.svg",
        rules        : <>
            <b>1d10 impact</b><br/>2🖐️<br/><i>Momentum</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Longbow",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Longbow.svg",
        rules        : <>
            <b>1d6 keen</b><br/>150'/600', 2🖐️<br/><i>Indirect</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Longspear",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Longspear.svg",
        rules        : <>
            <b>1d8 keen</b><br/>2🖐️<br/><i>Defensive</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Longsword",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Longsword.svg",
        rules        : <>
            <b>1d8 keen</b><br/>Quickdraw, 2🖐️<br/><i>not 2🖐️</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Poleaxe",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Poleaxe.svg",
        rules        : <>
            <b>1d10 keen</b><br/>2🖐️<br/><i>+5'</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    {
        name         : "Shield",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Shield.svg",
        rules        : <>
            <b>1d4 impact</b><br/>Defensive<br/><i>Offhand</i>
        </>,
        note         : "Heavy Weaponry",
        source       : "p.247",
    },
    // Special Weapons
    {
        name         : "Improvised Weapon",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "ImprovisedWeapon.svg",
        rules        : <>
            <b>Skill: same as similar<br/>Dmg: same as similar</b><br/>Fragile
        </>,
        note  : "Special Weapon",
        source: "p.248",
    },
    {
        name         : "Unarmed Attack",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "UnarmedAttack.svg",
        rules        : <>
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
        note  : "Special Weapon",
        source: "p.248",
    },
    {
        name         : "Half-Shard",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "?.svg",
        rules        : <>
            <b>Skill: Heavy Weaponry<br/>2d4 impact</b><br/>Defensive, 2🖐️, *<br/><i>Momentum</i>
        </>,
        note  : "Special Weapon",
        source: "p.248",
    },
    {
        name         : "Shardblade",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Shardblade.svg",
        rules        : <>
            <b>Skill: Heavy Weaponry<br/>2d8 spirit</b><br/>Dangerous, Deadly, *<br/><i>not Dangerous</i>
        </>,
        note  : "Special Weapon",
        source: "p.248",
    },
    {
        name         : "Shardblade (Radiant)",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "ShardbladeRadiant",
        rules        : <>
            <b>Skill: *<br/>2d* spirit</b><br/>Deadly, *
        </>,
        note  : "Special Weapon",
        source: "p.248",
    },
    {
        name         : "Warhammer",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Warhammer.svg",
        rules        : <>
            <b>Heavy Weaponry<br/>2d10 impact</b><br/>Cumbersome [5], 2🖐️<br/><i>Expert: *</i>
        </>,
        note  : "Special Weapon",
        source: "p.248",
    },
    {
        name         : "Grandbow",
        type         : ItemType.ITEM,
        rulesCentered: true,
        icon         : "Grandbow.svg",
        rules        : <>
            <b>Heavy Weaponry<br/>2d6 keen</b><br/>200'/800', Cumbersome [5], 2🖐️<br/><i>Pierce</i>
        </>,
        note  : "Special Weapon",
        source: "p.248",
    },
];


export default items;
