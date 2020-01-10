/*
 * @Desc: 统一暴露
 * @Author: Jimmie
 * @Date: 2019-12-16 18:24:51
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
import { parseTime } from './time';
import { debounce } from './debounce';
import { deepClone } from './data';
import { copyText } from './html';
import { type } from './type';

export {
    parseTime,
    deepClone,
    debounce,
    copyText,
    type,
}