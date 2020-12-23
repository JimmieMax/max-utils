/*
 * @Desc: 统一暴露
 * @Author: Jimmie
 * @Date: 2019-12-16 18:24:51
 */
import { type } from './type';
import { parseTime } from './time';
import { deepClone } from './data';
import { round, random, sum, numberAddDot } from './number';
import { copyText, download } from './html';
import { setCookie, getCookie, deleteCookie } from './cookie';
import { queryString, queryStringObj } from './browser';
import { debounce } from './debounce';
import { throttle } from './throttle';

export {
    type,
    parseTime,
    deepClone,
    round,
    random,
    sum,
    numberAddDot,
    copyText,
    download,
    queryString,
    queryStringObj,
    debounce,
    throttle,
    setCookie,
    getCookie,
    deleteCookie,
}