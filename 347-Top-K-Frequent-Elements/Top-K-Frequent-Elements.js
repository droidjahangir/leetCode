var topKFrequent = function(nums, k) {
    const numMap = nums.reduce((acc, cur) => {acc[cur] = (acc[cur] || 0)+1; return acc}, {})

    const sortedArr = Object.keys(numMap).sort((a, b) => numMap[b] - numMap[a]);

    const mostKFreq = []
    for(let i = 0; i < k; i++) {
        mostKFreq.push(parseInt(sortedArr[i]))
    }
    return mostKFreq
};