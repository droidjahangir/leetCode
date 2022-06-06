var longestCommonPrefix = function(strs) {
    if ( strs.length === 0 ) return ''
    let commonPrefix = []
    for (let i = 0; i < strs[0].length; i++) {
        const position = strs[0][i]
        let isExist = true

        for ( let j = 0; j < strs.length; j++){
            if(strs[j][i] === position) {
                // pass
            } else {
                isExist = false
                break;
            }
        }
        if (isExist) {
            commonPrefix.push(position)
        } else {
            break;
        }

    }
    return commonPrefix.join('')
};

longestCommonPrefix(["flower","flow","flight"])