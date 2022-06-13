var threeSum = function(nums) {
    const clone = [...nums];
    nums.sort((a, b) => a - b);
    for (let pointer = 0; pointer < clone.length-1; pointer++) {
        let low = pointer+1, high = nums.length - 1;
        while (low < high) {
            if (nums[pointer] + nums[low] + nums[high] < 0) {
                low++;
            } else if (nums[pointer] + nums[low] + nums[high] > 0) {
                high--;
            } else {
                if (nums[low] === nums[high]) {
                    return [clone.indexOf(nums[pointer]),clone.indexOf(nums[low]), clone.indexOf(nums[high], clone.indexOf(nums[low]) + 1)];
                }
                return [clone.indexOf(nums[pointer]),clone.indexOf(nums[low]), clone.indexOf(nums[high])];
            }
        }
    }
};

console.log(threeSum([-1,0,1,2,-1,-4]))
