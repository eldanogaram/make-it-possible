import { Stack, Node } from "./stack.mjs";

class SetStack {
    constructor (capacity) {
        this.capacity = capacity;
        this.stacks = [new Stack()];
        this.stacksLength = [0];
    }
    pop () {
        const currentStack = this.stacks.length - 1;
        const value = this.stacks[currentStack].pop();
        if(this.stacks[currentStack].isEmpty()) {
            this.stacks = this.stacks.slice(0, -1);
            this.stacksLength = this.stacksLength.slice(0, -1);
        } else {
            this.stacksLength[currentStack] -= 1;
        }
        return value;
    }
    popAtStack (index) {
        if (!this.stacks[index]) {
            return undefined;
        }
        const currentStack = this.stacks.length - 1;
        if (index === currentStack) {
            return this.pop();
        } else {
            const value = this.stacks[index].pop();
            //this.stacks[index].last.next = this.stacks[index + 1].last;
            return value;
        }
    }
    push (item) {
        const currentStack = this.stacks.length - 1;
        if (this.stacksLength[currentStack] < this.capacity) {
            this.stacks[currentStack].push(item);
            this.stacksLength[currentStack] += 1;
        } else {
            const newStack = new Stack();
            newStack.push(item);
            this.stacks.push(newStack);
            this.stacksLength[currentStack + 1] = 1;
        }
    }
    peek () {
        return this.stacks[this.stacks.length - 1].peek();
    }
    isEmpty () {
        return this.stacks.length === 1 &&  this.stacks[0].isEmpty();
    }
}

const mySet = new SetStack(3);
mySet.push(new Node(1));
mySet.push(new Node(2));
mySet.push(new Node(3));
mySet.push(new Node(4));
console.log('peek ' + mySet.peek())
console.log('peek ' + mySet.peek())
console.log('l ' + mySet.stacks.length)

console.log('peek ' + mySet.pop()?.data)
console.log('peek ' + mySet.peek())
console.log('l ' + mySet.stacks.length)


