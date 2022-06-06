var minOperations = function(nums) {
    if (nums.length === 1) {
        return 0
    }
    let i = 0;
    let count = 0
    let isTrue = true
    while (isTrue) {
        if (nums[i] >= nums[i+1]){
            nums[i+1] = nums[i+1] + 1
            count++
        }else {
            i++
        }
        if (i === nums.length-1) {
            isTrue = false
        }
    }
};

minOperations([8])