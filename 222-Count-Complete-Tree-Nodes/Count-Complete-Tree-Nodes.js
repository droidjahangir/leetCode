var countNodes = function(root) {
    if (root === null) return 0

    let count = 0
    const stack = [ root ]

    while (stack.length > 0) {
        const current = stack.pop()
        count++

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return count
};