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
//
// const arr = [1,2,3];
// let i, item;
// let f = function() {
//     for ( i = 0; i < arr.length; i++) {
//         item = arr[i];
//         console.log(i + ': ' + item + ' ( Array: ' + arr + ')');
//     }
// }
//
//
// function deClar() {
//     if (Array.isArray(arr) && typeof f === 'function') {
//         f(item, i, arr);
//     }
// }
//
// deClar();