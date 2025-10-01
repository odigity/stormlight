import type {CardData} from "../types/types.ts";


const costly_actions: CardData[] = [
    {
        name    : "Abrasion",
        status  : "TODO",
        source  : "p.212",
        actions : 1,
        magic   : true,
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
        magic   : true,
        art     : "AddToInfusion.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Adhesion",
        status  : "TODO",
        source  : "p.215",
        actions : 1,
        magic   : true,
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
        art     : "ApplyPoison.svg",
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
        magic   : true,
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
        magic   : true,
        art     : "Cohesion.svg",
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
        magic   : true,
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
        magic   : true,
        art         : "Enhance.svg",
        ip          : 1,
        fp          : 1,
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
        magic   : true,
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
        art     : "Ignite.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Illumination",
        status  : "TODO",
        source  : "p.226",
        actions : 1,
        magic   : true,
        art     : "Illumination.svg",
        rules   : <>
            TODO - fp: * (after supported)
            1+ IP infuse air wi/bond range and surge size
            Simple & Complex Illusions: mute/inanimate obj = 1 IP / 10m; else 1 IP / rd
            Disguising Yourself: free - but must _have_ IP; end as free (see reverse)
        </>,
        rules2  : <>
            Deceiving Chars: simple objs / diguise self = convincing; more complex might need Illum test vs Cognitive of passive observer
                if scrutinizing, Illum test vs Perception
            Can control complex illusions wi/bond range.  Out of range: only last simple/mindless task
            See: End Disguise, Task Illusions, Task Illusion, Maintain Illusions
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
        art     : "MountDismount.svg",
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
        magic   : true,
        art     : "Progression.svg",
        rules   : <>
            Growth: 1 IP rapidly grow plant/seed up to Surge Size or natural limit
            Regrowth: 1+ IP infuse char: 1 ip/rd: recover HP = Prog modifier + 1d4..12 (ranks 1..5)
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
        magic   : true,
        art     : "Tension.svg",
        rules   : <>
            1+ IP infuse non-invested object wi/reach - rigid for 1 IP/rd
            shaping:
            - rough: free as part of action
            - moderate: use Interact
            - intricate: Use a Skill
            if worn : +2 Physical (wrap material around character as part of action) (non-Stacking)
            if weapon: improvised non-special wo/fragile
        </>,
    },
    {
        name    : "Throw Net",
        status  : "TODO",
        source  : "p.259",
        actions : 1,
        art     : "ThrowNet.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Transformation",
        status  : "TODO",
        source  : "p.234",
        actions : 2,
        magic   : true,
        art     : "Transformation.svg",
        rules   : <>
            Soulcast: Transformation test on non-living (at first), non-Invested object or surface wi/reach
            IP = target size (1: Sm, etc)
            if causes opponent to make test, DC = Transformation test
            also...  2 IP: 1 Transportation effect w/10' range

            <div className="rules-table" style={{ fontSize : ".7rem" }}>
                <div className="rules-header">
                    <div className="rules-cell"></div>
                    <div className="rules-cell">Solids</div>
                    <div className="rules-cell">Organics</div>
                    <div className="rules-cell">Liquids</div>
                    <div className="rules-cell">Vapors</div>
                    <div className="rules-cell">Clear Air</div>
                    <div className="rules-cell">Flame*</div>
                </div>
                <div className="rules-row">
                    <div className="rules-cell">Solids</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">20</div>
                    <div className="rules-cell">25</div>
                    <div className="rules-cell">30</div>
                </div>
                <div className="rules-row">
                    <div className="rules-cell">Organics</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">20</div>
                    <div className="rules-cell">25</div>
                </div>
                <div className="rules-row">
                    <div className="rules-cell">Liquids</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">20</div>
                </div>
                <div className="rules-row">
                    <div className="rules-cell">Vapors</div>
                    <div className="rules-cell">20</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">15</div>
                </div>
                <div className="rules-row">
                    <div className="rules-cell">Clear Air</div>
                    <div className="rules-cell">25</div>
                    <div className="rules-cell">20</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">10</div>
                </div>
                <div className="rules-row">
                    <div className="rules-cell">Flame</div>
                    <div className="rules-cell">30</div>
                    <div className="rules-cell">25</div>
                    <div className="rules-cell">20</div>
                    <div className="rules-cell">15</div>
                    <div className="rules-cell">10</div>
                    <div className="rules-cell">-</div>
                </div>
            </div>
            * Flame requires Flamecasting talent
        </>,
        rules2  : <>
            ?
        </>,
    },
    {
        name    : "Transportation",
        status  : "TODO",
        source  : "p.237",
        actions : 2,
        magic   : true,
        ip      : 1,    // TODO - change to "*"
        art     : "Transportation.svg",
        rules   : <>
            One effect (wi/bond range) per IP:<br/>
            • **Learn Emotions and Motives** _(by observing surrounding spren)_<br/>
            • **Locate Characters** _(think Marauder's Map)_<br/>
            • **Sense Investiture** _(in objects and people)_<br/>
            Might involve Transportation test.
        </>,
        rules2  : <>
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
