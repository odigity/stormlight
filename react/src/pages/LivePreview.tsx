import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards, allCardsByType} from "../carddata";
import Card from "../components/Card";
import {useState} from "react";
import _ from "lodash";
import type {ItemType} from "../types/itemType.ts";


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
    const [typeFilter, setTypeFilter] = useState<null | ItemType>(null);

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
            setTypeFilter(type as ItemType)
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


            {/*{allCardsByType.map(section => (*/}
            {/*    <div key={section.id}>*/}
            {/*        <h1 id={section.id} className="section-title">{section.title}</h1>*/}
            {/*        <div className="flexbox-container">*/}
            {/*            {section.cards.map((card, idx) => (*/}
            {/*                <Card key={`${section.id}-${idx}-${card.name}`} data={card}/>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
}
