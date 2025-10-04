import {CardType} from "../types/card_type.ts";
import type {CardData} from "../types/types.ts";


// The non-Radiant "shard" weapons & armor.
const shards: CardData[] = [

    {
        name     : "Half-Shard",
        status   : "TODO",
        source   : "p.248",
        type     : CardType.MAGIC_ITEM,
        keyProps : "Special Weapon",
        rules    : <>
            TODO<br/>
            <b>Skill: Heavy Weaponry<br/>2d4 impact</b><br/>Defensive, 2🖐️, *<br/><i>Momentum</i>
        </>,
    },
    {
        name     : "Shardblade",
        status   : "TODO",
        source   : "p.248",
        type     : CardType.MAGIC_ITEM,
        keyProps : "Special Weapon",
        rules    : <>
            TODO<br/>
            <b>Skill: Heavy Weaponry<br/>2d8 spirit</b><br/>Dangerous, Deadly, *<br/><i>not Dangerous</i>
        </>,
    },
    {
        name   : "Shardplate",
        status : "TODO",
        source : "p.254",
        type    : CardType.MAGIC_ITEM,
        rules  : <>
            TODO
        </>,
    },

];


export default shards;
