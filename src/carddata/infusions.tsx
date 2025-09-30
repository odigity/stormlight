import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";


const infusions: CardData[] = [
    {
        name  : "Abrasion Infusion",
        type  : ItemType.INFUSION,
        icon  : "Abrasion.svg",
        source: "p.212",
    },
    {
        name  : "Adhesion Infusion",
        type  : ItemType.INFUSION,
        icon  : "Adhesion.svg",
        source: "p.215",
    },
    {
        name  : "Cohesion Infusion",
        type  : ItemType.INFUSION,
        icon  : "Cohesion.svg",
        source: "p.217",
    },
    {
        name  : "Gravitation Infusion",
        type  : ItemType.INFUSION,
        icon  : "Gravitation.svg",
        source: "p.223",
    },
    {
        name  : "Illumination Infusion",
        type  : ItemType.INFUSION,
        icon  : "Illumination.svg",
        source: "p.226",
    },
    {
        name  : "Progression Infusion",
        type  : ItemType.INFUSION,
        icon  : "Progression.svg",
        source: "p.229",
    },
    {
        name  : "Tension Infusion",
        type  : ItemType.INFUSION,
        icon  : "Tension.svg",
        source: "p.231",
    },
];


export default infusions;
