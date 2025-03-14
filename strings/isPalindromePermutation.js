function isPalindromePermutation(s) {
    s = s.toLowerCase();
    let oddCounter = 0;
    const dic = {};
    for (let c of s){
        if(c !== ' ') {
            if (!dic[c]){
                oddCounter++;
                dic[c] = 1;
            } else {
                dic[c] +=1;
                oddCounter += dic[c] %2 === 0 ? -1 : 1; 
            }
        }
    }

    return oddCounter >= 0 && oddCounter <=1;
}

console.log('isPalindromePerm ' + isPalindromePermutation('Anita lava la tina'))