/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a - b)
    const len = nums.length
    let result = []

    for(let i = 0; i < len-3; i++) {
        for ( let j = i+1; j < len-2; j++) {
            let left = j+1
            let right = len-1
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum===target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    while (nums[left] === nums[left+1]) left++
                    while (nums[right] === nums[right-1]) right--
                }

                if (sum > target) right--
                else left++
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    }
    return result
};

console.log(fourSum([1,0,-1,0,-2,2], 0))