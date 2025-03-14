function urlify(s, length) {
    let current = s.length -1;
    for(let i = 0; i < length; i++){
        if(s[length - 1 - i] === ' ') {
            s[current] = '0';
            s[current-1] = '2';
            s[current-2] = '%';
            current -= 3;
        } else {
            s[current] = s[length-1-i];
            current--;
        }
    }
}

const word = Array.from('hola mundo  ');
urlify(word, 10)
console.log(word.join(''));