/*
 * @Desc: 页面、组件说明
 * @Date: 2020-03-22 12:11:08
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
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
 * Round
 * @param digit digit for random
 * @returns {*}
*/
interface Random {
    (digit: number): number
}
export const random: Random = (digit) => Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, digit - 1));

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
    const reg = new RegExp(`(?=(\\B)(\\d{${gap}})+$)`, 'g');
    return value.replace(reg, dot);
}