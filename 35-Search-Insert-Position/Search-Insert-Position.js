var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length-1

    let insertPos = -1

    while (left <= right) {
        const mid = Math.floor((left+right)/2)
        const foundVal = nums[mid]
        if (foundVal === target){
            insertPos = mid
            break
        } else if (foundVal < target){
            left = mid+1

        } else {
            right = mid-1
        }

        if(left >= right){
            insertPos = left
        }
    }
    return insertPos
};