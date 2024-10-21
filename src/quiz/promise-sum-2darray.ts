
const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Solution

// function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
//     return new Promise((resolve, reject) => {
//         // const row = arr[rowIdx];
//         if (arr.length > rowIdx) {
//             const row = arr[rowIdx];
//             let sum = 0;
//             for (let i = 0; i < arr[rowIdx].length; i++) {
//                 sum += arr[rowIdx][i];
//             }
//             resolve(sum);

//         } else {
//             reject(`Row index ${rowIdx} must be within 0 and ` + (arr.length - 1));
//         }
//     });
// }

// const rowSumPromises = [];

// for(let x=0; x<array2D_1.length; x++) {
//     rowSumPromises.push(sumOfARow(array2D_1, x));
// }

// function sumConcurrently(arr: number[][]): Promise<number> {
//     const promises: Promise<number>[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         const p = sumOfARow(arr, i);
//         promises.push(p);
//     }
//     return Promise.all(promises)
//         .then((rowSums) => {
//             let sum = 0;
//             rowSums.forEach((rowSum) => {
//                 sum += rowSum;
//             });
//             console.log('Sum of 2D array:', sum);
//         })
//         .catch((err) => {
//             console.error("Error:", err);
//             return err;
//         });
// }

// Async version 

function sumRow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log(`Sum row called ${rowIdx}`);
        let sum = 0;
        for (let i = 0; i < arr[rowIdx].length; i++) {
            sum += arr[rowIdx][i];
        }
        resolve(sum);
    });
} 

async function calculateSum(numArr: number[][]) {
    if(numArr.length === 0) {
        throw new Error('Cannot sum an empty array');
    }
    let rowSumPromises = [];
    for (let x = 0; x < numArr.length; x++) {
        rowSumPromises.push(sumRow(numArr, x));
    }
    try {
        const rowSums = await Promise.all(rowSumPromises);
        // console.log('Row sums:', rowSums);
        let sum = 0;
        rowSums.forEach((rowSum: number) => {
            sum += rowSum;
        });
        console.log('Sum =', sum);
        return 'done';

    } catch (err) {
        console.error("Error:", err);
        return 'failed';
    }
}

calculateSum(array2D_1).then((status) => { console.log('Status:', status); });
// calculateSum([]).catch((err) => { console.error("Error:", err); });

console.log("End of main thread");