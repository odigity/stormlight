import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const reactions: CardData[] = [
    {
        name         : "Absorb Pain",
        type         : ItemType.REACTION,
        actions      : -1,
        icon         : "?.svg",
        rules        : <>
            TODO
        </>,
        source: "p.273",
    },
    {
        name         : "Aid",
        type         : ItemType.REACTION,
        actions      : -1,
        icon         : "Aid.svg",
        fp           : 1,
        rules        : <>
            Grant an ally an Advantage on their current test.
        </>,
        source: "p.305",
    },
    {
        name         : "Avoid Danger",
        type         : ItemType.REACTION,
        actions      : -1,
        icon         : "AvoidDanger.svg",
        rules        : <>
            <i>Agility vs DC15 or enemy's instigating test:</i><br/>
            Avoid harm (within reason).
        </>,
        source: "p.305",
    },
    {
        name         : "Dodge",
        type         : ItemType.REACTION,
        actions      : -1,
        icon         : "Dodge.svg",
        fp           : 1,
        rules        : <>
            Add a Disadvantage to attacker's test.
        </>,
        source: "p.305",
    },
    {
        name         : "Numb Pain",
        type         : ItemType.REACTION,
        actions      : -1,
        icon         : "?.svg",
        rules        : <>
            TODO
        </>,
        source: "p.263",
    },
    {
        name         : "Reactive Strike",
        type         : ItemType.REACTION,
        actions      : -1,
        icon         : "ReactiveStrike.svg",
        fp           : 1,
        rules        : <>
            When enemy voluntarily exits reach:<br/>
            <i>Melee vs Physical</i>
        </>,
        source: "p.305",
    },
];


export default reactions;
