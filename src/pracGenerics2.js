"use strict";
// 파라미터의 타입이 정해지지 않은 경우 제네릭 사용
function wrap(param) {
    return {
        param,
    };
}
// 파라미터 타입을 any를 사용하면 타입이 any가 되지만
// 제네릭 타입을 사용하면 파라미터 타입 유추 가능
const wrapped = wrap('10');
console.log(wrapped.param); // param: String
const items = {
    list: ['a', 'b', 'c'],
    value: 1,
};
console.log(items);
