const numsOfMinutes = (n, headId, managers, informTime) => {
    const adjList = managers.map(() => [])

    for (let i = 0; i < n; i++) {
        const manager = managers[i]
        if (manager === -1) continue
        adjList[manager].push(i)
    }

    return dfs(headId, adjList, informTime)
}

const dfs = (currentId, adjList, informTime) => {
    if (adjList[currentId].length === 0) return 0

    let max = 0
    const subordinates = adjList[currentId]

    for (let i = 0; i < subordinates.length; i++) {
        max = Math.max(max, dfs(subordinates[i], adjList, informTime))
    }
    return max + informTime[currentId]
}

numsOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0])
