class Node:
    def __init__(self, data: int) -> None:
        self.data = data
        self.children = []
        self.visited = False

def dfs(start: Node, end: Node) -> bool:
    if start is None:
        return False
    start.visited = True
    for item in start.children:
        if not item.visited:
            item.visited = True
            if end is item or dfs(item, end):
                return True
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

print('Can I go from: 1 to 5 ' + str(dfs(n2, n4)) )