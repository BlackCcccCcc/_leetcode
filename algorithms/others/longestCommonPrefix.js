const longestCommonPrefix = (strings) => {
    if (strings === null || strings.length < 0) {
        return '';
    }

    let prevs = strings[0];
    const lens = strings.length;
    console.log(lens);
    for (let i = 1; i < lens; i++) {
        console.log('i', i);
        let j = 0;
        for (; j < prevs.length && j < strings[i].length; j++) {
            console.log('j', j, 'i', i);
            console.log(prevs.charAt(j));
            console.log(strings[i].charAt(j));
            if (prevs.charAt(j) !== strings[i].charAt(j)) {
                break;
            }
        }
        prevs = prevs.substring(0, j);
        console.log('prevs', prevs);

        if (prevs === '') {
            return '';
        }
    }
    console.log('prevs', prevs);
    return prevs;
};

const strings = ['flag', 'flog', 'flower'];
console.log('ans', longestCommonPrefix(strings));
