import '../styles/carddatatable.scss'
import type {CardData} from "../types/types.ts";
import {allCards} from "../carddata";
import _ from "lodash";
import {Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {cardPassesFilters, useFilterState} from "../contexts/filter.context.tsx";


export default function CardDataTable() {
    const filters = useFilterState();
    const cards = _(allCards)
        .sortBy('name')
        .filter((card) => {
            return cardPassesFilters(card, filters)
        })
        .value();

    return (
        <Box className="datatable-container">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Art</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Actions</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Flip?</TableCell>
                            <TableCell>IP/FP/CH</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cards.map((card, ind) => {
                                return (
                                    <CardRow data={card} key={ind} even={ind % 2 === 0}/>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

interface CardRowProps {
    data: CardData,
    even?: boolean
}
function CardRow(props: CardRowProps) {
    const {data: card} = props
    return (
        <TableRow>
            <TableCell className="art">
                <img src={`src/assets/art/${card.art}`} alt={card.art}/>
            </TableCell>
            <TableCell>{card.name}</TableCell>
            <TableCell>{card.status}</TableCell>
            <TableCell>{card.type}</TableCell>
            <TableCell className="dingbats">{getActCharFromActions(card.actions)}</TableCell>
            <TableCell>{card.source}</TableCell>
            <TableCell>{card.flipCard || ''}</TableCell>
            <TableCell>
                <Grid container>
                    {
                        card.fp && <Grid size={6}>
                        <Box className="focus cost">
                            {card.fp}
                        </Box>
                      </Grid>
                    }
                    {
                        card.ip && <Grid size={6}>
                        <Box className="investiture cost">
                            {card.ip}
                        </Box>
                      </Grid>
                    }
                    {
                        card.ch && <Grid size={6}>
                        <Box className="charge cost">
                            {card.ch}
                        </Box>
                      </Grid>
                    }
                    {
                        card.charges && <Grid size={6}>
                        <Box className="charges cost">
                            {card.charges}
                        </Box>
                      </Grid>
                    }
                </Grid>
            </TableCell>
        </TableRow>
    );
}

function getActCharFromActions(actions) {
    switch (actions) {
        case "-1":
        case -1:
            return 'r'
        case "0":
        case 0:
        case "1":
        case 1:
        case "2":
        case 2:
        case "3":
        case 3:
            return actions
        default: {
            return ""
        }
    }
}
