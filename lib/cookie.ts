/**
 * setCookie
 * @param key object to deep clone
 * @param value object to deep clone
 * @param maxAge ms
 * @returns {*}
*/
interface SetCookie {
    (key: String, value: string | number, maxAge: number): void
}
export const setCookie: SetCookie = (key, value, maxAge) => {
    const date = new Date();
    date.setTime(date.getTime() + maxAge);
    document.cookie = `${key}=${escape(String(value))};maxAge=${maxAge};expires=${date.toUTCString()}`;
}

/**
 * GetCookie
 * @param key object to deep clone
 * @returns {String | null}
*/
interface GetCookie {
    (key: String): any
}

export const getCookie: GetCookie = (key) => {
    const result = document.cookie.match("(^|[^;]+)\\s*" + key + "\\s*=\\s*([^;]+)")
    return result ? result.pop() : null
}

/**
 * DelelteCookie
 * @param key cookie key
 * @returns {*}
*/
interface DelelteCookie {
    (key: String): void
}
export const deleteCookie: DelelteCookie = (key: String) => {
    document.cookie = `${key}=;maxAge=0;expires=${(new Date(0)).toUTCString()}`;
}