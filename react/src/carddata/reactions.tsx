import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";

// Icons
import IconAid from "../assets/art/Aid.svg";
import IconAvoidDanger from "../assets/art/AvoidDanger.svg";
import IconDodge from "../assets/art/Dodge.svg";
import IconReactiveStrike from "../assets/art/ReactiveStrike.svg";
import {rules} from "eslint-plugin-react-hooks";

const reactions: CardData[] = [
    {
        name         : "Aid",
        type         : ItemType.REACTION,
        actions      : -1,
        rulesCentered: false,
        icon         : IconAid,
        fp           : 1,
        rules        : <>Grant an ally an Advantage on their current test.</>,
        source       : "p.305",
    },
    {
        name         : "Avoid Danger",
        type         : ItemType.REACTION,
        actions      : -1,
        rulesCentered: false,
        icon         : IconAvoidDanger,
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
        rulesCentered: false,
        icon         : IconDodge,
        fp           : 1,
        rules        : <>Add a Disadvantage to attacker's test.</>,
        source       : "p.305",
    },
    {
        name         : "Reactive Strike",
        type         : ItemType.REACTION,
        actions      : -1,
        rulesCentered: false,
        icon         : IconReactiveStrike,
        fp           : 1,
        rules        : <>
            When enemy voluntarily exits reach:<br/>
            <i>Melee vs Physical</i>
        </>,
        source: "p.305",
    },
];

export default reactions;
