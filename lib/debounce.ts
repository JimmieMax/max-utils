
/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Deep clone
 * @param obj object to deep clone
 * @returns {Function}
*/
export function debounce(fn: any, delay: number) {
    if (typeof fn != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    let timer: any = null;
    return function (this: void) { //this参数是个假的参数
        let args = arguments;
        clearTimeout(timer) // 每次调用debounce函数都会将前一次的timer清空，确保只执行一次
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}