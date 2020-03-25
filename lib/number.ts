/**
 * Round
 * @param number number to round
 * @param decimals decimals count
 * @returns {*}
*/
interface Round {
    (number: number, decimals: number): number
}

export const round: Round = (number, decimals = 0) => Number(`${Math.round(Number(`${number}e${decimals}`))}e-${decimals}`);

/**
 * sum
 * @param arr number or number array
 * @returns {sum: number}
*/
interface Sum {
    (arr: any[]): number
}

export const sum: Sum = (...arr) => [...arr].reduce((acc, val) => Number(acc) + Number(val), 0);

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