interface SingletonFunction {
    (fn: Function): Function
}

export const getSingleton: SingletonFunction = (fn) => {
    let newSingletonFunction: Function;
    return function (this: void) {
        return newSingletonFunction || (newSingletonFunction = fn.apply(this, arguments));
    }
}