export class Node {
    constructor(data) {
        this.data = data;
        this.next = undefined;
    }
}

export class Stack {
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
            this.last = item;
        } else {
            this.last = item;
        }
    }
    peek () {
        return this.last?.data;
    }
    isEmpty () {
        return !this.last;
    }
}

// const myStack = new Stack();
// console.log('is empty: ' + myStack.isEmpty())
// myStack.push(new Node(1))
// myStack.push(new Node(2))
// myStack.push(new Node(3))
// console.log('is empty: ' + myStack.isEmpty())
// console.log('peek: ' + myStack.peek())
// console.log('pop: ' + myStack.pop()?.data)
// console.log('pop: ' + myStack.pop()?.data)
// console.log('pop: ' + myStack.pop()?.data)
