var thirdMax = function(nums) {
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1)
            i--
        }
    }
    console.log(nums)
    if (nums.length > 2) {
        return nums[nums.length-3]
    }else {
        return nums[nums.length-1]
    }
};

console.log(thirdMax([2,2,2,1]))