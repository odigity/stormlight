import {classNames, getCardWidthByActionCost} from "../utils/utils.ts";
import "../styles/watermark-cards.scss"

interface WatermarkCardProps {
    data: {
        art: string,
        actions?: number,
    }
}

export default function WatermarkCard(props: WatermarkCardProps){
    const {actions, art} = props.data;
    const widthClass = getCardWidthByActionCost(actions);
    return (
        <div className={"card "+widthClass}>
            <img className={classNames({
                watermark : true,
            })} src={`src/assets/art/${art}`} alt={art}/>
        </div>
    )
}
