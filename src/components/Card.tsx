import type {CardData} from "../types/types.ts";
// import "../styles/cards.scss";
import * as _ from "lodash";
import {classNames, getCardWidthByActionCost} from "../utils/utils.ts";
import {Box, Grid, Typography} from "@mui/material";

interface CardProps {
    data: CardData;
    size?: number;
}

function Card({data, size}: CardProps) {
    size = !_.isNil(size)
      ? size
      : _.clamp(data.actions || 0, 1, 3) * 4;

    const fp = _.toNumber(data.fp) || '';
    const ip = _.toNumber(data.ip) || '';
    const ch = _.toNumber(data.ch) || '';
    const charges = _.toNumber(data.charges) || 0;

    const artFileName = data.name.replace(/[^a-zA-Z0-9]/g, '') + '.svg';
    const artFilePath = `src/assets/art/${artFileName}`

  return (
    <Grid size={size} className="cardwrapper">
      <Box className={`card ${data.type?.toLowerCase() || ''}`}>
        <img className='watermark' src={artFilePath} alt={artFileName}/>
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
        <Box className="cardBody">
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
