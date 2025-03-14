from queue import Queue

class Node:
    def __init__(self, data) -> None:
        self.children = []
        self.data = data
        self.visited = False

def bfs(start: Node, end: Node) -> bool:
    myQueue = Queue()
    start.visited = True
    myQueue.put(start)

    while not myQueue.empty():
        r = myQueue.get()
        for item in r.children:
            if item is end:
                return True
            if not item.visited:
                item.visited = True
                myQueue.put(item)
    return False

root = Node(1)
n1 = Node(2)
n2 = Node(3)
n3 = Node(4)
n4 = Node(5)
n5 = Node(6)
n6 = Node(7)
root.children = [n1, n2]
n1.children = [n3,n4]
n2.children = [n5,n6, n1]

print('Can I go from: 1 to 5 ' + str(bfs(n2, n4)) )
