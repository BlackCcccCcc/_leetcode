const addBinary = function (a, b) {
    let ans = [];
    let carry = 0;
    const lens = a.length > b.length ? a.length : b.length;
    while (a.length < lens) {
        a = '0' + a;
    }
    while (b.length < lens) {
        b = '0' + b;
    }
    console.log(a, b);
    for (let i = lens - 1; i >= 0; i--) {
        const num1 = a[i];
        const num2 = b[i];
        let sum = Number(num1) + Number(num2) + carry;
        if (sum >= 2) {
            ans[i] = sum - 2;
            carry = 1;
        } else {
            ans[i] = sum;
            carry = 0;
        }
    }

    if (carry) {
        ans.unshift(1);
    }
    return ans.join('');
};
addBinary('101', '1110');
