var isPalindrome = function (s) {
    s = s
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/\s/g, '')
        .toLowerCase();
    return s === [...s].reverse().join('');
};
