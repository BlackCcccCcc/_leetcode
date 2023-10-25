var isPalindrome = function (s) {
    // s = s
    //     .replace(/[^a-zA-Z0-9]/g, '')
    //     .replace(/\s/g, '')
    //     .toLowerCase();
    // return s === [...s].reverse().join('');

    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    let [left, right] = [0, s.length - 1];
    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }

    return true;
};
