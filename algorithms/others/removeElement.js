const removeElemnt = (nums, val) => {
    const len = nums.length;
    let left = 0;
    for (let right = 0; right < len; right++) {
        console.log('left', nums[left]);
        console.log('right', nums[right]);
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
    // let left = 0,
    //     right = nums.length;
    // while (left < right) {
    //     if (nums[left] === val) {
    //         nums[left] = nums[right - 1];
    //         right--;
    //     } else {
    //         left++;
    //     }
    // }
    // return left;
};

const nums = [0, 1, 3, 2, 4, 5, 6, 2, 4];
const val = 2;
console.log(removeElemnt(nums, val));
console.log(nums);
