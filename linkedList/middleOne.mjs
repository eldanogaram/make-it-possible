import { LinkedList, Node } from "./linkedList.mjs";

function deleteMiddleOne(node) {
    node.data = node.next.data;
    node.next = node.next.next;
}

const ll = new LinkedList(new Node(5));
ll.appendNodeToTail(new Node(2));
ll.appendNodeToTail(new Node(3));
ll.appendNodeToTail(new Node(9));
const node = new Node(7);
ll.appendNodeToTail(node);
ll.appendNodeToTail(new Node(8));
ll.appendNodeToTail(new Node(0));
ll.print();
deleteMiddleOne(node)
ll.print()