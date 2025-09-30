import type {CardData} from "../types/types.ts";


const costly_actions: CardData[] = [
    {
        name    : "Abrasion",
        status  : "TODO",
        source  : "p.212",
        actions : 1,
        art     : "Abrasion.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Add to Infusion",
        status  : "TODO",
        source  : "p.210",
        actions : 1,
        art     : "?.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Adhesion",
        status  : "TODO",
        source  : "p.215",
        actions : 1,
        art     : "Adhesion.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Apply Poison",
        status  : "TODO",
        source  : "p.259",
        actions : 1,
        art     : "?.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name     : "Brace",
        status   : "PROOF",
        source   : "p.303",
        flipCard : "Braced",
        actions  : 1,
        art      : "Brace.svg",
        rules    : <>
            Hide behind cover within 5'. Grants a Disadvantage on attacks against you until you attack or move.
        </>,
    },
    {
        name    : "Breathe Stormlight",
        status  : "PROOF",
        source  : "p.124",
        actions : 2,
        art     : "BreatheStormlight.svg",
        rules   : <>
            <p>Refill IP from spheres within 5'.<br/><i>(1 IP / infused mark or broam)</i></p>
            <p>Can use when Unconcscious or prevented from using free_actions.</p>
        </>,
    },
    {
        name    : "Cohesion",
        status  : "TODO",
        source  : "p.217",
        actions : 1,
        art     : "SurgeCohesion.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Disengage",
        status  : "PROOF",
        source  : "p.303",
        actions : 1,
        art     : "Disengage.svg",
        rules   : <>
            Move 5' without provoking a Reactive Strike.
        </>,
    },
    {
        name    : "Division",
        status  : "TODO",
        source  : "p.220",
        actions : 2,
        art     : "Division.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name        : "Enhance",
        status      : "PROOF",
        source      : "p.124",
        flipCard : "Maintain Enhance",
        actions     : 1,
        art         : "Enhance.svg",
        ip          : 1,
        rules       : <>
            Until end of next turn:<br/>
            • Enhanced [Str +1]<br/>
            • Enhanced [Spd +1]<br/>
            <br/>
            <i>To renew, see reverse side.</i>
        </>,
    },
    {
        name    : "Gain Advantage",
        status  : "PROOF",
        source  : "p.303",
        actions : 1,
        art     : "GainAdvantage.svg",
        rules   : <>
            <i>Any skill vs enemy's corresponding defense:</i>
            <br/>Gain an Advantage on next test using a different skill vs that enemy.
        </>,
    },
    {
        name        : "Grapple",
        status      : "PROOF",
        source      : "p.304",
        flipCard : "End Grapple",
        actions     : 2,
        art         : "Grapple.svg",
        rules       : <>
            <i>Athletics vs Physical:</i> Restrained until...
            <br/>• you become Unconcscious
            <br/>• they exit your reach somehow
            <br/>• you end as ▷
        </>,
    },
    {
        name    : "Gravitation",
        status  : "TODO",
        source  : "p.223",
        actions : 1,
        art     : "Gravitation.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Ignite",
        status  : "TODO",
        source  : "p.258",
        actions : 1,
        art     : "?.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Illumination",
        status  : "TODO",
        source  : "p.226",
        actions : 1,
        art     : "Illumination.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name        : "Interact",
        status      : "PROOF",
        source      : "p.303",
        flipCard : "Quickdraw",
        actions     : 1,
        art         : "Interact.svg",
        keyProps        : "Reusable",
        rules       : <>
            • draw / sheath weapon
            <br/>• open / close door
            <br/>• pick up / fetch item
            <br/>• hand item to ally
        </>,
    },
    {
        name    : "Mount / Dismount",
        status  : "TODO",
        source  : "p.313",
        actions : 1,
        art     : "?.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Move",
        status  : "PROOF",
        source  : "p.303",
        actions : 1,
        art     : "Move.svg",
        keyProps    : "Reusable.svg",
        rules   : <>
            Slowed if crawling, climbing, swimming, or stealthy.
        </>,
    },
    {
        name    : "Progression",
        status  : "TODO",
        source  : "p.229",
        actions : 2,
        art     : "Progression.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Ready",
        status  : "PROOF",
        source  : "p.304",
        actions : 1,
        art     : "Ready.svg",
        rules   : <>
            Choose trigger and action.
            <br/>Pay the action cost up front.
        </>,
    },
    {
        name    : "Recover",
        status  : "PROOF",
        source  : "p.304",
        actions : 2,
        art     : "Recover.svg",
        keyProps    : "Once per scene",
        rules   : <>
            Recovery die ➡ HP and/or FP.
        </>,
    },
    {
        name    : "Reload",
        status  : "PROOF",
        source  : "p.245",
        actions : 1,
        art     : "Reload.svg",
        rules   : <>
            Reload weapon to full ammunition.
        </>,
    },
    {
        name    : "Shove",
        status  : "PROOF",
        source  : "p.304",
        actions : 2,
        art     : "Shove.svg",
        rules   : <>
            <p><i>Athletics vs Physical:</i> Push or pull target 5' horizontally.</p>
            <p>Also breaks Grapple.</p>
        </>,
    },
    {
        name       : "Strike (Offhand)",
        status     : "PROOF",
        source     : "p.303",
        actions    : 1,
        fp         : 2,
        art        : "Strike.svg",
        mirrorArt : true,
        rules      : <>
            <div>
                <div className="italic" style={{marginBottom : '10px'}}>Unarmed Attack or Weapon<br/>vs<br/>Physical</div>
            </div>
            <b>Tip:</b>
            <br/>Offhand trait = 1 FP discount.
        </>,
    },
    {
        name    : "Strike (Primary)",
        status  : "PROOF",
        source  : "p.303",
        actions : 1,
        art     : "Strike.svg",
        rules   : <>
            <div>
                <div className='italic'>Unarmed Attack or Weapon<br/>vs<br/>Physical</div>
            </div>
        </>,
    },
    {
        name    : "Tension",
        status  : "TODO",
        source  : "p.231",
        actions : 1,
        art     : "Tension.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Throw Net",
        status  : "TODO",
        source  : "p.259",
        actions : 1,
        art     : "?.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Transformation",
        status  : "TODO",
        source  : "p.234",
        actions : 1,
        art     : "Transformation.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Transportation",
        status  : "TODO",
        source  : "p.237",
        actions : 2,
        art     : "Transportation.svg",
        rules   : <>
            ?
        </>,
    },
    {
        name    : "Use a Skill",
        status  : "PROOF",
        source  : "p.303",
        actions : 1,
        art     : "UseASkill.svg",
        rules   : <>
            Perform challenging task around battlefield.
        </>,
    },
];


export default costly_actions;
