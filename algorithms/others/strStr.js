// BF
const strStr = (haystack, needle) => {
    const n = haystack.length;
    const m = needle.length;
    // 不能超过haystack的长度
    for (let i = 0; i + m < n; i++) {
        let flag = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            return i;
        }
    }

    return -1;
};
let haystack = 'ssadbutsad';
let needle = 'sad';
console.log(strStr(haystack, needle));
