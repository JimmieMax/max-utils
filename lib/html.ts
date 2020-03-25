//Requires html

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