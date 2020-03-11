/**
 * Deep clone
 * @param obj object to deep clone
 * @returns {*}
*/
interface NumberAddDot {
    (value: string | number, dot: string, count: number): string
}

export const numberAddDot: NumberAddDot = (value = 0, dot = ',', count = 3) => {
    value = value.toString();
    const reg = new RegExp(`(?=(\\B)(\\d{${count}})+$)`,'g');
    return value.replace(reg, dot);
}