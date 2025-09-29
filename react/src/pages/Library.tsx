import { allCardsInOrder } from "../carddata";
import Card from "../components/Card";
import "../styles/cards.css";

export default function Library() {
    return (
        <div className="library-container">
            <div className="library-topnav">
                <span className="dingbats">cors12380*</span>
                <div>
                    <a href="#free-actions">Free Actions</a> |{" "}
                    <a href="#reactions">Reactions</a> |{" "}
                    <a href="#conditions">Conditions</a> |{" "}
                    <a href="#items">Items</a>
                </div>
            </div>

            {allCardsInOrder.map(section => (
                <div key={section.id}>
                    <h1 id={section.id} className="section-title">{section.title}</h1>
                    <div className="flexbox-container">
                        {section.cards.map((card, idx) => (
                            <Card key={`${section.id}-${idx}-${card.name}`} data={card} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
