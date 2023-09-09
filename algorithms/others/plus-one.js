var plusOne = function (digits) {
    const lens = digits.length;
    // console.log(23);
    for (let i = lens - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            for (let j = i + 1; j < lens; j++) {
                digits[j] = 0;
            }
            return digits;
        }
    }
    const arr = new Array(lens + 1).fill(0);
    arr[0] = 1;
    return arr;
};

console.log(plusOne([1, 2, 3, 4, 5, 6]));
console.log(plusOne([9, 9]));
