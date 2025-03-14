from ctypes import Array
import math

class Node:
    def __init__(self, data: int) -> None:
        self.data = data
        self.left = None
        self.right = None

def createMinimalTree(orderedItems: Array[int]) -> Node:
    if len(orderedItems) <= 1:
        return Node(orderedItems[0])
    middleIndex = math.floor(len(orderedItems)/2)
    middle = Node(orderedItems[middleIndex])
    left = orderedItems[:middleIndex]
    right = orderedItems[middleIndex+1:]
    middle.left = createMinimalTree(left)
    middle.right = createMinimalTree(right)
    return middle

root = createMinimalTree([1,2,3,4,5,6,7])
print(root.data)
