function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// 示例用法
const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // 输出 [11, 12, 22, 25, 64]
