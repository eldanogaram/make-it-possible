import { LinkedList, Node } from "./linkedList.mjs";

function deleteAll(node, data) {
    let n = node;
    while(n){
        if(n.next && n.next.data === data){
            n.next = n.next.next;
        }
        n = n.next;
    }
}

function removeDups(ll) {
    let n = ll.head;
    while(n) {
        deleteAll(n, n.data);
        n = n.next;
    }
}

function removeDupsV2(ll) {
    const dic = {};
    let n = ll.head.next;
    let nprev = ll.head;
    while(n) {
        if(n.next && dic[n.data]){
            nprev = n.next;
            n = n.next;
            //n.next = n.next ? n.next.next : null;
        } else {
            dic[n.data] = true;
        }
        n = n.next;
        nprev = nprev.next;
    }
}

const ll = new LinkedList(new Node(5));
ll.appendToTail(5);
ll.appendToTail(3);
ll.appendToTail(5);
ll.appendToTail(7);
ll.appendToTail(3);
ll.appendToTail(2);
ll.print();
removeDupsV2(ll);
ll.print()