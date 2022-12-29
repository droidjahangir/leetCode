/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    const rootValue = root.val
    const childValue = root.left.val + root.right.val
    if(rootValue === childValue) return true
    return false
};


// input testcase ===> [10,4,6]