// ts에서 함수의 파라미터의 기본값은 any
function sum(x: number, y:number): number { // return 값도 number 선언
  return x + y;
}

const result = sum(1, 2);
console.log(result);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3]);
console.log(total)

// 함수에서 아무것도 반환하지 않은 경우
function returnNotthing(): void {
  console.log('어쩌구');
  // return true; // 에러
}

returnNotthing();

// 함수에서 숫자 or 문자 
function returnStringOrNumber(): string | number {
  return 4;
}