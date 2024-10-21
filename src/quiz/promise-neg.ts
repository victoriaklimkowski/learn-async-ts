// test array
const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

// test empty array
const array2D_e: number[][] = [];

function logNegativeRows(arr: number[][]): Promise<void> {
    return new Promise((resolve, reject) => {
        console.log('Log Negative Rows called ... ');

        if (arr.length === 0) {
            reject('Array is empty, nothing to check');
            return;
        }

        // Function to handle each row
        const checkRow = (row: number[]): Promise<void> => {
            return new Promise((resolve) => {
                if (row.some(num => num < 0)) {
                    console.log(`Row [${row}] contains a negative number`);
                }
                resolve(); // Resolve after processing the row, regardless of negatives
            });
        };

        // Process all rows concurrently
        Promise.all(arr.map(row => checkRow(row)))
            .then(() => resolve())
            .catch(err => reject(err));

        console.log('Returning from logNegativeRows');
    });
}

logNegativeRows(array2D_3)
    .then(() => console.log('Completed checking rows'))
    .catch(err => console.error('Error:', err));

logNegativeRows(array2D_e)
    .then(() => console.log('Completed checking rows'))
    .catch(err => console.error('Error:', err));

console.log("End of script");
