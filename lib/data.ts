/**
 * Deep clone
 * @param obj object to deep clone
 * @returns {*}
 */

interface UniqueData {
  source: object;
  target: object;
}
interface Find {
  (uniqueList: UniqueData[], source: object): UniqueData | null;
}

const find: Find = (uniqueList, source) => {
  for (var i = 0; i < uniqueList.length; i++) {
    if (uniqueList[i].source === source) {
      return uniqueList[i];
    }
  }
  return null;
};

interface DeepClone {
  (source: object, uniqueList?: UniqueData[]): object;
}

export const deepClone: DeepClone = (source, uniqueList = []) => {
  let target: any = Array.isArray(source) ? [] : {};
  if (source && typeof source === "object") {
    var uniqueData = find(uniqueList, source);
    if (uniqueData) return uniqueData.target;
    uniqueList.push({
      source: source,
      target: target,
    });
    for (let key in source) {
      let prop = source[key as keyof typeof source];
      if (prop && typeof prop === "object") {
        target[key] = deepClone(prop, uniqueList);
      } else {
        target[key] = prop;
      }
    }
  }
  return target;
};
