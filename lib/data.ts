/**
 * Deep clone
 * @param obj object to deep clone
 * @returns {*}
*/
interface DeepClone {
    <T>(obj: T): T
}

export const deepClone: DeepClone = (obj) => {
    let objClone: any = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === "object") {
                objClone[key] = deepClone(obj[key]);
            } else {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}