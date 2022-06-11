var firstMissingPositive = function(nums) {
    let map = {}
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            nums.shift()
            i--
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = i
        }
    }
    for (let i = 0; i <= nums.length; i++) {
        if (map[i+1] === undefined){
            return i+1
        }
    }
};

console.log(firstMissingPositive([3,-7,4,-1,2,1,-3]))