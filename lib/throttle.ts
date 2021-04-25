/** Error message constants. */
const FUNC_ERROR_TEXT = "Expected a function";

/**
 * 节流
 * @param fn {*}  执行函数
 * @param delay {*}  节流时间,毫秒
 * @returns {Function}
 */
interface Throttle {
  (fn: any, delay: number): any;
}
export const throttle: Throttle = (fn, delay = 0) => {
  if (typeof fn != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  let canRun = true,
    firstTime = true;
  return function (this: void) {
    let args = arguments;
    // 第一次直接执行
    if (firstTime) {
      firstTime = false;
      fn.apply(this, args);
    }
    if (!canRun) return; // 注意，这里不能用timer来做标记，因为setTimeout会返回一个定时器id
    canRun = false;
    setTimeout(() => {
      fn.apply(this, args);
      canRun = true;
    }, delay);
  };
};
