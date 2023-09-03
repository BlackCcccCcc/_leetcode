const removeDuplicates = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    let slow = 0,
        fast = 1;
    while (fast < nums.length) {
        if (nums[fast] != nums[slow]) {
            slow = slow + 1;
            nums[slow] = nums[fast];
        }
        fast = fast + 1;
    }
    return slow + 1;
};
let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k);
console.log(nums);
