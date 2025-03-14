function isUnique(s) {
    const os = Array.from(s).sort();
    for (let i = 0; i < os.length - 1; i++) {
        if(os[i] === os[i+1]){
            return false;
        }
    }
    return true;
}

function isUniqueWithHS(os) {
    const dict = {};
    for (let i = 0; i < os.length; i++) {
        const letter = os[i];
        if(!dict[letter]) {
            dict[letter] = true;
        } else {
            return false;
        }
    }
    return true;
}

const word = 'hagstfebl';
console.log(word + 'is unique: ' + isUniqueWithHS(word))
console.log(word + 'is unique Withoout DS: ' + isUnique(word))