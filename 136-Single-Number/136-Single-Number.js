var singleNumber = function(nums) {
    const element = {}
    for (let i = 0; i < nums.length; i++) {
        element[nums[i]] = (element[nums[i]] || 0 ) + 1
    }
    for (const [key, value] of Object.entries(element)) {
        if (value === 1) {
            return key
        }
    }
};

singleNumber([4,1,2,1,2])