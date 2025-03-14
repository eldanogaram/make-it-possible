class Node {
    constructor(data) {
        this.data = data;
        this.min = data;
        this.next = undefined;
    }
}

class Stack {
    constructor() {

    }

    pop () {
        const value = this.last;
        if(this.last) {
            this.last = this.last.next;
        }
        return value;
    }
    push (item) {
        if (this.last) {
            item.next = this.last;
            item.min = Math.min(item.data, this.last.min);
            this.last = item;
        } else {
            this.last = item;
        }
    }
    peek () {
        return this.last;
    }
    isEmpty () {
        return !this.last;
    }
    min () {
        return this.peek()?.min;
    }
}

const myStack = new Stack();
console.log('is empty: ' + myStack.isEmpty())
myStack.push(new Node(5))
myStack.push(new Node(6))
myStack.push(new Node(4))
console.log('is empty: ' + myStack.isEmpty())
console.log('min: ' + myStack.min())
console.log('peek: ' + myStack.peek()?.data)
console.log('pop: ' + myStack.pop()?.data)
console.log('pop: ' + myStack.pop()?.data)
console.log('min: ' + myStack.min())
console.log('pop: ' + myStack.pop()?.data)
