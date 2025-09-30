import WatermarkCard from "../components/WatermarkCard.tsx";

const items = [
    {
        actions : 2,
        art     : "Restrained.svg"
    }, {
        art     : "Slowed.svg"
    }, {
        art     : "Stunned.svg"
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
