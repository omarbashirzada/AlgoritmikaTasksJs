function Seventh_Function(array1, array2) {
    let arr = [];
    for (let i = 0; i < array1.length; i++) {
        const includesValue = array2.some(element => {
            return element.toLowerCase() === array1[i].toLowerCase();
        });
        if (includesValue) {
            arr.push(array1[i]);
        }
    }
    return arr;
}