import '../styles/carddatatable.scss'
import type {CardData} from "../types/types.ts";
import {allCards} from "../carddata";
import {useState} from "react";
import _ from "lodash";


interface CardDataTableProps {
    data: CardData[]
}

// export default function CardDataTable(props: CardDataTableProps) {
export default function CardDataTable() {
    // const {data: cards} = props;
    const cards = allCards;

    const [filter, setFilter] = useState<null | string>(null);

    const handleFilterChange = (filter: string) => () => {
        if (filter === 'all'){
            return setFilter(null)
        } else {
            return setFilter(filter)
        }
    }

    return (
        <div className="datatable-container">
            <div className="filters">
                <div className="filter" onClick={handleFilterChange('all')}>All</div>
                <div className="filter" onClick={handleFilterChange('TODO')}>Todo</div>
                <div className="filter" onClick={handleFilterChange('PROOF')}>Proof</div>
                <div className="filter" onClick={handleFilterChange('DONE')}>Done</div>
                <div className="filter" onClick={handleFilterChange('art')}>Art</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Art</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
                        <th>Source</th>
                        <th>Back?</th>
                        <th>IP/FP</th>
                        <th>CH/Charges</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        _.filter(cards,
                            (c) => {
                            if(!filter) {
                                return true;
                            }
                            if (filter === 'art') {
                                return !c.art || c.art.includes("?");
                            }
                            return c.status === filter
                            })
                            .map((card, ind) => {
                            return (
                                <CardRow data={card} key={ind} even={ind%2===0}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

interface CardRowProps {
    data: CardData,
    even?: boolean
}
function CardRow(props: CardRowProps) {
    const {data: card} = props
    return (
        <tr className={props.even? 'even' : 'odd'}>
        {/*     Art
                Name
                Status
                Type
                Actions
                Source
                Back?
                IP/FP
                CH/Charges
                */}
            <td className="art"><img src={`src/assets/art/${card.art}`} alt={card.art}/></td>
            <td>{card.name}</td>
            <td>{card.status}</td>
            <td>{card.type}</td>
            <td className="dingbats">{getActCharFromActions(card.actions)}</td>
            <td>{card.source}</td>
            <td>{card.flipCard || "N/A"}</td>
            <td>{card.ip || "N/A"} / {card.fp || "N/A"}</td>
            <td>{card.charges? `${card.ch} / ${card.charges}` : "N/A"}</td>
        </tr>
    )
}

function getActCharFromActions(actions) {
    switch (actions) {
        case -1: {
            return 'r'
        }
        case (0 || 1 || 2 || 3): {
            return actions
        }
        default: {
            return "N/A"
        }
    }
}
