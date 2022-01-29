const arr = [3,2,5,4];
//const arr = [];
function reverce(inputArr) {
    if ( Array.isArray(inputArr) && inputArr.length != 0) {
        let endI = inputArr.length - 1;
        for (var i = 0;  i < endI; i++) {
            var endJ = endI - i;
            for (var j = 0;  j < endJ; j++) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                console.log(' ==> ',tmp);//return inputArr.push (inputArr[i]);
            }
        }
        return inputArr;
    } else {
        throw new Error ('input Array is empty');
    }
}
const outArr = reverce(arr);
console.log(' ==> ',arr);
console.log(`Array reverce is: ${outArr}`);