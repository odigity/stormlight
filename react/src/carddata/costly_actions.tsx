import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const costly_actions: CardData[] = [
    {
        name         : "Brace",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Brace.svg",
        rules        : <>
            Hide behind cover within 5'. Grants a Disadvantage on attacks against you until you attack or move.
        </>,
        source       : "p.303",
    },
    {
        name         : "Breathe Stormlight",
        type         : ItemType.COSTLY_ACTION,
        actions      : 2,
        rulesCentered: false,
        icon         : "BreatheStormlight.svg",
        rules        : <>
            <p>Refill IP from spheres within 5'.<br/><i>(1 IP / infused mark or broam)</i></p>
            <p>Can use when Unconcscious or prevented from using free_actions.</p>
        </>,
        source: "p.124",
    },
    {
        name         : "Disengage",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Disengage.svg",
        rules        : <>
            Move 5' without provoking a Reactive Strike.
        </>,
        source       : "p.303",
    },
    {
        name         : "Enhance",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Enhance.svg",
        ip           : 1,
        rules        : <>
            Until end of next turn:<br/>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            <i>To renew, see reverse side.</i>
        </>,
        source: "p.124",
    },
    {
        name         : "Gain Advantage",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "GainAdvantage.svg",
        rules        : <>
            <i>Any skill vs enemy's corresponding defense:</i>
            <br/>Gain an Advantage on next test using a different skill vs that enemy.
        </>,
        source: "p.303",
    },
    {
        name         : "Grapple.svg",
        type         : ItemType.COSTLY_ACTION,
        actions      : 2,
        rulesCentered: false,
        icon         : "Grapple.svg",
        rules        : <>
            <i>Athletics vs Physical:</i> Restrained until...
            <br/>• you become Unconcscious
            <br/>• they exit your reach somehow
            <br/>• you end as ▷
        </>,
        source: "p.304",
    },
    {
        name         : "Interact",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Interact.svg",
        rules        : <>
            • draw / sheath weapon
            <br/>• open / close door
            <br/>• pick up / fetch item
            <br/>• hand item to ally
        </>,
        note  : "Reusable",
        source: "p.303",
    },
    {
        name         : "Move",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Move.svg",
        rules        : <>
            Slowed if crawling, climbing, swimming, or stealthy.
        </>,
        note         : "Reusable.svg",
        source       : "p.303",
    },
    {
        name         : "Ready",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Ready.svg",
        rules        : <>
            Choose trigger and action.
            <br/>Pay the action cost up front.
        </>,
        source: "p.304",
    },
    {
        name         : "Recover",
        type         : ItemType.COSTLY_ACTION,
        actions      : 2,
        rulesCentered: false,
        icon         : "Recover.svg",
        rules        : <>
            Recovery die ➡ HP and/or FP.
        </>,
        note         : "Once per scene",
        source       : "p.304",
    },
    {
        name         : "Reload",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Reload.svg",
        rules        : <>
            Reload weapon to full ammunition.
        </>,
        source       : "p.245",
    },
    {
        name         : "Shove",
        type         : ItemType.COSTLY_ACTION,
        actions      : 2,
        rulesCentered: false,
        icon         : "Shove.svg",
        rules        : <>
            <p><i>Athletics vs Physical:</i> Push or pull target 5' horizontally.</p>
            <p>Also breaks Grapple.</p>
        </>,
        source: "p.304",
    },
    {
        name         : "Strike (Offhand)",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: true,
        icon         : "Strike.svg",
        mirrorIcon   : true,
        fp           : 2,
        rules        : <>
            <div>
                <div className="italic" style={{marginBottom: '10px'}}>Unarmed Attack or Weapon<br/>vs<br/>Physical</div>
            </div>
            <b>Tip:</b>
            <br/>Offhand trait = 1 FP discount.
        </>,
        source: "p.303",
    },
    {
        name         : "Strike (Primary)",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: true,
        icon         : "Strike.svg",
        rules        : <>
            <div>
                <div className='italic'>Unarmed Attack or Weapon<br/>vs<br/>Physical</div>
            </div>
        </>,
        source: "p.303",
    },
    {
        name         : "Use a Skill",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "UseASkill.svg",
        rules        : <>
            Perform challenging task around battlefield.
        </>,
        source       : "p.303",
    },

    // TODO

    // Surges
    {
        name         : "Abrasion",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Abrasion.svg",
        rules        : <>
            ?
        </>,
        source       : "p.212",
    },
    {
        name         : "Adhesion",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Adhesion.svg",
        rules        : <>
            ?
        </>,
        source       : "p.215",
    },
    {
        name         : "Cohesion",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "SurgeCohesion.svg",
        rules        : <>
            ?
        </>,
        source       : "p.217",
    },
    {
        name         : "Division",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Division.svg",
        rules        : <>
            ?
        </>,
        source       : "p.220",
    },
    {
        name         : "Gravitation",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Gravitation.svg",
        rules        : <>
            ?
        </>,
        source       : "p.223",
    },
    {
        name         : "Illumination",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Illumination.svg",
        rules        : <>
            ?
        </>,
        source       : "p.226",
    },
    {
        name         : "Progression",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Progression.svg",
        rules        : <>
            ?
        </>,
        source       : "p.229",
    },
    {
        name         : "Tension",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Tension.svg",
        rules        : <>
            ?
        </>,
        source       : "p.231",
    },
    {
        name         : "Transformation",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Transformation.svg",
        rules        : <>
            ?
        </>,
        source       : "p.234",
    },
    {
        name         : "Transportation",
        type         : ItemType.COSTLY_ACTION,
        actions      : 1,
        rulesCentered: false,
        icon         : "Transportation.svg",
        rules        : <>
            ?
        </>,
        source       : "p.237",
    },
];


export default costly_actions;
