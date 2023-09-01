// BF
const findMedianSortedArrays = (nums1, nums2) => {
    const arr = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i++]);
        } else {
            arr.push(nums2[j++]);
        }
    }

    while (i < nums1.length) {
        arr.push(nums1[i++]);
    }
    while (j < nums2.length) {
        arr.push(nums2[j++]);
    }

    const len = arr.length;
    console.log('arr', arr);
    return len % 2 === 1
        ? arr[Math.floor(len / 2)]
        : (arr[len / 2] + arr[len / 2 - 1]) / 2;
};

const nums1 = [1, 2, 3, 4];
const nums2 = [2, 8];

console.log(findMedianSortedArrays(nums1, nums2));
