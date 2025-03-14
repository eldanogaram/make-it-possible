class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.last = None
    def pop(self):
        value = self.last
        if self.last is not None:
            self.last = self.last.next
        return value
    def push(self, item):
        if self.last is not None:
            item.next = self.last
            self.last = item
        else:
            self.last = item
    def peek(self):
        return self.last
    def isEmpty(self):
        return self.last is None


# myStack = Stack()
# myStack.push( Node(1))
# myStack.push(Node(2))
# myStack.push(Node(3))
# print('peek ' + str(myStack.peek()))
# print('pop ' + str(myStack.pop().data))
# print('pop ' + str(myStack.pop().data))
# print('pop ' + str(myStack.pop().data))
# print('is empty ' + str(myStack.isEmpty()))
# print('pop ' + str(myStack.pop()))

