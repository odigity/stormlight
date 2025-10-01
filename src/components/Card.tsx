import type {CardData} from "../types/types.ts";
// import "../styles/cards.scss";
import * as _ from "lodash";
import {classNames, getCardWidthByActionCost} from "../utils/utils.ts";

interface CardProps {
    data: CardData;
}

function Card({data}: CardProps) {
    const widthClass = getCardWidthByActionCost(data.actions);

    const fp = _.toNumber(data.fp) || '';
    const ip = _.toNumber(data.ip) || '';
    const ch = _.toNumber(data.ch) || '';
    const charges = _.toNumber(data.charges) || 0;

    return (
        <div className={`cardwrapper ${widthClass}`}>
            <div className={classNames({
                card                      : true,
                inset                     : data.inset,
                [`${data.type?.toLowerCase()}`] : true
            })}>
                {data.art ? (
                    <img className={classNames({
                        watermark : true,
                        mirrored  : data.mirrorArt,
                    })} src={`src/assets/art/${data.art}`} alt="watermark"/>
                ) : null}

                <div className="cardhead">
                    <div className="name">{data.name}</div>
                    {(fp || ip || ch) && (
                        <div className="costs">
                            {fp && <div className="focus cost">{data.fp}</div>}
                            {ip && <div className="investiture cost">{data.ip}</div>}
                            {ch && <div className="charge cost">{data.ch}</div>}
                        </div>
                    )}
                </div>

                <div className="cardBody">
                    {data.centered ? (
                        <div className="rules-centered">{data.rules}</div>
                    ) : (
                        <div className="rules">{data.rules}</div>
                    )}
                </div>

                {charges > 0 &&
                  <div className="charges">{
                      _.times(charges, (val) => {
                          return <div className="chargebox" key={val}/>
                      })
                  }</div>
                }
                {data.keyProps && <div className="keyProps">{data.keyProps}</div>}
                <div className="source">{data.source}</div>
            </div>
        </div>
    );
}

export default Card;
