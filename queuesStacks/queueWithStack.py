import stack

class WeirdQueue:
    def __init__(self):
        self.left = stack.Stack()
        self.right = stack.Stack()
    def add(self,item):
        if self.left.last is None:
            self.left.push(item)
            self.right.push(item)
        else:
            self.left.push(item)
            current = self.left.peek()
            self.right = stack.Stack()
            while current is not None:
                self.right.push(stack.Node(current.data))
                current = current.next
    def remove(self):
        value = self.right.peek()
        current = self.right.pop()
        self.left = stack.Stack()
        while current is not None:
            self.left.push(stack.Node(current.data))
            current = current.next
        return value
    def peek(self):
        return self.right.peek()
    def isEmpty(self):
        return self.left.isEmpty()
    def printAll(self):
        current = self.left.peek()
        while current is not None:
            print('printing ' + str(current.data))
            current = current.next

queue = WeirdQueue()
queue.add(stack.Node(1))
queue.add(stack.Node(2))
queue.add(stack.Node(3))
queue.add(stack.Node(4))
queue.printAll()
print('peek ' + str(queue.peek().data))
print('pop ' + str(queue.remove().data))
print('pop ' + str(queue.remove().data))
print('pop ' + str(queue.remove().data))
print('pop ' + str(queue.remove().data))
print('is empty ' + str(queue.isEmpty()))
print('pop ' + str(queue.remove()))

