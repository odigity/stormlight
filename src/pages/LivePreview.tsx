import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards} from "../cards";
import Card from "../components/Card";
import _ from "lodash";
import {useFilterState, cardPassesFilters} from "../contexts/filter.context.tsx";
import {Grid} from "@mui/material";


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
            {/*<div className="flexbox-container">*/}
          <Grid container>
                {
                    cards.map((card, ind) => {
                        return <Card data={card} key={ind}/>
                    })
                }
          </Grid>
            {/*</div>*/}
        </div>
    );
}
