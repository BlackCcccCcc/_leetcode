var inorderTraversal = function (root) {
    const ans = [];
    const inorder = (node) => {
        if (!node) {
            return;
        }
        inorder(node.left);
        ans.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    return ans;
};
