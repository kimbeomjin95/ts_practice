// 인터페이스를 통해서 객체 타입 지정
type Person = {
  // type alias 사용
  // interface Person {
  name: string;
  age?: number; // ? : Person 인터페이스에서는 age가 있을 수도 있고 없을 수도 있음
};

const person: Person = {
  name: '김범진',
  age: 1,
  // skills: ['javascript'] -> 인터페이스에는 정의된 skills가 없으므로 ERROR
};

// name: string, age?: number, 중첩으로 인한 상속
// interface Developer extends Person {
type Developer = Person & {
  // type alias 사용
  skills: string[];
};

const expert: Developer = {
  name: '김개발',
  skills: ['java', 'python'],
};

// 인터페이스로는 할 수 없는 것
type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const colors: Color = 'red';
// const colors: Color = 'greed'; // ERROR

// 객체에 대한 타입을 설정할 때는 interface | type
