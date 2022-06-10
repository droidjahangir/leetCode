function firstRecurringCharacter(input = []) {
    let map = {}
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined ) {
            // return the value
            return input[i]
        }else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined
}

const result =  firstRecurringCharacter([2,5,5,2,3,5,1,2,4])
console.log('result : ', result)