// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivot = arr[Math.floor(arr.length / 2)];
//     const left = [];
//     const right = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === Math.floor(arr.length / 2)) {
//             continue;
//         }

//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// const arr = [5, 3, 8, 4, 2, 10, 24, 100, 1, 2, 6, 7, 5];
// const sortedArr = quickSort(arr);
// console.log(sortedArr);
import Sort from './Sort';

export default class QuickSort extends Sort {
    sort(originalArray) {
        // prevent modification
        const arr = [...originalArray];
        if (arr.length < 1) {
            return arr;
        }

        const leftArr = [];
        const rightArr = [];

        const pivotElement = arr.shift();
        const centerArr = [pivotElement];

        while (arr.length) {
            const currentElement = arr.shift();
            this.callbacks.visitingCallback(currentElement);

            if (this.comparator.equal(currentElement, pivotElement)) {
                centerArr.push(currentElement);
            } else if (this.comparator.lessThan(currentElement, pivotElement)) {
                leftArr.push(currentElement);
            } else {
                rightArr.push(currentElement);
            }
        }

        const sortedLeftArr = this.sort(leftArr);
        const sortRightArr = this.sort(rightArr);

        return sortedLeftArr.concat(centerArr, sortRightArr);
    }
}
