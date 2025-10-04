import {CardType} from "../types/card_type.ts";
import type {SheetData} from "../types/types.ts";


const sheets: SheetData[] = [

    {
        name  : "Foo",
        type  : CardType.ACTION,
        cards : [
            "Brace",
        ],
    },

    {
        name  : "1-Actions",
        type  : CardType.ACTION,
        cards : [
            // double (8 squares)
            "Breathe Stormlight",
            "Grapple",
            "Recover",
            "Shove",
            // single (20 squares)
            "Add to Infusion",
            "Brace",
            "Cohesion",
            "Disengage",
            "Enhance",
            "Gain Advantage",
            "Grapple",
            "Ignite",
            "Interact", "Interact", "Interact",
            "Mount / Dismount",
            "Move", "Move", "Move",
            "Ready",
            "Strike (Primary)",
            "Strike (Offhand)",
            "Tension",
            "Use a Skill",
        ],
    },
    {
        name  : "1-Conditions",
        type  : CardType.CONDITION,
        cards : [
            "Prone", "Prone",
            "Determined", "Determined", "Determined",
            "Surprised", "Surprised", "Surprised", "Surprised",
            "Empowered", "Enhanced (Physical)", "Unconscious",
        ],
    },
    {
        name  : "1-Effects",
        type  : CardType.EFFECT,
        cards : [
            "Braced", "Braced", "Braced",
            // 9 more
        ],
    },
    {
        name  : "1-FreeActions",
        type  : CardType.FREE_ACTION,
        cards : [
            "Stand Up", "Stand Up",
            "Regenerate", "Maintain Enhance",
            "Quick Draw", "Quick Draw", "Quick Draw",
            "End Grapple",
            // 4 more
        ],
    },
    {
        name  : "1-Infusions",
        type  : CardType.INFUSION,
        cards : [
            "Abrasion Infusion", "Abrasion Infusion",
            "Adhesion Infusion", "Adhesion Infusion",
            "Cohesion Infusion", "Cohesion Infusion",
            "Gravitation Infusion", "Gravitation Infusion",
            "Illumination Infusion", "Illumination Infusion",
            "Tension Infusion", "Tension Infusion",
        ],
    },
    {
        name  : "1-Items",
        type  : CardType.ITEM,
        cards : [
            // Ofer
            "Greatsword", "Longbow", "Longspear",
            // Nate
            "Knife", "Knife", "Sling",
            // Taye
            "Longbow", "Shortspear",
            // TJ
            "?", "?", "?", "?",
        ],
    },
    {
        name  : "1-Magic Items",
        type  : CardType.MAGIC_ITEM,
        cards : [
        ],
    },
    {
        name  : "1-Reactions",
        type  : CardType.REACTION,
        cards : [
            "Dodge", "Dodge", "Dodge", "Dodge",
            "Avoid Danger", "Avoid Danger", "Avoid Danger", "Avoid Danger",
            "Aid", "Aid", "Reactive Strike", "Reactive Strike",
        ],
    },

];


export default sheets;
