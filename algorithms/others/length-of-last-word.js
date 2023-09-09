const lengthOfLastWord = function (s) {
    let lens = s.length - 1;
    console.log(lens);
    // 跳过字符串尾部空格
    while (s[lens] === ' ') {
        console.log('lens', lens);
        lens -= 1;
    }
    let wordLength = 0;
    // for (; lens >= 0; lens--) {
    //     console.log('lens', lens);
    //     console.log(s[lens]);

    //     if (s[lens] == ' ') {
    //         break;
    //     } else {
    //         wordLength++;
    //     }
    // }
    while (lens >= 0 && s[lens] !== ' ') {
        wordLength += 1;
        lens -= 1;
    }

    return wordLength;
};

console.log(lengthOfLastWord('Hello World'));
