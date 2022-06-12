var maxSlidingWindow = function(nums, k) {
    let windowMax = 0, max = [];
    if (nums.length < k){
        return nums
    }
    const a = nums.slice(0, k)
    windowMax = Math.max(...a)
    max.push(windowMax)

    for (let end = k; end < nums.length; end++) {
        let slide = nums.slice(end-k+1, end+1)
        let slidingMax = Math.max(...slide)
        max.push(slidingMax)
    }
    return max
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))