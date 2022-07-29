const binarySearch = function (nums, left, right, target) {
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
}