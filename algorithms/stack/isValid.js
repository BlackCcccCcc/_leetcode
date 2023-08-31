const isValid = (string) => {
    const lens = string.length;
    if (lens % 2 === 1) {
        return false;
    }
    const valids = new Map();
    valids.set(')', '(');
    valids.set(']', '[');
    valids.set('}', '{');
    const stack = [];
    for (let i = 0; i < lens; i++) {
        const str = string[i];
        // console.log('str', str); // '( [ {'
        // console.log('has', valids.has(str));

        if (valids.has(str)) {
            // console.log('string[i]', string[i]);
            // console.log(stack);
            // console.log(stack.length - 1);
            // console.log(stack[stack.length - 1]);
            // console.log('len - 1 ', valids.get(str));

            if (!stack.length || stack[stack.length - 1] !== valids.get(str)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    // console.log('stack', stack);
    // console.log('123');
    return !stack.length;
};

console.log(isValid('()[]{}'));
console.log(isValid('([]{})'));
console.log(isValid('([])'));
console.log(isValid('()'));
console.log(isValid('(}'));

// 只能为 '()[]{}([])'
// 不能是'([)]'
