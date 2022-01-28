const arr = [2,3,1];
const acc = 0;
let f = function(summ, el, pos, arr) {
    return el;
}

function reduce(inputArr, inputFunc, inputAcc = 0) {
    if (Array.isArray(inputArr) && typeof inputFunc === 'function' && (typeof inputAcc == 'number' || typeof inputAcc == 'string')) {
        let sum = inputAcc;
        for (let i = 0; i < inputArr.length; i++) {
            sum += inputFunc(inputAcc, inputArr[i], i, inputArr);
        }
        return sum;
    }
}

const res = reduce( arr, f, acc);
console.log( `array.reduce is ${res}`);