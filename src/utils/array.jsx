export const deepClone = (array) => { 
    return JSON.parse(JSON.stringify(array));
}

export const findInArray = (id, array) => {
    return array.find((item) => item.id === id);
}