var nextGreatestLetter = function(letters, target) {
    let low = 0
    let high = letters.length-1

    if (target >= letters[high] || target < letters[0]) return letters[0]

    while (low <= high) {
        const mid = Math.floor((low+high)/2)

        if ( target >= letters[mid] ) low = mid+1
        if ( target < letters[mid] ) high = mid-1
    }

    return letters[low]
};