import { LinkedList, Node } from "./linkedList.mjs";

function partition(ll, x) {
    let ln = new Node();
    const ll1 = new LinkedList(ln);
    let rn = new Node();
    const ll2 = new LinkedList(rn);
    let n = ll.head;
    while(n){
        if(n.data < x) {
            ln.data = n.data;
            ln.next = new Node();
            ln = ln.next;
        } else {
            rn.data = n.data;
            rn.next = new Node();
            rn = rn.next;
        }
        n = n.next;
    }
    ln.data = ll2.head.data;
    ln.next = ll2.head.next;
    return ll1;
}

const ll = new LinkedList(new Node(5));
ll.appendToTail(2);
ll.appendToTail(3);
ll.appendToTail(9);
ll.appendToTail(7);
ll.appendToTail(8);
ll.appendToTail(0);
ll.print();
const lln = partition(ll, 5);
lln.print()