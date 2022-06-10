var digitCount = function(num) {
    console.log(num)
    let map = {}
    for (let i = 0; i < num.length; i++) {
        map[i] = parseInt(num[i])
    }
    console.log(map)
    let count = {}
    for (let i = 0; i < num.length; i++) {
        count[num[i]] = count[num[i]] === undefined ? 1 : count[num[i]] + 1
    }
    console.log(count)

    for (const element in count){
        if (count[element] !== map[element]) {
            return false
        }
    }
    return true


};

console.log(digitCount("1210"))