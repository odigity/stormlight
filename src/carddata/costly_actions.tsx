import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const costly_actions: CardData[] = [
    {
        name   : "Abrasion",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Abrasion.svg",
        rules  : <>
            ?
        </>,
        source: "p.212",
        status: "TODO",
    },
    {
        name   : "Add to Infusion",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "?.svg",
        rules  : <>
            TODO
        </>,
        source: "p.210",
        status: "TODO",
    },
    {
        name   : "Adhesion",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Adhesion.svg",
        rules  : <>
            ?
        </>,
        source: "p.215",
        status: "TODO",
    },
    {
        name   : "Apply Poison",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "?.svg",
        rules  : <>
            TODO
        </>,
        source: "p.259",
        status: "TODO",
    },
    {
        name   : "Brace",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Brace.svg",
        rules  : <>
            Hide behind cover within 5'. Grants a Disadvantage on attacks against you until you attack or move.
        </>,
        source: "p.303",
        reverseCard: "Braced",
        status: "PROOF",
    },
    {
        name   : "Breathe Stormlight",
        type   : ItemType.COSTLY_ACTION,
        actions: 2,
        icon   : "BreatheStormlight.svg",
        rules  : <>
            <p>Refill IP from spheres within 5'.<br/><i>(1 IP / infused mark or broam)</i></p>
            <p>Can use when Unconcscious or prevented from using free_actions.</p>
        </>,
        source: "p.124",
        status: "PROOF",
    },
    {
        name   : "Cohesion",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "SurgeCohesion.svg",
        rules  : <>
            ?
        </>,
        source: "p.217",
        status: "TODO",
    },
    {
        name   : "Disengage",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Disengage.svg",
        rules  : <>
            Move 5' without provoking a Reactive Strike.
        </>,
        source: "p.303",
        status: "PROOF",
    },
    {
        name   : "Division",
        type   : ItemType.COSTLY_ACTION,
        actions: 2,
        icon   : "Division.svg",
        rules  : <>
            ?
        </>,
        source: "p.220",
        status: "TODO",
    },
    {
        name   : "Enhance",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Enhance.svg",
        ip     : 1,
        rules  : <>
            Until end of next turn:<br/>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            <i>To renew, see reverse side.</i>
        </>,
        source: "p.124",
        reverseCard: "Maintain Enhance",
        status: "PROOF",
    },
    {
        name   : "Gain Advantage",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "GainAdvantage.svg",
        rules  : <>
            <i>Any skill vs enemy's corresponding defense:</i>
            <br/>Gain an Advantage on next test using a different skill vs that enemy.
        </>,
        source: "p.303",
        status: "PROOF",
    },
    {
        name   : "Grapple",
        type   : ItemType.COSTLY_ACTION,
        actions: 2,
        icon   : "Grapple.svg",
        rules  : <>
            <i>Athletics vs Physical:</i> Restrained until...
            <br/>• you become Unconcscious
            <br/>• they exit your reach somehow
            <br/>• you end as ▷
        </>,
        source: "p.304",
        reverseCard: "End Grapple",
        status: "PROOF",
    },
    {
        name   : "Gravitation",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Gravitation.svg",
        rules  : <>
            ?
        </>,
        source: "p.223",
        status: "TODO",
    },
    {
        name   : "Ignite",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "?.svg",
        rules  : <>
            TODO
        </>,
        source: "p.258",
        status: "TODO",
    },
    {
        name   : "Illumination",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Illumination.svg",
        rules  : <>
            ?
        </>,
        source: "p.226",
        status: "TODO",
    },
    {
        name   : "Interact",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Interact.svg",
        rules  : <>
            • draw / sheath weapon
            <br/>• open / close door
            <br/>• pick up / fetch item
            <br/>• hand item to ally
        </>,
        note  : "Reusable",
        source: "p.303",
        reverseCard  : "Quickdraw",
        status: "PROOF",
    },
    {
        name   : "Mount / Dismount",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "?.svg",
        rules  : <>
            TODO
        </>,
        source: "p.313",
        status: "TODO",
    },
    {
        name   : "Move",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Move.svg",
        rules  : <>
            Slowed if crawling, climbing, swimming, or stealthy.
        </>,
        note  : "Reusable.svg",
        source: "p.303",
        status: "PROOF",
    },
    {
        name   : "Progression",
        type   : ItemType.COSTLY_ACTION,
        actions: 2,
        icon   : "Progression.svg",
        rules  : <>
            ?
        </>,
        source: "p.229",
        status: "TODO",
    },
    {
        name   : "Ready",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Ready.svg",
        rules  : <>
            Choose trigger and action.
            <br/>Pay the action cost up front.
        </>,
        source: "p.304",
        status: "PROOF",
    },
    {
        name   : "Recover",
        type   : ItemType.COSTLY_ACTION,
        actions: 2,
        icon   : "Recover.svg",
        rules  : <>
            Recovery die ➡ HP and/or FP.
        </>,
        note  : "Once per scene",
        source: "p.304",
        status: "PROOF",
    },
    {
        name   : "Reload",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Reload.svg",
        rules  : <>
            Reload weapon to full ammunition.
        </>,
        source: "p.245",
        status: "PROOF",
    },
    {
        name   : "Shove",
        type   : ItemType.COSTLY_ACTION,
        actions: 2,
        icon   : "Shove.svg",
        rules  : <>
            <p><i>Athletics vs Physical:</i> Push or pull target 5' horizontally.</p>
            <p>Also breaks Grapple.</p>
        </>,
        source: "p.304",
        status: "PROOF",
    },
    {
        name      : "Strike (Offhand)",
        type      : ItemType.COSTLY_ACTION,
        actions   : 1,
        icon      : "Strike.svg",
        mirrorIcon: true,
        fp        : 2,
        rules     : <>
            <div>
                <div className="italic" style={{marginBottom: '10px'}}>Unarmed Attack or Weapon<br/>vs<br/>Physical</div>
            </div>
            <b>Tip:</b>
            <br/>Offhand trait = 1 FP discount.
        </>,
        source: "p.303",
        status: "PROOF",
    },
    {
        name   : "Strike (Primary)",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Strike.svg",
        rules  : <>
            <div>
                <div className='italic'>Unarmed Attack or Weapon<br/>vs<br/>Physical</div>
            </div>
        </>,
        source: "p.303",
        status: "PROOF",
    },
    {
        name   : "Tension",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Tension.svg",
        rules  : <>
            ?
        </>,
        source: "p.231",
        status: "TODO",
    },
    {
        name   : "Throw Net",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "?.svg",
        rules  : <>
            TODO
        </>,
        source: "p.259",
        status: "TODO",
    },
    {
        name   : "Transformation",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "Transformation.svg",
        rules  : <>
            ?
        </>,
        source: "p.234",
        status: "TODO",
    },
    {
        name   : "Transportation",
        type   : ItemType.COSTLY_ACTION,
        actions: 2,
        icon   : "Transportation.svg",
        rules  : <>
            ?
        </>,
        source: "p.237",
        status: "TODO",
    },
    {
        name   : "Use a Skill",
        type   : ItemType.COSTLY_ACTION,
        actions: 1,
        icon   : "UseASkill.svg",
        rules  : <>
            Perform challenging task around battlefield.
        </>,
        source: "p.303",
        status: "PROOF",
    },
];


export default costly_actions;
