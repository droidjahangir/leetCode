var secondHighest = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            if (!arr.includes(parseInt(s[i]))) {
                arr.push(parseInt(s[i]))
            }
        }
    }
    if (arr.length < 2) {
        return -1
    }
    arr.sort()
    return arr[arr.length-2]

};

secondHighest("dfa321afd")