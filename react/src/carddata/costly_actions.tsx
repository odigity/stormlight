import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";

// Icons
import IconBrace from "../assets/icons/costly/Brace.svg";
import IconDisengage from "../assets/icons/costly/Disengage.svg";
import IconGainAdvantage from "../assets/icons/costly/GainAdvantage.svg";
import IconGrapple from "../assets/icons/costly/Grapple.svg";
import IconInteract from "../assets/icons/costly/Interact.svg";
import IconMove from "../assets/icons/costly/Move.svg";
import IconReady from "../assets/icons/costly/Ready.svg";
import IconRecover from "../assets/icons/costly/Recover.svg";
import IconReload from "../assets/icons/costly/Reload.svg";
import IconShove from "../assets/icons/costly/Shove.svg";
import IconStrike from "../assets/icons/costly/Strike.svg";
import IconUseASkill from "../assets/icons/costly/UseASkill.svg";
import IconBreatheStormlight from "../assets/icons/costly/BreatheStormlight.svg";
import IconEnhance from "../assets/icons/costly/Enhance.svg";

import IconSurgeAbrasion from "../assets/icons/costly/SurgeAbrasion.svg";
import IconSurgeAdhesion from "../assets/icons/costly/SurgeAdhesion.svg";
import IconSurgeCohesion from "../assets/icons/costly/SurgeCohesion.svg";
import IconSurgeDivision from "../assets/icons/costly/SurgeDivision.svg";
import IconSurgeGravitation from "../assets/icons/costly/SurgeGravitation.svg";
import IconSurgeIllumination from "../assets/icons/costly/SurgeIllumination.svg";
import IconSurgeProgression from "../assets/icons/costly/SurgeProgression.svg";
import IconSurgeTension from "../assets/icons/costly/SurgeTension.svg";
import IconSurgeTransformation from "../assets/icons/costly/SurgeTransformation.svg";
import IconSurgeTransportation from "../assets/icons/costly/SurgeTransportation.svg";
import {rules} from "eslint-plugin-react-hooks";

const costly_actions: CardData[] = [
    {
        name: "Brace",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconBrace,
        rules: <>Hide behind cover within 5'. Grants a Disadvantage on attacks against you until you attack or move.</>,
        source: "p.303",
    },
    {
        name: "Disengage",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconDisengage,
        rules: <>Move 5' without provoking a Reactive Strike.</>,
        source: "p.303",
    },
    {
        name: "Gain Advantage",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconGainAdvantage,
        rules: <>
            <i>Any skill vs enemy's corresponding defense:</i>
            <br/>Gain an Advantage on next test using a different skill vs that enemy.
        </>,
        source: "p.303",
    },
    {
        name: "Grapple",
        type: ItemType.COSTLY_ACTION,
        actions: 2,
        rulesCentered: false,
        icon: IconGrapple,
        rules: <>
            <i>Athletics vs Physical:</i> Restrained until...
            <br/>• you become Unconcscious
            <br/>• they exit your reach somehow
            <br/>• you end as ▷
        </>,
        source: "p.304",
    },
    {
        name: "Interact",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconInteract,
        rules: <>
            • draw / sheath weapon
            <br/>• open / close door
            <br/>• pick up / fetch item
            <br/>• hand item to ally
        </>,
        note: "Reusable",
        source: "p.303",
    },
    {
        name: "Move",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconMove,
        rules: <>Slowed if crawling, climbing, swimming, or stealthy.</>,
        note: "Reusable",
        source: "p.303",
    },
    {
        name: "Ready",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconReady,
        rules: <>
            Choose trigger and action.
            <br/>Pay the action cost up front.
        </>,
        source: "p.304",
    },
    {
        name: "Recover",
        type: ItemType.COSTLY_ACTION,
        actions: 2,
        rulesCentered: false,
        icon: IconRecover,
        rules: <>Recovery die ➡ HP and/or FP.</>,
        note: "Once per scene",
        source: "p.304",
    },
    {
        name: "Reload",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconReload,
        rules: <>Reload weapon to full ammunition.</>,
        source: "p.245",
    },
    {
        name: "Shove",
        type: ItemType.COSTLY_ACTION,
        actions: 2,
        rulesCentered: false,
        icon: IconShove,
        rules: <>
            <p><i>Athletics vs Physical:</i> Push or pull target 5' horizontally.</p>
            <p>Also breaks Grapple.</p>
        </>,
        source: "p.304",
    },
    {
        name: "Strike (Primary)",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: true,
        icon: IconStrike,
        rules: <>
            <i>Unarmed Attack or Weapon<br/>vs<br/>Physical</i>
        </>,
        source: "p.303",
    },
    {
        name: "Strike (Offhand)",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: true,
        icon: IconStrike,
        mirrorIcon: true,
        fp: 2,
        rules: <>
            <br/>
            <i>Unarmed Attack or Weapon<br/>vs<br/>Physical</i>
            <br/><br/>
            <b>Tip:</b>
            <br/>Offhand trait = 1 FP discount.
        </>,
        source: "p.303",
    },
    {
        name: "Use a Skill",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconUseASkill,
        rules: <>Perform challenging task around battlefield.</>,
        source: "p.303",
    },
    // Stormlight
    {
        name: "Breathe Stormlight",
        type: ItemType.COSTLY_ACTION,
        actions: 2,
        rulesCentered: false,
        icon: IconBreatheStormlight,
        rules: <>
            <p>Refill IP from spheres within 5'.<br/><i>(1 IP / infused mark or broam)</i></p>
            <p>Can use when Unconcscious or prevented from using free_actions.</p>
        </>,
        source: "p.124",
    },
    {
        name: "Enhance",
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: IconEnhance,
        ip: 1,
        rules: <>
            Until end of next turn:<br/>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            <i>To renew, see reverse side.</i>
        </>,
        source: "p.124",
    },
    // Surges
    { name: "Abrasion", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeAbrasion, rules: <>?</>, source: "p.212" },
    { name: "Adhesion", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeAdhesion, rules: <>?</>, source: "p.215" },
    { name: "Cohesion", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeCohesion, rules: <>?</>, source: "p.217" },
    { name: "Division", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeDivision, rules: <>?</>, source: "p.220" },
    { name: "Gravitation", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeGravitation, rules: <>?</>, source: "p.223" },
    { name: "Illumination", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeIllumination, rules: <>?</>, source: "p.226" },
    { name: "Progression", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeProgression, rules: <>?</>, source: "p.229" },
    { name: "Tension", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeTension, rules: <>?</>, source: "p.231" },
    { name: "Transformation", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeTransformation, rules: <>?</>, source: "p.234" },
    { name: "Transportation", type: ItemType.COSTLY_ACTION, actions: 1, rulesCentered: false, icon: IconSurgeTransportation, rules: <>?</>, source: "p.237" },
];

export default costly_actions;
