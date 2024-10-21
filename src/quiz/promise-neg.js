// test array
var array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
// test empty array
var array2D_e = [];
function logNegativeRows(arr) {
    return new Promise(function (resolve, reject) {
        console.log('Log Negative Rows called ... ');
        if (arr.length === 0) {
            reject('Array is empty, nothing to check');
            return;
        }
        // Function to handle each row
        var checkRow = function (row) {
            return new Promise(function (resolve) {
                if (row.some(function (num) { return num < 0; })) {
                    console.log("Row [".concat(row, "] contains a negative number"));
                }
                resolve(); // Resolve after processing the row, regardless of negatives
            });
        };
        // Process all rows concurrently
        Promise.all(arr.map(function (row) { return checkRow(row); }))
            .then(function () { return resolve(); })
            .catch(function (err) { return reject(err); });
        console.log('Returning from logNegativeRows');
    });
}
logNegativeRows(array2D_3)
    .then(function () { return console.log('Completed checking rows'); })
    .catch(function (err) { return console.error('Error:', err); });
logNegativeRows(array2D_e)
    .then(function () { return console.log('Completed checking rows'); })
    .catch(function (err) { return console.error('Error:', err); });
console.log("End of script");
