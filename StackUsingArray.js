class Stack {
  constructor() {
    let count = 0;
    let items = [];

    this.push = (item) => {
      items[count++] = item;
    };
    this.pop = () => {
      return items[--count];
    };
    this.size = () => {
      return count;
    };
    this.peek = function(){
        return items[count - 1];
    }
    this.isEmpty = () => count === 0;
    this.clear = () => count = 0;
  }
  
}

var stack = new Stack();   //creating new instance of Stack
 stack.push(1);
 stack.push(2);
 stack.push(3);
 console.log(stack.peek());
 console.log(stack.isEmpty());
 console.log(stack.size());
 console.log(stack.pop());
 console.log(stack.size());
 stack.clear();
 console.log(stack.isEmpty());
