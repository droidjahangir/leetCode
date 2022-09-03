const canFinish = (numCourses, prerequisites) => {
    const inDegree = new Array(numCourses).fill(0)
    const adjList = new Array(numCourses).fill(0).map(() => [])

    for (let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i]
        inDegree[pair[0]]++
        adjList[pair[1]].push(pair[0])
    }

    const stack = []

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i)
        }
    }

    let count = 0

    while (stack.length) {
        const current = stack.pop()
        count++

        const adjacent = adjList[current]
        for (let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i]
            inDegree[next]--
            if (inDegree[next] === 0) {
                stack.push(next)
            }
        }
    }

    return count === numCourses
}