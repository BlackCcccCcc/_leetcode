var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 7));
