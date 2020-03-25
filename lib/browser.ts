//Requires browser environment

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