import _ from 'lodash';
import {allCards} from "../cards";
import Card from "../components/Card.tsx";
import '../styles/cards.scss';

const desiredCardNames = [
    "Grapple",
    "Maintain Enhance",
    "End Grapple",
    "Enhance",
    "Recover",
    "Brace",
];

const cards = _.filter(allCards, (card) => desiredCardNames.includes(card.name));

export default function Foo() {
    return (
        <div className="flexbox-container">
            {
                _.sortBy(cards, (card) => desiredCardNames.indexOf(card.name)).map((card, ind) => {
                    return <Card data={card} key={ind}/>
                })
            }
        </div>
    )
};
