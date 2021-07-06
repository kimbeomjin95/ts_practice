"use strict";
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    // 큐에 새로 등록
    enqueue(item) {
        this.list.push(item);
    }
    // 큐에서 첫번째 항목을 추출
    dequeue() {
        return this.list.shift(); // shift: 첫번째 원소를 배열에서 추출
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
