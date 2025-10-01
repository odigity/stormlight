import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards} from "../carddata";
import Card from "../components/Card";
import _ from "lodash";
import {useFilterState, cardPassesFilters} from "../contexts/filter.context.tsx";


export default function LivePreview() {
    const filters = useFilterState();

    const cards = _(allCards)
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
