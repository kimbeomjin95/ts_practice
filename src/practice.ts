let count = 0;
count += 1;
// count = '문자'; // 에러

const message: string = 'hello world';
const boolean: boolean = true;

const numbers: number[] = [1, 2, 3];

const messages: string[] = ['hello', 'world'];

// messages.push(1); // 에러

let mightBeUndefined: string | undefined = undefined;

let nullableNumber: number | null = 10;

// 값을 선언하고 여러 값중 한개만 선언할 시
let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'orange';
// color = 'greed'; // 에러