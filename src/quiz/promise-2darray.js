function sumNums(arr) {
    return new Promise(function (resolve, reject) {
        console.log('Sum called ... ');
        if (arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        setTimeout(function () {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    console.log("Adding ".concat(arr[i][j], " to sum"));
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}
// Example usage:
// const array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
var nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var sp1 = sumNums(nums);
sp1
    .then(function (res) { return console.log('Sum:', res); })
    .catch(function (err) { return console.error('Error:', err); });
var sp2 = sumNums([]);
sp2
    .then(function (res) { return console.log('Sum:', res); })
    .catch(function (err) { return console.error('Error:', err); });
console.log("End of script");
// const sumPromise1 = sum2DArray(array2D);
// console.log('sumPromise1:', sumPromise1);
// const sumPromise2 = sum2DArray([]);
// console.log('sumPromise2:', sumPromise2);
