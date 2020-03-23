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