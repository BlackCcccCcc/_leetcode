var generate = function (numRows) {
    if (numRows <= 0) {
        return [];
    }
    const ans = [];
    for (let i = 0; i < numRows; i++) {
        console.log('i', i);
        let row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }

        ans.push(row);
    }

    return ans;
};

console.log(generate(3));
