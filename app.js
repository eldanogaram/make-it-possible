const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
/*
    i0 [13,9,5,1],
    i1 [14,6,10,2],
    i2 [15,11,7,3],
    i3 [16,12,8,4]
*/

function printMatrix(m) {
    for (let i= 0; i < m.length; i++) {
        console.log('[' + m[i].join(',') + ']');
    }
}

function rotate90(m) {
    mls = m.length -1;
    
}

//printMatrix(matrix);
rotate90(matrix);
console.log('rotada')
printMatrix(matrix);