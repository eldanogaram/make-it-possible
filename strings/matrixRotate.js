const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

/*
    1  2  3  4
    5  6  7  8
    9  10 11 12
    13 14 15 16
-----------------
    13 9  5  1
    14 10 6  2
    15 11 7  3
    16 12 8  4

    0,0 => 0,0
    0,1 => 
*/
function rotateMatrix90(m) {
    const mls = m.length - 1;
    for(let y =0; y < mls; y++){
        for(let x =y; x < mls - y; x++) {
            const aux = m[y][x];
            m[y][x] = m[mls-x][y];
            m[mls-x][y] = m[mls-y][mls-x];
            m[mls-y][mls-x] = m[x][mls-y];
            m[x][mls-y] = aux;
        }
    }
}

function printMatrix(m) {
    for (let i= 0; i < m.length; i++) {
        console.log('[' + m[i].join(',') + ']');
    }
}


console.log(matrix)
rotateMatrix90(matrix)
console.log('------------')
console.log(matrix)