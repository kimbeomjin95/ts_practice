"use strict";
const person = {
    name: '김범진',
    age: 1,
    // skills: ['javascript'] -> 인터페이스에는 정의된 skills가 없으므로 ERROR
};
const expert = {
    name: '김개발',
    skills: ['java', 'python'],
};
const people = [person, expert];
const colors = 'red';
// const colors: Color = 'greed'; // ERROR
// 객체에 대한 타입을 설정할 때는 interface | type
