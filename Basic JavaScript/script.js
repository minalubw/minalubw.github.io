function max(x, y){
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function maxOfThree(x, y, z){
    if(x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }
    else{
        return z;
    }
}

function isVowel(c){
    if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){
        return true;
    }
    else{
        return false;
    }
}

function sum(arr){
    let s = 0;
    for (let index = 0; index < arr.length; index++) {
        s += arr[index];
    }
    return s;
}

function multiply(arr){
    let p = 1;
    for (let index = 0; index < arr.length; index++) {
        p += arr[index];
    }
    return p;
}

function reverse(x){
    let r ="";
    for (let index = x.length; index >= 0; index--) {
        r += x.charAt(index);
    }
    return r;
}

function findLongestWord(arr){
    let len = arr[0].length;

    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > len){
            len = arr[i].length;
        }
    }
    return len;
}

function filterLongWords(arr, int){
    const cars = [];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > int){
            cars[index] = arr[i];
            index++;
        }
    }
    return cars;
}

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else if(Array.isArray(expected) && Array.isArray(found)) { 
        if(expected.length != found.length)
            return "TEST FAILED.  Expected " + expected + " found " + found;
        else {

            for(let i = 0; i < expected.length; i++){
                if(expected[i] != found[i])
                    return "TEST FAILED.  Expected " + expected + " found " + found;
            }

            return "TEST SUCCEEDED";
        }
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

console.log("Expected output of max(20,10) is 10 " + myFunctionTest(10, max(20, 10)));
console.log("Expected output of max(20,30) is 30 " + myFunctionTest(30, max(20, 30)));
console.log("Expected output of maxOfThree(10, 20, 30) is 30 " + myFunctionTest(30, maxOfThree(10, 20, 30)));
console.log("Expected output of maxOfThree(10, 40, 30) is 30 " + myFunctionTest(30, maxOfThree(10, 40, 30)));
console.log("Expected output of sum([3,3,3]) is 9 " + myFunctionTest(9, sum([3,3,3])));
console.log("Expected output of sum([2,2,2]) is 9 " + myFunctionTest(9, sum([2,2,2])));
console.log("Expected output of reverse(Uine) is eniU " + myFunctionTest("eniU", reverse("Uine")));
console.log("Expected output of reverse(Sens) is Ense " + myFunctionTest("Ense", reverse("Sens")));
console.log("Expected output of isVowel('i') is true " + myFunctionTest(true, isVowel('i')));
console.log("Expected output of isVowel('y') is true " + myFunctionTest(true, isVowel('y')));
console.log("Expected output of multiply([10,10,10]) is 1000 " + myFunctionTest(1000, multiply([10, 10, 10])));
console.log("Expected output of multiply([3,4,10]) is 320 " + myFunctionTest(320, multiply([3, 4, 10])));


// const a = [1,3,5,3,3]; 
// const b = a.map(function(elem, array) {
//   return elem * 10;
// })

// console.log("Expected map function result of a.map()")
// const c = a.filter(function(elem, array){
//   return elem == 3;});
// document.writeln(c.toString() + "<br/>");
// const d = a.reduce((prevElement, ele) => prevElement * ele, 1);
// document.writeln(d+ "<br/>");





