var removeElement = function(nums, val) {
    let begin = 0
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] !== val ){
            nums[begin] = nums[i]
            begin++
        }
    }
    return begin
};

removeElement([0,1,2,2,3,0,4,2], 2)