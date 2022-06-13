const towPointer = (nums = [], target = 0) => {
    const clone = [...nums];
    nums.sort((a, b) => a - b);
    let low = 0, high = nums.length - 1;
    while (low < high) {
        if (nums[low] + nums[high] < target) {
            low++;
        } else if (nums[low] + nums[high] > target) {
            high--;
        } else {
            if (nums[low] === nums[high]) {
                return [clone.indexOf(nums[low]), clone.indexOf(nums[high], clone.indexOf(nums[low]) + 1)];
            }
            return [clone.indexOf(nums[low]), clone.indexOf(nums[high])];
        }
    }
}

console.log(towPointer([3,2,4], 6))