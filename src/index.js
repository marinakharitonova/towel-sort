// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix && matrix.length > 0) {
        matrix.forEach((elem, i) => {
            result.push(...(i % 2 === 0 ? elem : elem.reverse()))
        })
    }
    return result;
}
