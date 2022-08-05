var maxDepth = function(s) {
    if(s.length === 0) return 0

    const stack = []
    const validStack = []
    let count = 0
    let max = 0

    for(let i=0; i<s.length; i++){
        if (s[i] === '(' || s[i]===')') stack.push(s[i])
    }

    for(const item of stack){
        if(item === '(') {
            count++
            max = Math.max(count, max)
            validStack.push(item)
        } else {
            count--
            validStack.pop()
        }
    }

    return max
};