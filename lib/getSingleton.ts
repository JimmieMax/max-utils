/*
 * @Desc: 页面、组件说明
 * @Date: 2021-03-29 11:01:21
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */

interface SingletonFunction {
    (fn: Function): Function
}

export const getSingleton: SingletonFunction = (fn) => {
    let newSingletonFunction: Function;
    return function (this: void) {
        return newSingletonFunction || (newSingletonFunction = fn.apply(this, arguments));
    }
}