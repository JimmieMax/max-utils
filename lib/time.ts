/**
 * Parse time
 * @param time (date or timespan)
 * @param cFormat
 * @returns {*}
 */
export function parseTime(time: any, cFormat: string = '{y}-{m}-{d} {h}:{i}:{s}'): string {
    if (arguments.length === 0) {
        return ''
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (time instanceof Date) {
        date = time
    } else {
        if (('' + time).length === 10) time = (parseInt(time) * 1000).toString();
        date = new Date(time)
    }
    const formatObj: any = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}