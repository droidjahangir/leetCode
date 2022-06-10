var countWords = function(words1, words2) {
    let map = {}
    let count = 0
    for (let i =0; i < words1.length; i++) {
        map[words1[i]] = map[words1[i]] === undefined ? [i] : [...map[words1[i]], i]
    }
    for (let key in map) {
        if (map[key].length > 1) {
            delete map[key]
        }
    }
    let map2 = {}
    for (let j = 0; j < words2.length; j++) {
        map2[words2[j]] = map2[words2[j]] === undefined ? [j] : [...map2[words2[j]], j]

    }
    for (let key in map2){
        if (map2[key].length > 1){
            delete map2[key]
        }
    }
    for (const key in map){
        if (map2.hasOwnProperty(key)){
            count++
        }
    }
    return count
}

const result = countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])

console.log(result)
