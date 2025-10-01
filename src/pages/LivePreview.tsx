import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards, allCardsByType} from "../carddata";
import Card from "../components/Card";
import {useState} from "react";
import _ from "lodash";
import type {CardType} from "../types/cardType.ts";


//TODO: Fucking enums
const types = [
    "All",
    "Condition",
    "CostlyAction",
    "Effect",
    "FreeAction",
    "Infusion",
    "Item",
    "MagicItem",
    "Reaction",
    "Skill",
];

export default function LivePreview() {
    const [typeFilter, setTypeFilter] = useState<null | CardType>(null);

    const cards = _(allCards)
        .sortBy('name')
        .sortBy('type')
        .filter((card) => {
            return typeFilter
                ? card.type === typeFilter
                : true;
        })
        .value();


    const handleFilterChange = (type: string) => () => {
        if(type==="All") {
            setTypeFilter(null);
        } else {
            setTypeFilter(type as CardType)
        }
    };

    return (
        <div className="livepreview-container">
            <div className="quickfilters">
                {
                    types.map((type) => {
                        return <>
                            <a href="#" onClick={handleFilterChange(type)}>{type}</a>
                        </>
                    })
                }
            </div>

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
