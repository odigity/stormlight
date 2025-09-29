import * as _ from 'lodash';

export function classNames(obj) {
    return _.chain(obj)
        .pickBy() // filter out falsy values
        .keys()
        .join(" ");
}
