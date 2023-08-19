// 交换数组中两个元素的位置
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 调整堆，使其满足堆的性质
function heapify(arr, n, i) {
    let largest = i; // 初始化最大元素为根节点
    const left = 2 * i + 1; // 左子节点的索引
    const right = 2 * i + 2; // 右子节点的索引

    // 如果左子节点大于根节点，则更新最大元素的索引
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // 如果右子节点大于根节点，则更新最大元素的索引
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // 如果最大元素的索引不是根节点的索引，则交换它们的位置，并递归调整堆
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}

// 堆排序函数
function heapSort(arr) {
    const n = arr.length;

    // 构建最大堆，从最后一个非叶子节点开始调整堆
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // 依次取出堆顶元素（最大值），并调整堆
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i); // 将堆顶元素与当前未排序部分的最后一个元素交换位置
        heapify(arr, i, 0); // 调整堆
    }

    return arr;
}

// 示例用法
const arr = [4, 10, 3, 5, 1];
const sortedArr = heapSort(arr);
console.log(sortedArr); // 输出 [1, 3, 4, 5, 10]
