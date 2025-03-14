function isPermutation(s1, s2) {
    if(s1.length !== s2.length) {
        return false;
    }
    const dic = {};
    for(let i = 0; i < s1.length; i++) {
        const s1l = s1[i],s2l = s2[i];
        dic[s1l] = dic[s1l] ? dic[s1l] +1 : 1;
        dic[s2l] = dic[s2l] ? dic[s2l] -1 : -1;
    }

    for(let p in dic) {
        if(dic[p] !== 0){
            return false;
        }
    }
    return true;
}

console.log('is permutation : ' + isPermutation('hola', 'laho'))