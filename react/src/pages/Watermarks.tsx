import WatermarkCard from "../components/WatermarkCard.tsx";

const items = [
    {
        actions: 2,
        icon: "Restrained.svg"
    }, {
        icon: "Slowed.svg"
    }, {
        icon: "Stunned.svg"
    }
]

export default function Watermarks(){
    return (
        <div className="flexbox-container">
            {
                items.map((item, ind) => {
                    return <WatermarkCard data={item} key={ind}/>
                })
            }
        </div>
    )
}
