// 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법
interface Shape {
  getArea(): number;
}

// private, public은 ts내에서의 유의미한 속성(컴파일에는 영향 없음)
class Circle implements Shape { // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시
  // 자동화
  constructor(public radius: number) { // public 선언시 멤버변수(전역변수) 조회O
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }  
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) { // private 선언시 멤버변수(전역변수) 조회 X
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log('public 멤버변수, '+circle.radius);
const rectangle = new Rectangle(2, 5);
// console.log('circle.getArea'+circle.getArea());

const shapes: Shape[] = [circle, rectangle];
shapes.forEach(shape => {
  console.log(shape.getArea())
})
