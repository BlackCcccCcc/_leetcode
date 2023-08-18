function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    console.log('left', left);
    console.log('right', right);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
        console.log('i', i);
        console.log('j', j);
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

// 示例用法
const array = [5, 3, 8, 4, 2];
const sortedArray = mergeSort(array);
console.log(sortedArray); // 输出: [2, 3, 4, 5, 8]
