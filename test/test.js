const test = (needle) => {
    const lps = new Array(needle.length).fill(0)
    console.log({ lps })

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
        console.log({ lps })
    }

    console.log({ lps })
}

test('abcabcabcabcabc')