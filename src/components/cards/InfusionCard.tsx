import type {CardData} from "../../types/types.ts";
import "../../styles/cards.scss";
import "../../styles/infusions.scss";
import * as _ from "lodash";
import {Box, Grid, Typography} from "@mui/material";

interface CardProps {
  data: CardData;
}

function Card({data}: CardProps) {

  const fp = _.toNumber(data.fp) || '';
  const ip = _.toNumber(data.ip) || '';
  const ch = _.toNumber(data.ch) || '';
  const charges = _.toNumber(data.charges) || 0;

  const artFileName = data.name.replace(/[^a-zA-Z0-9]/g, '')
    .replace(/Infusion/g, '')+ '.svg';
  const artFilePath = `src/assets/art/${artFileName}`;

  return (
    <Grid size={4} className="cardwrapper infusion-card">
      <Box className={`card infusion`}>
        <Box className="cardhead">
          <Typography>{data.name}</Typography>
          {(fp || ip || ch) && (
            <div className="costs">
              {fp && <div className="focus cost">{data.fp}</div>}
              {ip && <div className="investiture cost">{data.ip}</div>}
              {ch && <div className="charge cost">{data.ch}</div>}
            </div>
          )}
        </Box>
        <Box className="cardBody" sx={{position: 'relative'}}>
          <img className='watermark infusion-wm' src="src/assets/art/Infusion.svg" alt={artFileName}/>
          <img className='watermark surge-wm' src={artFilePath} alt={artFileName}/>
          <Box className="rules">
            {data.rules}
          </Box>
        </Box>
        {charges > 0 &&
                <Box className="charges">{
                  _.times(charges, (val) => {
                    return <Box className="chargebox" key={val}/>
                  })
                }</Box>
        }
        {data.keyProps && <div className="keyProps">{data.keyProps}</div>}
        <div className="source">{data.source}</div>
      </Box>
    </Grid>
  );
}

export default Card;
