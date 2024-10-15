function sumNums(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
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

const nums: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sp1 = sumNums(nums);
sp1
    .then((res) => console.log('Sum:', res))
    .catch((err) => console.error('Error:', err));
const sp2 = sumNums([]);
sp2
    .then((res) => console.log('Sum:', res))
    .catch((err) => console.error('Error:', err));

console.log("End of script");    

// const sumPromise1 = sum2DArray(array2D);
// console.log('sumPromise1:', sumPromise1);

// const sumPromise2 = sum2DArray([]);
// console.log('sumPromise2:', sumPromise2);
