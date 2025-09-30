import _ from 'lodash';

export function classNames(obj): string {
    return _.chain(obj)
        .pickBy() // filter out falsy values
        .keys()
        .join(" ").valueOf();
}

export function getCardWidthByActionCost(actionCost: number | undefined) {
    if (!actionCost || actionCost < 2) {
        return ''
    } else if (actionCost === 2) {
        return 'double-wide'
    } else if (actionCost === 3) {
        return 'triple-wide'
    }
}
