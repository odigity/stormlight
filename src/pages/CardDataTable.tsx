import '../styles/carddatatable.scss'
import type {CardData} from "../types/types.ts";
import {allCards} from "../cards";
import _ from "lodash";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography
} from "@mui/material";
import {cardPassesFilters, useFilterState} from "../contexts/filter.context.tsx";
import Card from "../components/Card.tsx";


export default function CardDataTable() {
    const filters = useFilterState();
    const cards = _(allCards)
        .sortBy('name')
        .filter((card) => {
            return cardPassesFilters(card, filters)
        })
        .value();

    return (
        <Paper className="datatable-container" sx={{overflow: 'hidden', width: '100%'}}>
            <TableContainer sx={{maxHeight: 'calc(100vh - 450px)'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell>Art</TableCell>
                            <TableCell>Name</TableCell>
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
        </Paper>
    );
}

interface CardRowProps {
    data: CardData,
    even?: boolean
}
function CardRow(props: CardRowProps) {
    const {data: card} = props
    const artFileName = card.name.replace(/[^a-zA-Z0-9]/g, '') + '.svg';
    const artFilePath = `src/assets/art/${artFileName}`
    // HACK -ofer
    const status = card.status == "DONE" ? "✔" : card.status == "PROOF" ? "Proof" : "TODO";
    let card_type = card.type == "MagicItem" ? "Magic Item" : card.type == "FreeAction" ? "Free Action" : card.type;

    return (
    <TableRow>
      <TableCell>{status}</TableCell>
      <Tooltip
        arrow
        placement="bottom"
        disableInteractive
        className="svg-tooltip"
        slotProps={{
          tooltip: {
            sx: {maxWidth: 'none'},
          }
        }}
        title={
          <Box sx={{width: '800px'}}>
            <Card data={card}/>
          </Box>
        }
      >
        <TableCell className="art">
          <img src={artFilePath} alt={artFilePath}/>
        </TableCell>
      </Tooltip>
      <TableCell><b>{card.name}</b></TableCell>
      <TableCell>{card_type}</TableCell>
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
            card.charges && <Grid container size={6}>
                      <Grid size={6}>
                          <Typography sx={{fontFamily: 'LaskiSans', fontWeight: "bold", lineHeight: "1"}}>
                            {card.charges}
                          </Typography>
                      </Grid>
                      <Grid size={6}>
                          <Box className="charges cost">
                          </Box>
                      </Grid>
                  </Grid>
          }
        </Grid>
      </TableCell>
    </TableRow>
  );
}

function getActCharFromActions(actions: string | number | undefined) {
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
