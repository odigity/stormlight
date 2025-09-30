import type {CardData} from "../types/types.ts";
import {CardType} from "../types/types.ts";


const reactions: CardData[] = [
    {
        name   : "Absorb Pain",
        type   : CardType.REACTION,
        actions: -1,
        icon   : "?.svg",
        rules  : <>
            TODO
        </>,
        source: "p.273",
        status: "TODO",
    },
    {
        name   : "Aid",
        type   : CardType.REACTION,
        actions: -1,
        icon   : "Aid.svg",
        fp     : 1,
        rules  : <>
            Grant an ally an Advantage on their current test.
        </>,
        source: "p.305",
        status: "PROOF",
    },
    {
        name   : "Avoid Danger",
        type   : CardType.REACTION,
        actions: -1,
        icon   : "AvoidDanger.svg",
        rules  : <>
            <i>Agility vs DC15 or enemy's instigating test:</i><br/>
            Avoid harm (within reason).
        </>,
        source: "p.305",
        status: "PROOF",
    },
    {
        name   : "Dodge",
        type   : CardType.REACTION,
        actions: -1,
        icon   : "Dodge.svg",
        fp     : 1,
        rules  : <>
            Add a Disadvantage to attacker's test.
        </>,
        source: "p.305",
        status: "PROOF",
    },
    {
        name   : "Numb Pain",
        type   : CardType.REACTION,
        actions: -1,
        icon   : "?.svg",
        rules  : <>
            TODO
        </>,
        source: "p.263",
        status: "TODO",
    },
    {
        name   : "Reactive Strike",
        type   : CardType.REACTION,
        actions: -1,
        icon   : "ReactiveStrike.svg",
        fp     : 1,
        rules  : <>
            When enemy voluntarily exits reach:<br/>
            <i>Melee vs Physical</i>
        </>,
        source: "p.305",
        status: "PROOF",
    },
];


export default reactions;
