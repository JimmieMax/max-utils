/*
 * @Desc: 统一暴露
 * @Author: Jimmie
 * @Date: 2019-12-16 18:24:51
 */
import { type } from './type';
import { parseTime } from './time';
import { deepClone } from './data';
import { round, sum, numberAddDot } from './number';
import { copyText, download } from './html';
import { queryString, queryStringObj } from './browser';
import { debounce } from './debounce';

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