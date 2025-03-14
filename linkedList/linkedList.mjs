export class Node {
    constructor(data) {
        this.data = data;
        this.next = undefined;
    }
}

export class LinkedList {
    constructor(node){
        this.head = node;
    }
    appendToTail(data) {
        const endNode = new Node(data);
        let n = this.head;
        while(n.next) {
            n = n.next;
        }
        n.next = endNode;
    }
    appendNodeToTail(endNode) {
        let n = this.head;
        while(n.next) {
            n = n.next;
        }
        n.next = endNode;
    }
    delete(data) {
        if(this.head.data === data){
            this.head = this.head.next;
            return this.head;
        }
        let n = this.head;
        while(n.next){
            if(n.next.data === data){
                n.next = n.next.next;
                break;
            }
            n = n.next;
        }
        return this.head;
    }
    print() {
        let n = this.head;
        const a = [];
        do {
            a.push(n.data);
            n = n.next;
        } while(n);
        console.log(a.join(','))
    }
}

// const ll = new LinkedList(new Node(5));
// ll.appendToTail(7);
// ll.appendToTail(9);
// ll.print()
// ll.delete(7)
// ll.print()