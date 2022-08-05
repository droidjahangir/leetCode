var preorderTraversal = function(root) {
    if (root === null) return []
    const leftValues = preorderTraversal(root.left)
    const rightValues = preorderTraversal(root.right)
    return [ root.val, ...leftValues, ...rightValues ]
};