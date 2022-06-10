var majorityElement = function(nums) {
    const majority = Math.round(nums.length/2)
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] === undefined ? 1 : map[nums[i]]++
    }
    for (let key in map){
        if (map[key] >= majority){
            return key
        }
    }
};

majorityElement([2,2,1,1,1,2,2])