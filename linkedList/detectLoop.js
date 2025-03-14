import { LinkedList, Node } from "./linkedList.mjs";

function isLoop (ll) {
    let n = ll.head;
    let n2 = ll.head;
    let diff = 1;
    while (n.next && n2.next) {
        
        if(diff === 0) {
            diff = 1;
            n = n.next;
        } else {
            diff--;
        }
        n2 = n2.next;
        console.log(n.data + ' ' + n2.data)
        if(n === n2){
            return n;
        }
    }
    return null
}


const h1 = new Node(1);
const n1 = new Node(2);
const n2 = new Node(3);
const n3 = new Node(4);
const n4 = new Node(5);
const n5 = new Node(6);
const n6 = new Node(7);
const n7 = new Node(8);
h1.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n3;


console.log('is loop ', isLoop(new LinkedList(h1))?.data)
