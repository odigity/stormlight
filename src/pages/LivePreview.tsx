import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards, allCardsByType} from "../carddata";
import Card from "../components/Card";
import {useState} from "react";
import _ from "lodash";
import type {CardType} from "../types/cardType.ts";
import {Box, Button, Grid, Paper, Stack, Typography} from "@mui/material";


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
];

export default function LivePreview() {
    const [typeFilter, setTypeFilter] = useState<null | CardType>(null);
    const [sortType, setSortType] = useState<'type' | 'name'>('type');

    const cards = _(allCards)
        .sortBy('name')
        .sortBy('type')
        .sortBy(sortType)
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

    const handleSortChange = (type) => () =>{
        setSortType(type);
    }

    return (
        <div className="livepreview-container">

            <Paper
                elevation={4}
                sx={{
                marginTop: 2,
                marginBottom: 2,
                padding: 2,
            }}>
                <Typography variant="h4" sx={{marginBottom: 1}}>
                    Filters (type):
                </Typography>
                <Grid container spacing={2}>
                    {
                        types.map((type) => {
                            return <Grid size={2}>
                                <Button
                                    key={type}
                                    onClick={handleFilterChange(type)}
                                    variant="contained"
                                    fullWidth
                                >
                                    {type}
                                </Button>
                            </Grid>
                        })
                    }
                </Grid>
                <Typography variant="h4">
                    Sort:
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleSortChange('type')}
                        >
                            Type
                        </Button>
                    </Grid>
                    <Grid size={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleSortChange('name')}
                        >
                            Name
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            {/*<div className="quickfilters">*/}
            {/*    {*/}
            {/*        types.map((type) => {*/}
            {/*            return <>*/}
            {/*                <a href="#" onClick={handleFilterChange(type)}>{type}</a>*/}
            {/*            </>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}

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
