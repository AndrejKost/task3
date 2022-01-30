const val = [2,1];
const num = 3;
function arrayFill(input, n) {
    if ((Array.isArray(input) || typeof input == "number" || typeof input == "object" || typeof input == "string") && typeof n == 'number') {
        let arr = new Array(n);
        for ( let i = 0; i < n; i++) {
            arr[i] =  input;
        }
        console.log(' ==> ', arr);}
}
arrayFill(val, num);
