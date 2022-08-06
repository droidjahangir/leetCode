// optimum solution
// function binarySearch(lists, sorted, low, high, target){
//     if(low > high) return;
//
//     const mid = low + Math.floor((high - low) / 2);
//
//     if(sorted[mid] === target){
//         lists.push(mid);
//     }
//
//     binarySearch(lists, sorted, low, mid-1, target);
//     binarySearch(lists, sorted, mid+1, high, target);
// }
//
// var targetIndices = function(nums, target) {
//     let result = [];
//     nums.sort((a,b)=>a-b);
//     if(!nums.includes(target)) return [];
//
//     binarySearch(result, nums, 0 , nums.length-1, target);
//     return result.sort((a,b) => a-b);
// }

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


var targetIndices = function(nums, target) {
    nums.sort((a, b) => a-b)
    console.log(nums)

    if (nums.length === 0) return []
    const firstPos = binarySearch(nums, 0, nums.length-1, target)

    if (firstPos === -1) return []
    let startPos = firstPos,
        endPos = firstPos,
        temp1, temp2;

    while (startPos !== -1){
        temp1 = startPos
        startPos = binarySearch(nums, 0, startPos-1, target)
    }
    console.log({ startPos, temp1 })
    startPos = temp1
    while (endPos !== -1){
        temp2 = endPos
        endPos = binarySearch(nums, endPos+1, nums.length-1, target)
    }
    console.log({ endPos, temp2 })
    endPos = temp2

    if(startPos === endPos) return [startPos]
    else {
        const result = []
        for(let i = startPos; i<=endPos; i++) {
            result.push(i)
        }
        return result
    }

};
