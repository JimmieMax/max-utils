//Requires browser environment

/**
 * Copy text
 * @param text Text to copy
 * @param callback 
 * @returns {*}
 */
interface CopyText {
    (text: string | number, callback: any): void
}
export const copyText: CopyText = (text, callback) => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', String(text));
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
interface Download {
    (link: string, name: string | number): void
}
export const download: Download = (link, name = '未命名') => {
    let eleLink = document.createElement('a');
    eleLink.download = String(name);
    eleLink.href = link;
    eleLink.click();
    eleLink.remove();
};
/**
 * Query string
 * @param name name of query
 */
interface QueryString {
    (name: string): void
}
export const queryString: QueryString = (name: string) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    return r ? decodeURI(r[2]) : null;
}
/**
 * Query all string
 * @returns {Object}
 */
interface QueryStringObj {
    (): object
}
export const queryStringObj: QueryStringObj = () => {
    const url = window.location.search; //获取url中"?"符后的字串
    const theRequest: any = {};
    if (url.indexOf("?") !== -1) {
        const str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}