/*
 * @Desc: 页面、组件说明
 * @Author: Jimmie
 * @Date: 2020-01-09 19:51:30
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
interface Type {
    (data: any): string
}

export const type: Type = (data) => {
    const dataType = Object.prototype.toString
        .call(data)
        .replace(/\[object\s(.+)\]/, "$1")
        .toLowerCase()
    return dataType;
}