var rob = function (root) {
    const dp = (root) => {
        if (!root) {
            return [0, 0];
        }
        const left = dp(root.left);
        const right = dp(root.right);
        const robThis = root.val + left[1] + right[1];
        const notRobThis = Math.max(
            left[0] + right[0],
            left[0] + right[1],
            left[1] + right[0],
            left[1] + right[1]
        );

        return [robThis, notRobThis];
    };

    return Math.max(...dp(root));
};
