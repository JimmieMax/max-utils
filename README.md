# max-utils
Javascript Utils

### Build

``` javascript
yarn build
```

### Test

``` javascript
yarn test
```

### Case

#### Type

1. type

>type(data)

#### Time

1. parseTime

>parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')

#### Data

1. deepClone

>deepClone(data);

#### Number

1. round

>round(number, decimals);

2. sum

>sum(number1, number2, number3, ...);

3. numberAddDot

>numberAddDot(number, ',');

#### Html

1. copyText

>copyText(text, callback);

2. download

>download(link, name);

#### Browser

1. queryString

>queryString(name);

2. queryStringObj

>queryStringObj();

#### Others

1. debounce

>debounce(function, delay);
