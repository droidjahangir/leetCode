var firstUniqChar = function(s) {
    const split = s.split('')
    let map = {}
    for (let i = 0; i < split.length; i++) {
        map[split[i]] = map[split[i]] === undefined ? [i] : [...map[split[i]], i]
    }
    for (let element in map){
        if (map[element].length === 1){
            return map[element][0]
        }
    }

    return -1
};

const isFound =  firstUniqChar("loveleetcode")
console.log('isFound : ', isFound)