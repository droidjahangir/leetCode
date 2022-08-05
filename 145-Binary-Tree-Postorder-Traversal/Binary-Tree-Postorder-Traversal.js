var postorderTraversal = function(root) {
    if (root === null) return []
    const leftValues = postorderTraversal(root.left)
    const rightValues = postorderTraversal(root.right)
    return [ ...leftValues, ...rightValues, root.val ]
};