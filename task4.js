const arr = [0,-1,1];
let f = function(el, pos, arr) {
    if (el > 0) {
        return 1;
    } else {
        return 0;
    }
}

function some(arr, func) {
    if (Array.isArray(arr) && typeof func === 'function') {
        let one;
        for (let i = 0; i < arr.length; i++) {
            const res = func(arr[i], i, arr);

            if (res) {
                one = 'True';
                break;
            } else {
                one = 'False';
            }
        }
        return console.log( `array.some is ${one}`);
    }
}

const res = some( arr, f);