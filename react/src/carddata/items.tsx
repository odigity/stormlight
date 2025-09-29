import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";

// Icons
import IconJavelin from "../assets/icons/items/Javelin.svg";
import IconKnife from "../assets/icons/items/Knife.svg";
import IconMace from "../assets/icons/items/Mace.svg";
import IconRapier from "../assets/icons/items/Rapier.svg";
import IconShortbow from "../assets/icons/items/Shortbow.svg";
import IconShortspear from "../assets/icons/items/Shortspear.svg";
import IconSidesword from "../assets/icons/items/Sidesword.svg";
import IconStaff from "../assets/icons/items/Staff.svg";
import IconSling from "../assets/icons/items/Sling.svg";

import IconAxe from "../assets/icons/items/Axe.svg";
import IconCrossbow from "../assets/icons/items/Crossbow.svg";
import IconGreatsword from "../assets/icons/items/Greatsword.svg";
import IconHammer from "../assets/icons/items/Hammer.svg";
import IconLongbow from "../assets/icons/items/Longbow.svg";
import IconLongspear from "../assets/icons/items/Longspear.svg";
import IconLongsword from "../assets/icons/items/Longsword.svg";
import IconPoleaxe from "../assets/icons/items/Poleaxe.svg";
import IconShield from "../assets/icons/items/Shield.svg";

import IconImprovisedWeapon from "../assets/icons/items/ImprovisedWeapon.svg";
import IconUnarmedAttack from "../assets/icons/items/UnarmedAttack.svg";
import IconWarhammer from "../assets/icons/items/Warhammer.svg";
import IconGrandbow from "../assets/icons/items/Grandbow.svg";
import {rules} from "eslint-plugin-react-hooks";

const items: CardData[] = [
    {
        name: "Javelin",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconJavelin,
        rules: <><b>1d6 keen</b><br/>30'/120'<br/><i>Indirect</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    {
        name: "Knife",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconKnife,
        rules: <><b>1d4 keen</b><br/>Discreet<br/><i>Offhand, 20'/60'</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    {
        name: "Mace",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconMace,
        rules: <><b>1d6 impact</b><br/><i>Momentum</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    {
        name: "Rapier",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconRapier,
        rules: <><b>1d6 keen</b><br/>Quickdraw<br/><i>Defensive</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    {
        name: "Shortbow",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconShortbow,
        rules: <><b>1d6 keen</b><br/>80'/320', 2🖐️<br/><i>Quickdraw</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    {
        name: "Shortspear",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconShortspear,
        rules: <><b>1d8 keen</b><br/>2🖐️<br/><i>not 2🖐️</i></>,
        note: "Light Weaponry",
        source: "p.246",
        mirrorIcon: true,
    },
    {
        name: "Sidesword",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconSidesword,
        rules: <><b>1d6 keen</b><br/>Quickdraw<br/><i>Offhand</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    {
        name: "Staff",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconStaff,
        rules: <><b>1d6 impact</b><br/>Discreet, 2🖐️<br/><i>Defensive</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    {
        name: "Sling",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconSling,
        rules: <><b>1d4 impact</b><br/>Discrete<br/><i>Indirect</i></>,
        note: "Light Weaponry",
        source: "p.246",
    },
    // Heavy Weaponry
    {
        name: "Axe",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconAxe,
        rules: <><b>1d6 keen</b><br/>20'/60'<br/><i>Offhand</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Crossbow",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconCrossbow,
        rules: <><b>1d8 keen</b><br/>100'/400', Loaded [1], 2🖐️<br/><i>Deadly</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Greatsword",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconGreatsword,
        rules: <><b>1d10 keen</b><br/>2🖐️<br/><i>Deadly</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Hammer",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconHammer,
        rules: <><b>1d10 impact</b><br/>2🖐️<br/><i>Momentum</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Longbow",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconLongbow,
        rules: <><b>1d6 keen</b><br/>150'/600', 2🖐️<br/><i>Indirect</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Longspear",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconLongspear,
        rules: <><b>1d8 keen</b><br/>2🖐️<br/><i>Defensive</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Longsword",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconLongsword,
        rules: <><b>1d8 keen</b><br/>Quickdraw, 2🖐️<br/><i>not 2🖐️</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Poleaxe",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconPoleaxe,
        rules: <><b>1d10 keen</b><br/>2🖐️<br/><i>+5'</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    {
        name: "Shield",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconShield,
        rules: <><b>1d4 impact</b><br/>Defensive<br/><i>Offhand</i></>,
        note: "Heavy Weaponry",
        source: "p.247",
    },
    // Special Weapons
    {
        name: "Improvised Weapon",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconImprovisedWeapon,
        rules: <>
            <b>Skill: same as similar<br/>Dmg: same as similar</b><br/>Fragile
        </>,
        note: "Special Weapon",
        source: "p.248",
    },
    {
        name: "Unarmed Attack",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconUnarmedAttack,
        rules: <>
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
        note: "Special Weapon",
        source: "p.248",
    },
    {
        name: "Half-Shard",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: "", // TODO: missing icon
        rules: <>
            <b>Skill: Heavy Weaponry<br/>2d4 impact</b><br/>Defensive, 2🖐️, *<br/><i>Momentum</i>
        </>,
        note: "Special Weapon",
        source: "p.248",
    },
    {
        name: "Shardblade",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: "", // TODO: missing icon
        rules: <>
            <b>Skill: Heavy Weaponry<br/>2d8 spirit</b><br/>Dangerous, Deadly, *<br/><i>not Dangerous</i>
        </>,
        note: "Special Weapon",
        source: "p.248",
    },
    {
        name: "Shardblade (Radiant)",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: "", // TODO: missing icon
        rules: <>
            <b>Skill: *<br/>2d* spirit</b><br/>Deadly, *
        </>,
        note: "Special Weapon",
        source: "p.248",
    },
    {
        name: "Warhammer",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconWarhammer,
        rules: <>
            <b>Heavy Weaponry<br/>2d10 impact</b><br/>Cumbersome [5], 2🖐️<br/><i>Expert: *</i>
        </>,
        note: "Special Weapon",
        source: "p.248",
    },
    {
        name: "Grandbow",
        type: ItemType.ITEM,
        actions: 1,
        rulesCentered: true,
        icon: IconGrandbow,
        rules: <>
            <b>Heavy Weaponry<br/>2d6 keen</b><br/>200'/800', Cumbersome [5], 2🖐️<br/><i>Pierce</i>
        </>,
        note: "Special Weapon",
        source: "p.248",
    },
];

export default items;
