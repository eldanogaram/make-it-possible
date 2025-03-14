function isRotation(s1, s2) {
    if(s1.length !== s2.length){
        return false;
    }

    return (s2 + s2).includes(s1);
}

console.log(isRotation('waterbottle', 'erbottlewat'))