import {classNames, getCardWidthByActionCost} from "../utils/utils.ts";
import "../styles/watermark-cards.scss"

interface WatermarkCardProps {
    data: {
        art: string,
        actions?: number,
        mirrorArt?: boolean,
    }
}

export default function WatermarkCard(props: WatermarkCardProps){
    const {actions, art, mirrorArt} = props.data;
    const widthClass = getCardWidthByActionCost(actions);
    return (
        <div className={"card "+widthClass}>
            <img className={classNames({
                watermark : true,
                mirrored  : mirrorArt,
            })} src={`src/assets/art/${art}`} alt={art}/>
        </div>
    )
}
