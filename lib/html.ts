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
    const temp = document.createElement('textarea');
    temp.value = String(text);
    temp.style.display = 'none';
    document.body.appendChild(temp);
    temp.select();
    if (document.execCommand) {
        document.execCommand('copy');
        callback && callback();
    }
    document.body.removeChild(temp);
};

/**
 * Download
 * @param link Link to download
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