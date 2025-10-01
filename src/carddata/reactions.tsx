import type {CardData} from "../types/types.ts";


const reactions: CardData[] = [
    {
        name    : "Absorb Pain",
        status  : "TODO",
        source  : "p.273",
        actions : -1,
        magic   : true,
        art     : "?.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Aid",
        status  : "PROOF",
        source  : "p.305",
        actions : -1,
        fp      : 1,
        art     : "Aid.svg",
        rules   : <>
            Grant an ally an Advantage on their current test.
        </>,
    },
    {
        name    : "Avoid Danger",
        status  : "PROOF",
        source  : "p.305",
        actions : -1,
        art     : "AvoidDanger.svg",
        rules   : <>
            <i>Agility vs DC15 or enemy's instigating test:</i><br/>
            Avoid harm (within reason).
        </>,
    },
    {
        name    : "Dodge",
        status  : "PROOF",
        source  : "p.305",
        actions : -1,
        fp      : 1,
        art     : "Dodge.svg",
        rules   : <>
            Add a Disadvantage to attacker's test.
        </>,
    },
    {
        name    : "Numb Pain",
        status  : "TODO",
        source  : "p.263",
        actions : -1,
        magic   : true,
        art     : "?.svg",
        rules   : <>
            TODO
        </>,
    },
    {
        name    : "Reactive Strike",
        status  : "PROOF",
        source  : "p.305",
        actions : -1,
        fp      : 1,
        art     : "ReactiveStrike.svg",
        rules   : <>
            When enemy voluntarily exits reach:<br/>
            <i>Melee vs Physical</i>
        </>,
    },
];


export default reactions;
