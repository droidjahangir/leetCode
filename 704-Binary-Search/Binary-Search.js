var search = function(nums, target) {
    let left = 0
    let right = nums.length-1

    while (left <= right) {
        const mid = Math.floor((left+right)/2)
        const foundVal = nums[mid]
        if (foundVal === target){
            return mid
        } else if (foundVal < target){
            left = mid+1
        } else {
            right = mid-1
        }
    }
    return -1
};