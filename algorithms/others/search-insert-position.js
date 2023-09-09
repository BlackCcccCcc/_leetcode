var searchInsert = function (nums, target) {
    let l = 0,
        r = nums.length - 1,
        ans = nums.length;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        console.log('mid', mid);
        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            ans = mid;
            r = mid - 1;
        }
    }

    return ans;
};
console.log(searchInsert([1, 3, 5, 6, 6, 7, 8, 9, 9], 10));
