/*
 * @Desc: 统一暴露
 * @Author: Jimmie
 * @Date: 2019-12-16 18:24:51
 */
import { parseTime } from './time';
import { debounce } from './debounce';
import { deepClone } from './data';
import { queryString, queryStringObj } from './browser';
import { copyText, download } from './html';
import { type } from './type';
import { round, sum, numberAddDot } from './number';

export {
    type,
    parseTime,
    deepClone,
    round,
    sum,
    numberAddDot,
    copyText,
    download,
    queryString,
    queryStringObj,
    debounce,
}