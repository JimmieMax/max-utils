/**
 * Deep clone
 * @param obj object to deep clone
 * @returns {*}
*/
interface NumberAddDot {
    (value: string | number, dot: string): string
}

export const numberAddDot: NumberAddDot = (value = 0, dot = ',') => {
    value = value.toString();
    const reg = /(?=(\B)(\d{3})+$)/g;
    return value.replace(reg, dot);
}