//Requires browser environment

/**
 * Copy text
 * @param text Text to copy
 * @param callback 
 * @returns {*}
 */
export function copyText(text: string, callback: any) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        callback && callback();
    }
    document.body.removeChild(input);
};
/**
 * Download
 * @param link Link to download
 * @param callback 
 */
export function download(link: string, name: string = '未命名') {
    let eleLink = document.createElement('a');
    eleLink.download = name;
    eleLink.href = link;
    eleLink.click();
    eleLink.remove();
};
/**
 * Query string
 * @param name name of query
 */
export function queryString(name: string) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    return r?decodeURI(r[2]):null;
}
/**
 * Query all string
 * @returns {Object}
 */
export function queryStringObj() {
    const url = window.location.search; //获取url中"?"符后的字串
    const theRequest:any = {};
    if (url.indexOf("?") !== -1) {
        const str = url.substr(1);
        let strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}