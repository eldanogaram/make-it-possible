import { LinkedList, Node } from "./linkedList.mjs";

function isIntersection (ll, ll2) {
    let h1 = ll.head;
    let h2 = ll2.head;
    while(h1.next) {
        h1 = h1.next;
    }
    while(h2.next) {
        h2 = h2.next;
    }

    return h1 === h2;
}


const h1 = new Node(1);
const h2 = new Node(4);
const n1 = new Node(2);
const n2 = new Node(2);
const n3 = new Node(2);
const n4 = new Node(2);
const n5 = new Node(2);
const n6 = new Node(2);
const n7 = new Node(2);
h1.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
h2.next = n5;


console.log('is intersection ', isIntersection(new LinkedList(h1), new LinkedList(h2)))
