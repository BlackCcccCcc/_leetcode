// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len - 1; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // 交换相邻元素
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let y = 0; y < len - 1 - i; y++) {
            // let element =
            if (arr[y] > arr[y + 1]) {
                let element = arr[y];
                arr[y] = arr[y + 1];
                arr[y + 1] = element;
            }
        }
    }
    return arr;
};

// 示例
var arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // 输出 [2, 3, 4, 5, 8]
