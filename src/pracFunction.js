"use strict";
// ts에서 함수의 파라미터의 기본값은 any
function sum(x, y) {
    return x + y;
}
const result = sum(1, 2);
console.log(result);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3]);
console.log(total);


