let sum = 0;
const arr3 = [[3,4],1];
function sumArr(inArr) {
    for (let i = 0 ; i < inArr.length; i++) {
        // sum = (typeof inArr[i] == "number") ? sum + inArr[i] :
        // (Array.isArray(inArr[i])) ? sumArr(inArr[i]):
        // console.log('input not newArray');
        if (typeof inArr[i] == "number") {
            sum = sum + inArr[i];
        } else if (Array.isArray(inArr[i])) {
            sumArr(inArr[i]);
        } else {
            throw new Error ('input not new Array');
        }

    }
    return sum;
}

function rezArr(input, sum) {
    if (Array.isArray(input)) {
        return sumArr(input);
    }
    else {
        throw new Error ('input  not Array');
    }
}
rezArr(arr3, sum);