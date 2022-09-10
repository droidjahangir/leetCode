var strStr = function (haystack, needle) {
    if (needle === '') return 0

    // LPS --> Longest Prefix Suffix
    const lps = new Array(needle.length).fill(0)

    let prevLPS = 0,
        i = 1

    // creating Longest Prefix Suffix array
    while (i < needle.length) {
        if (needle[i] === needle[prevLPS]) {
            lps[i] = prevLPS + 1
            prevLPS++
            i++
        } else if (prevLPS === 0) {
            lps[i] = 0
            i++
        } else {
            prevLPS = lps[prevLPS - 1]
        }
    }

    i = 0
    let j = 0
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++
            j++
        } else if (j === 0) i++
        else j = lps[j - 1]

        if (j === needle.length) return i - needle.length
    }

    return -1
}

