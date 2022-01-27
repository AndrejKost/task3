const arr = [3,2,1];
let f = function(el, pos, arr) {
    if (el >= 2) {
        return 1;
    } else {
        return 0;
    }
}

function filter(arr, func) {
    if (Array.isArray(arr) && typeof func === 'function') {
        let one;
        for (let i = 0; i < arr.length; i++) {
            const res = func(arr[i], i, arr);

            if (!res) {
                one = 'False';
                break;
            } else {
                one = 'True';
            }
        }
        return console.log( `array is ${one}`);
    }
}

const res = filter( arr, f);