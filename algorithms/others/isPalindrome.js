const isPalindrome = (x) => {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    let currentNumber = 0;
    while (x > currentNumber) {
        currentNumber = currentNumber * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    // console.log(x);
    // console.log(currentNumber);
    return x === currentNumber || x === Math.floor(currentNumber / 10);
};

console.log(isPalindrome(0));
console.log(isPalindrome(-1));
console.log(isPalindrome(10));
console.log(isPalindrome(2));
console.log(isPalindrome(11));
console.log(isPalindrome(12));
console.log(isPalindrome(13));
console.log(isPalindrome(12221));
console.log(isPalindrome(1235234));
console.log(isPalindrome(1441));
