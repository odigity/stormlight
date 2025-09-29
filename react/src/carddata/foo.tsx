import costly_actions from './costly_actions.tsx';
import {ItemType} from "../types/itemType.ts";

const gainAdv = costly_actions[2];

const cards = [
    // makeCardWithStyles({
    //     fontFamily: 'Taroca'
    // }),
    // makeCardWithStyles({
    //     fontFamily:'Penumbra'
    // }),
    makeCardWithStyles({
        fontFamily:'LaskiSans'
    }),
    makeCardWithStyles({
        fontFamily:'Plantin'
    }),
    makeCardWithStyles({
        fontFamily:'GoodOT'
    }),
];


function makeCardWithStyles(styles) {
    return {
        name: 'Gain Advantage',
        type: ItemType.COSTLY_ACTION,
        actions: 1,
        rulesCentered: false,
        icon: "asdf",
        rules: <>
            <div style={styles}>
                {styles.fontFamily}
                <br/>
                <i>Any skill vs enemy's corresponding defense:</i>
                <br/>Gain an Advantage on next test using a different skill vs that enemy.
            </div>
        </>,
        source: "p.303"
    }
}

export default cards;
