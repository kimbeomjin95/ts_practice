"use strict";
// private, public은 ts내에서의 유의미한 속성(컴파일에는 영향 없음)
class Circle {
    // 자동화
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
console.log('public 멤버변수, ' + circle.radius);
const rectangle = new Rectangle(2, 5);
// console.log('circle.getArea'+circle.getArea());
const shapes = [circle, rectangle];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
