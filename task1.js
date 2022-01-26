const arr = [1,2,3];
let f = function(el, pos) {
        console.log(`element is ${el}, position index is ${pos}`);
}

function forEach(arr, func) {
    if (Array.isArray(arr) && typeof func === 'function') {
        for (let i = 0; i < arr.length; i++) {
            //let item = arr[i];
            f(arr[i], i);
        }
    }
}

forEach(arr, f);