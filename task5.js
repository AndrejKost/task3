const arr = [2,3,1];
const acc = 0;
let f = function(sum, el, pos, arr) {
    return sum + el;
}

function reduce(arr, func, acc) {
    if (Array.isArray(arr) && typeof func === 'function' && (typeof acc == 'number' || typeof acc == 'string')) {

        for (let i = 0; i < arr.length; i++) {
            const res = func(acc, arr[i], i, arr);
            if (res) {
                console.log(res);
            }
            return res;
        }
        //return console.log( `array.reduce is ${res}`);
    }

}

const res = reduce( arr, f, acc);
console.log(`Sum array is ${res}`);