import type {CardData} from "../types/types.ts";
import {ItemType} from "../types/itemType.ts";
import "../styles/cards.css";
import * as _ from "lodash";

interface CardProps {
    data: CardData;
}

function Card({ data }: CardProps) {
    const widthClass = getCardWidthByActionCost(data.actions);

    const watermarkClasses = _.filter([
        "watermark",
        data.mirrorIcon ? "mirrored" : "",
        data.rotRightIcon ? "rot90" : "",
        data.rotLeftIcon ? "rot-90" : ""
    ]).join(" ");

    const showFP = typeof data.fp === "number" && (data.fp ?? 0) > 0;
    const showIP = typeof data.ip === "number" && (data.ip ?? 0) > 0;

    return (
        <div className={`card ${widthClass}`}>
            {data.icon ? (
                <img className={watermarkClasses} src={data.icon} alt="watermark" />
            ) : null}

            <div className="cardhead">
                <div className="name">{data.name}</div>

                {(showFP || showIP) && (
                    <div className="costs">
                        {showFP && <div className="focus cost">{data.fp}</div>}
                        {showIP && <div className="investiture cost">{data.ip}</div>}
                    </div>
                )}
            </div>

            {/*<h2>{data.name}</h2>*/}

            {data.rulesCentered ? (
                <div className="rules-centered">{data.rules}</div>
            ) : (
                <div className="rules">{data.rules}</div>
            )}

            {data.note && <div className="note">{data.note}</div>}
            <div className="source">{data.source}</div>
        </div>
    );
}

function getCardWidthByActionCost(actionCost) {
    if (!actionCost || actionCost < 2) {
        return ''
    } else if (actionCost === 2) {
        return 'double-wide'
    } else if (actionCost === 3) {
        return 'triple-wide'
    }
}


export default Card;
