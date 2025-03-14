function isNAway(s1, s2) {
    if(Math.abs(s1.length - s2.length) > 1) {
        return false;
    }
    if(s1 === s2){
        return true;
    }
    const ls = s1.length >= s2.length ? s1 : s2;
    const ms =  s1.length > s2.length || s1.length === s2.length ? s2 : s2;
    let allowEdit = s1.length === s2.length;
    let allowInsert = !allowEdit;
    for(let i = 0, j = 0; i< ls.length;i++, j++) {
        if(ls[i] !== ms[j]) {
            if(allowEdit) {
                allowEdit = false;
            } else if( allowInsert) {
                j--;
                allowInsert = false;
            }else {
                return false;
            }
        }
    }
    return true;
}

console.log(isNAway('pale', 'palesi'))