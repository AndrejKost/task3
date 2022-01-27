const arr = [1,2,3];
let f = function(el, pos, arr) {
    if (el >= 2) {
        return el;
    } else {
        return 0;
    }
}

function filter(arr, func) {
    let exportArr = [];
    if (Array.isArray(arr) && typeof func === 'function') {

        for (let i = 0; i < arr.length; i++) {
            const res = func(arr[i], i, arr)
            if (res) {
                exportArr.push(res);
            }
        }
    }
    return exportArr
}

const res = filter( arr, f);
console.log(`New array is ${res}`);