import { LinkedList, Node } from "./linkedList.mjs";

function reverseLL(ll) {
    let n = ll.head;
    let head = undefined;
    while(n) {
        const headAux = head;
        head = new Node(n.data);
        head.next = headAux;
        n = n.next;
    }
    return new LinkedList(head);
}
function isPalindrome(ll) {
    const reversedLL = reverseLL(ll);
    let n = ll.head;
    let n2 = reversedLL.head;
    while(n) {
        if(n.data !== n2.data) {
            return false;
        }
        n = n.next;
        n2 = n2.next;
    }
    return true;
}

const l1 = new LinkedList(new Node('a'));
l1.appendToTail('n')
l1.appendToTail('i')
l1.appendToTail('t')
//l1.appendToTail('e')
l1.appendToTail('i')
l1.appendToTail('n')
l1.appendToTail('a')


console.log('is palindrome ', isPalindrome(l1))
