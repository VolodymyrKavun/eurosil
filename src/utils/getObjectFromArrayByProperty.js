export const getObjectFromArrayByProperty = (array, property, pathname, slicerSize) => {
    const param = pathname?.slice(slicerSize);
    const data = array.find((item) => item[property] === param);
    return data;
};
