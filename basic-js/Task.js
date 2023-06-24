const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];

function sortedArray(arr) {
    if (arr.length === 0) {
        return arr;
    }

    arr = arr.sort(function (a, b) {
        return a * 1 - b * 1;
    });

    var newArr = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(sortedArray(arr));