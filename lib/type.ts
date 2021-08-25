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