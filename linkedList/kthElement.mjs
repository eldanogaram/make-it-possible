import { LinkedList, Node } from "./linkedList.mjs";

function  kthElement(ll, kth) {
    let n1 = ll.head;
    let n2 = ll.head;
    let counter = 0;
    while(n1) {
        if(counter >= kth){
            n2 = n2.next;
        }
        n1 = n1.next;
        counter += 1;
    }
    return  counter < kth ? null : n2.data;
}

const ll = new LinkedList(new Node(5));
ll.appendToTail(2);
ll.appendToTail(3);
ll.appendToTail(9);
ll.appendToTail(7);
ll.appendToTail(8);
ll.appendToTail(0);
ll.print();
console.log('kth element: ' + kthElement(ll, 3))