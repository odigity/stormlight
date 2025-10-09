import "../styles/cards.scss";
import "../styles/livepreview.scss"
import {allCards} from "../cards";
import Card from "../components/Card";
import _ from "lodash";
import {Alert, Box, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Paper, Select} from "@mui/material";
import {sheets} from '../sheets';
import type {SheetData} from "../types/types.ts";
import {useState} from "react";


export default function Sheets() {
  const [sheet, setSheet] = useState<SheetData | undefined>();

  const onSheetChange = (sheetName: string) => {
    const sheet = _.find(sheets, {name: sheetName})
    setSheet(sheet);
  };

  const cardsNotFound = _.uniq(_.filter(_.map(sheet?.cards, (cardName) => {
    const found = _.find(allCards, {name: cardName});
    return found ? null : cardName;
  })));

  console.log('cardsNotFound:', cardsNotFound);

  const cards =
    _.filter(_.map(sheet?.cards, (cardName) => {
      return _.find(allCards, {name: cardName});
      }
    ));

    return (
        <div className="sheets-container">
          <Box sx={{marginBottom:2}}>
            <Box>
              {
                cardsNotFound.length > 0 && <Alert severity="warning">
                  The following cards were not found: {cardsNotFound.join(', ')}
                </Alert>
              }
            </Box>
            <SheetSelector onSheetChange={onSheetChange} sheetName={sheet?.name || ''}/>
          </Box>
          <Grid container>
                {
                    cards.map((card, ind) => {
                        return <Card data={card} key={ind}/>
                    })
                }
          </Grid>
        </div>
    );
}

function SheetSelector(props) {
  const {onSheetChange, sheetName} = props;
  const handleSheetChange = (e) => {
    onSheetChange(e.target.value);
  }
  return (
    <Box className="sheetselector-container">
      <Paper sx={{padding: 2}}>
        <Grid container>
          <Grid size={3}></Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel id="sheet-select-label">Sheet:</InputLabel>
              <Select
                // label="Sheet"
                labelId="sheet-select-label"
                id="sheet-select"
                input={<OutlinedInput label="Sheets" />}
                // renderValue={(selected) => selected.join(', ')}
                value={sheetName}
                onChange={handleSheetChange}
              >
                {
                  _.map(sheets, (sheet) => {
                    return (
                      <MenuItem value={sheet.name} key={sheet.name}>{sheet.name}</MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid size={3}></Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
