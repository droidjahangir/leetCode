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
var isEvenOddTree = function(root) {
    if (!root) return []
    const result = []
    const queue = [root]

    while (queue.length){
        let length = queue.length,
            count = 0;
        const currentValues = []

        while (count < length){
            const currentNode = queue.shift()
            currentValues.push(currentNode.val)

            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
            count++
        }
        result.push(currentValues)
    }

    console.log({ result })

    let isEvenOdd = true
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result[i].length; j++){
            console.log({ i, j })
            console.log('result[i][j] ==> ', result[i][j])
            console.log('reminder : ', i%2)
            if(i%2 === 0){
                if( result[i][j+1] && (result[i][j]%2===0) && (result[i][j+1]%2===0) && !(result[i][j] < result[i][j+1]) ) isEvenOdd = false
            } else {
                if( result[i][j+1] && (result[i][j]%2!==0) && (result[i][j+1]%2!==0) && !(result[i][j] > result[i][j+1]) ) isEvenOdd = false
            }
        }
    }

    return isEvenOdd
};