const matrix = [
    [1, 0, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];

function zeroMatrix(m) {
    const x = {}, y ={};
    for(let i = 0; i<m.length; i++){
        for(let j=0; j < m[i].length; j++){
            if(m[i][j] === 0){
                x[j] = true;
                y[i] = true;
            }
        }
    }
    console.log(x)
    console.log(y)
    

    for(let i in x){
        for(let j=0; j< m.length; j++){
            m[j][i] = 0;
        }
    }
    for(let i in y){
        for(let j=0; j< m[i].length; j++){
            m[i][j] = 0;
        }
    }
}


function printMatrix(m) {
    for (let i= 0; i < m.length; i++) {
        console.log('[' + m[i].join(',') + ']');
    }
}

console.log(matrix)
zeroMatrix(matrix)
console.log('------------')
console.log(matrix)