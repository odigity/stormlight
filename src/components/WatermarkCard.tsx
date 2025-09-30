import {classNames, getCardWidthByActionCost} from "../utils/utils.ts";
import "../styles/watermark-cards.scss"

interface WatermarkCardProps {
    data: {
        icon: string,
        actions?: number,
        mirrorIcon?: boolean,
        rotRightIcon?: boolean,
        rotLeftIcon?: boolean,
    }
}

export default function WatermarkCard(props: WatermarkCardProps){
    const {actions, icon, mirrorIcon, rotRightIcon, rotLeftIcon} = props.data;
    const widthClass = getCardWidthByActionCost(actions);
    return (
        <div className={"card "+widthClass}>
            <img className={classNames({
                watermark: true,
                mirrored : mirrorIcon,
                rot90    : rotRightIcon,
                'rot-90' : rotLeftIcon,
            })} src={`src/assets/art/${icon}`} alt={icon}/>
        </div>
    )
}
