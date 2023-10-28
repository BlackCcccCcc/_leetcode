/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) {
        return x;
    }
    let left = 1;
    let right = Math.floor(x / 2);
    let mid = 0;
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        const result = mid * mid;
        if (result === x) {
            return mid;
        }
        if (result < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};
