var sumOddLengthSubarrays = function(arr) {
    let count = 0

    const slidingWindow = (arr = [], windowSize) => {

    }

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            let windowSum = 0
            let right = 0

            for (let left = 0; left < arr.length-i; left++) {
                console.log('left : ', left)
                if (left < 1){
                    right += i
                    const sliceArr = arr.slice(left, right)
                    windowSum = sliceArr.reduce(
                        (previousValue, currentValue) => previousValue + currentValue,
                        windowSum
                    );
                    right++
                    console.log('windowSum inside : ', windowSum)
                } else {
                    windowSum += arr[right]
                    console.log('windowSum : ', windowSum)
                    right++
                }
            }
            count += windowSum
        }
    }
    return count
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]))