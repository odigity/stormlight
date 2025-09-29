import cards from "../carddata/foo.tsx";
import Card from "../components/Card";
import "../styles/cards.css";


export default function Foo() {
    return (
        <div className="library-container">
            <div className="flexbox-container">
                {cards.map((card, idx) => (
                    <Card key={`${idx}-${card.name}`} data={card}/>
                ))}
            </div>

        </div>
    );
};
