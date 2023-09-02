class Queue {
    constructor() {
        let items = [];
        let count = 0;
        let front = 0;
        let rear = -1;

        this.enqueue = (item) => {
            items[++rear] = item;
            count++;
        };
        this.dequeue = () => {
            let current = front++;
            let temp = items[current];
            items[current] = null;
            count--;
            return temp;
        };
        this.front = () => {
            return items[front];
        };
        this.rear = () => {
            return items[rear];
        };
        this.size = () => {
            return count;
        };
        this.isEmpty = () => count === 0;
        this.print = () => items.filter((item) => item !== null);
    }
};

const queue = new Queue();
queue.enqueue("Vishal");
queue.enqueue("Baliyan");
console.log(queue.print());
const ele = queue.dequeue();
console.log(ele);
console.log(queue.print());
console.log(queue.front());
console.log(queue.rear());
