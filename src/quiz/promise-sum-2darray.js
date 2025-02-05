var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var array2D_1 = [
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
function sumRow(arr, rowIdx) {
    return new Promise(function (resolve, reject) {
        console.log("Sum row called ".concat(rowIdx));
        var sum = 0;
        for (var i = 0; i < arr[rowIdx].length; i++) {
            sum += arr[rowIdx][i];
        }
        resolve(sum);
    });
}
function calculateSum(numArr) {
    return __awaiter(this, void 0, void 0, function () {
        var rowSumPromises, x, rowSums, sum_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (numArr.length === 0) {
                        throw new Error('Cannot sum an empty array');
                    }
                    rowSumPromises = [];
                    for (x = 0; x < numArr.length; x++) {
                        rowSumPromises.push(sumRow(numArr, x));
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all(rowSumPromises)];
                case 2:
                    rowSums = _a.sent();
                    sum_1 = 0;
                    rowSums.forEach(function (rowSum) {
                        sum_1 += rowSum;
                    });
                    console.log('Sum =', sum_1);
                    return [2 /*return*/, 'done'];
                case 3:
                    err_1 = _a.sent();
                    console.error("Error:", err_1);
                    return [2 /*return*/, 'failed'];
                case 4: return [2 /*return*/];
            }
        });
    });
}
calculateSum(array2D_1).then(function (status) { console.log('Status:', status); });
// calculateSum([]).catch((err) => { console.error("Error:", err); });
console.log("End of main thread");
