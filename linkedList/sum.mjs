import { LinkedList, Node } from "./linkedList.mjs";

function sum(ll1, ll2){
    let carry = 0;
    let n1 = ll1.head;
    let n2 = ll2.head;
    let head = new Node();
    const ll = new LinkedList(head);
    while(n1 || n2) {
        let r = (n1?.data ?? 0) + (n2?.data ?? 0) + carry;
        carry = Math.trunc(r/10);
        r = r % 10;
        head.data = r;
        const n = new Node();
        head.next = n;
        head = head.next;
        if(n1) {
            n1 = n1.next;
        }
        if(n2) {
            n2 = n2.next;
        }
    }
    return ll;
}

// [1,2,3,4]
// [9,8,7]

function sumR(n1, n2, c) {
    if(!n1.next && !n2.next) {
        return n1.data + n2.data + c;
    } else {
        const v1 = n1.data;
        const v2 = n2.data;
        console.log(v1 + '-' + v2);
        const h1 = n1.next ? n1.next : n1;
        const h2 = n2.next ? n2.next : n2;
        let r = sumR(h1, h2, c);
        console.log(r);
        console.log(v1 + '-' + v2);

        const carry = Math.trunc(r/10);
        r = r % 10;
        return v1 + v2 + carry;
    }
}


const l1 = new LinkedList(new Node(7));
l1.appendToTail(1)
l1.appendToTail(6)
const l2 = new LinkedList(new Node(5));
l2.appendToTail(9)
l2.appendToTail(2)
const l3 = sum(l1,l2);
l3.print()

// const l1 = new LinkedList(new Node(1));
// l1.appendToTail(2)
// l1.appendToTail(3)
// l1.appendToTail(4)
// const l2 = new LinkedList(new Node(9));
// l2.appendToTail(8)
// l2.appendToTail(7)
// sumR(l1.head,l2.head,0);
