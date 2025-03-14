function goDeeper (dep, node, compOrder) {
    if (compOrder.includes(node)) {
        return;
    }
    else if (dep[node].length === 0) {
        compOrder.push(node);
    } else {
        dep[node].forEach(x => {
            if (!compOrder.includes(x)) {
                goDeeper(dep, x, compOrder);
            }
        });
        compOrder.push(node);
    }
}

function getCompilationOrder (dep) {
    const depKeys = Object.keys(dep);
    const compilationOrder = [];
    depKeys.forEach(x => goDeeper(dep, x, compilationOrder));

    return compilationOrder;
}

const dependencies = {
    'A': ['B', 'J', 'K'],
    'B': [],
    'C': ['E', 'Z'],
    'D': ['X', 'B', 'A'],
    'J': [],
    'K': ['B', 'C'],
    'E': ['J', 'B'],
    'Z': [],
    'X': ['Z']
}
console.log(getCompilationOrder(dependencies));
