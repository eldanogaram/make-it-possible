function compress(s) {
    if(s.length === 0) {
        return s;
    }
    const compressed = [s[0]];
    let lastLetter = s[0];
    let counter = 1;
    for (let i = 1; i < s.length; i++) {
        if(s[i] === lastLetter){
            counter++;
        } else {
            compressed.push(`${counter}${s[i]}`);
            lastLetter = s[i];
            counter = 1;
        }
    }
    compressed.push(counter);
    return compressed.length < s.length ? compressed.join('') : s;
}

console.log(compress('aabcccccaaa'))
console.log(compress('abcdeeeeeeeeeeeefghi'))
console.log(compress('abcdfeghstauihnksa'))