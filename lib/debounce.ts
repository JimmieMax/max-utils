
/** Error message constants. */
const FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Deep clone
 * @param obj object to deep clone
 * @returns {Function}
 */
interface Debounce {
    (fn: any, delay: number): any
}
export const debounce: Debounce = (fn, delay = 0) => {
    if (typeof fn != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    let timer: any = null;
    return function (this: void) { //this参数是个假的参数
        let args = arguments;
        clearTimeout(timer) // 每次调用debounce函数都会将前一次的timer清空，确保只执行最后一次
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}