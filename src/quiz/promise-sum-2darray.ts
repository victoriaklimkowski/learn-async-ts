const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// My initial attempt at solving the problem
// function sum2DArray(arr: number[][]): Promise<number> {
//     return new Promise((resolve, reject) => {
//         console.log('Sum called ... ');
//         if(arr.length === 0) {
//             reject('Cannot sum an empty array');
//         }
//         setTimeout(() => {
//             let sum = 0;
//             for (let i = 0; i < arr.length; i++) {
//                 for (let j = 0; j < arr[i].length; j++) {
//                     console.log(`Adding ${arr[i][j]} to sum`);
//                     sum += arr[i][j];
//                 }
//             }
//             resolve(sum);
//         }, 0);
//         console.log('returning from sum');
//     });
// }

// function sumConcurrently(arr: number[][]): Promise<number> {
//     const promises: Promise<number>[] = [];
//     for (const row of arr) {
//         const p = sum2DArray([row]);
//         promises.push(p);
//     }
//     return Promise.all(promises)
//         .then((results) => {
//             let sum = 0;
//             for (const result of results) {
//                 sum += result;
//             }
//             return sum;
//         })
//         .catch((err) => {
//             console.error("Error:", err);
//             return err;
//         });

// }

// Solution

function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        const row = arr[rowIdx];
        if (arr) {

        }

    });
}