const lengthOfLongestSubString = function (s) {
    if (s.length <=1) return s.length

    const seen = new Map()
    let left = 0
    let longest = 0

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right]
        const previouslySeenChar = seen.get(currentChar)
        console.log(previouslySeenChar)

        if (previouslySeenChar >= left) {
            left = previouslySeenChar + 1
        }
        seen.set(currentChar, right)
        console.log(seen)
        longest = Math.max(longest, right-left+1)
    }
    return longest
}
// problem no: 03
console.log(lengthOfLongestSubString("abcabcbb"))