import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards} from "../cards";
import Card from "../components/Card";
import _ from "lodash";
import {useFilterState, cardPassesFilters} from "../contexts/filter.context.tsx";


const actions1 = [
    "Breathe Stormlight", "Enhance",
    "Brace", "Recover",
    "Enter Vigilant Stance", "Disengage", "Interact",
    "Gain Advantage", "Strike (Primary)", "Ready",
];
const actions2 = [
    "Interact", "Shove",
    "Move", "Move", "Move",
    "Grapple", "Use a Skill",
    "Cohesion", "Tension", "Add to Infusion",
];
const free_actions = [
    "Regenerate", "Stand Up", "Stand Up",
    "Regenerate", "Maintain Enhance",
    "Quick Draw", "Quick Draw", "Quick Draw",
    "End Grapple", "End Stance",
];
const reactions = [
    "Dodge", "Dodge", "Dodge",
    "Avoid Danger", "Avoid Danger", "Avoid Danger",
    "Aid", "Aid", "Reactive Strike", "Reactive Strike",
];
const conditions = [
    "Prone", "Prone", "Immobilized",
    "Determined", "Determined", "Vigilant Stance",
    "Surprised", "Surprised", "Surprised",
    "Empowered", "Enhanced (Physical)", "Unconscious",
];
const items = [
    "Greatsword", "Longbow", "Longspear",
    "Knife", "Sling", "Shortspear",
    "Javelin", "Sidesword", "Axe",
    "Rapier", "Staff", "Hammer",
];


const myCards = items;


export default function LivePreview() {
    const filters = useFilterState();

    const cards = _(allCards)
        //.filter((card) => myCards.includes(card.name))
        .sortBy('name')
        .filter((card) => {
            return cardPassesFilters(card, filters)
        })
        .value();
    return (
        <div className="livepreview-container">
            <div className="flexbox-container">
                {
                    cards.map((card, ind) => {
                        return <Card data={card} key={ind}/>
                    })
                }
            </div>
        </div>
    );
}
