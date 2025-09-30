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
                card                     : true,
                inset                    : data.inset,
                [data.type.toLowerCase()]: true
            })}>
                {data.icon ? (
                    <img className={classNames({
                        watermark: true,
                        mirrored : data.mirrorIcon,
                        rot90    : data.rotRightIcon,
                        'rot-90' : data.rotLeftIcon,
                    })} src={`src/assets/art/${normalizeNameForSvg(data.name)}.svg`} alt="watermark"/>
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
                    {data.rulesCentered ? (
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
                {data.note && <div className="note">{data.note}</div>}
                <div className="source">{data.source}</div>
            </div>
        </div>
    );
}

function normalizeNameForSvg(name){
    return name.split(" ").join("");
}

export default Card;
