<!--
 * @Desc: 页面、组件说明
 * @Date: 2020-04-10 12:16:48
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
-->
# max-utils

Javascript Utils

## Build

``` javascript
yarn build
```

## Test

``` javascript
yarn test
```

## Istanbul coverage

``` javascript
yarn istanbul
```

## Try in Runkit

[Try in Runkit](https://runkit.com/jimmiemax/max-utils-try)

## Case

### Type

1. type
    >type(data)

### Time

1. parseTime
    >parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')

### Data

1. deepClone
    >deepClone(data);

### Number

1. round
    >round(number, decimals);
2. random
    >random(digit);
3. sum
    >sum(number1, number2, number3, ...);
4. numberAddDot
    >numberAddDot(number, ',');

### Html

1. copyText
    >copyText(text, callback);
2. download
    >download(link, name);

### Cookie

1. setCookie
    >setCookie(key, value, maxAge);
2. getCookie
    >getCookie(key);
3. deleteCookie
    >deleteCookie(key);

### Browser

1. queryString
    >queryString(name);
2. queryStringObj
    >queryStringObj();

### Others

1. debounce
    >debounce(function, delay);
2. throttle
    >throttle(function, delay);
