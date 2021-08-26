import { type } from "./type";

/**
 * Parse time
 * @param time (date or timespan)
 * @param cFormat
 * @returns {*}
 */
interface ParseTime {
  (time: any, cFormat: string): string;
}
interface FormatObj {
  y: number;
  m: number;
  d: number;
  h: number;
  i: number;
  s: number;
  a: number;
}
type FormatKey = keyof FormatObj;

export const parseTime: ParseTime = (
  time,
  cFormat = "{y}-{m}-{d} {h}:{i}:{s}"
) => {
  if (!time) {
    return "";
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (time instanceof Date) {
    date = time;
  } else {
    if (("" + time).length === 10) time = (parseInt(time) * 1000).toString();
    date = new Date(time);
  }
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key as FormatKey];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
};
