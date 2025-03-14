function sameDistance(a, b) {
    let distance = undefined;
     for (let i = 0; i< a.length; i++) {
        if(distance === undefined) {
            distance = a[i]-b[i];
        } else if(a[i] - b[i] != distance) {
            console.log('' + a[i] + ' ' + b[i] + ' ' + distance)
            return false;
        }
    }
    return true;
}

console.log(sameDistance([1,2,3], [1,2,3]))