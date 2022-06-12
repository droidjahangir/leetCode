var getMaxSumSubArrayOfSizeK = function (arr = [], k){
    let windowSum = 0, maxSum = 0;
    for (let i = 0; i < k; i++){
        windowSum += arr[i]
    }
    for (let end = k; end < arr.length; end++) {
        windowSum += arr[end] - arr[end-k]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum
}

getMaxSumSubArrayOfSizeK([9,3,5,1,7,8,2], 3)