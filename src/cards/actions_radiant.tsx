import type {CardData} from "../types/types.ts";


const actions_radiant: CardData[] = [
    {
        name    : "Add to Infusion",
        status  : "TODO",
        source  : "p.210",
        actions : 1,
        magic   : true,
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Breathe Stormlight",
        status  : "PROOF",
        source  : "p.124",
        actions : 2,
        magic   : true,
        rules   : <>
            <p>Refill IP from spheres within 5'.<br/><i>(1 IP / infused mark or broam)</i></p>
            <p>Can use when Unconcscious or prevented from using free_actions.</p>
        </>,
    },
    {
        name     : "Enhance",
        status   : "PROOF",
        source   : "p.124",
        flipCard : "Maintain Enhance",
        actions  : 1,
        magic    : true,
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
];


export default actions_radiant;
