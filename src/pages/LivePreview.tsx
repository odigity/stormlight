import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards} from "../cards";
import Card from "../components/Card";
import _ from "lodash";
import {useFilterState, cardPassesFilters} from "../contexts/filter.context.tsx";
import {Grid} from "@mui/material";
import {CardType} from "../types/card_type.ts";
import InfusionCard from "../components/cards/InfusionCard.tsx";


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
            {/*<div className="flexbox-container">*/}
          <Grid container>
                {
                    cards.map((card, ind) => {
                        if(card.type === CardType.INFUSION) {
                          return <InfusionCard data={card} key={ind} />
                        }
                        return <Card data={card} key={ind}/>
                    })
                }
          </Grid>
            {/*</div>*/}
        </div>
    );
}
