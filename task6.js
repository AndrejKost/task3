const arr = [2,3,1];
const acc = 0;
let f = function(summ, el, pos, arr) {
    return el;
}

function reduceRight(inputArr, inputFunc, inputAcc = 0) {
    if (Array.isArray(inputArr) && typeof inputFunc === 'function' && (typeof inputAcc == 'number' || typeof inputAcc == 'string')) {
        let sum = inputAcc;
        for (let i = inputArr.length; i > 0; i--) {
            sum += inputFunc(inputAcc, inputArr[i-1], i, inputArr);
        }
        return sum;
    }
}

const res = reduceRight( arr, f, acc);
console.log( `array.reduce is ${res}`);