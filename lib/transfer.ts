/**
 * Number add dot
 * @param value number
 * @param dot dot
 * @param gap gap
 * @returns {*}
*/
interface NumberAddDot {
    (value: string | number, dot: string, gap: number): string
}

export const numberAddDot: NumberAddDot = (value = 0, dot = ',', gap = 3) => {
    value = value.toString();
    const reg = new RegExp(`(?=(\\B)(\\d{${gap}})+$)`,'g');
    return value.replace(reg, dot);
}