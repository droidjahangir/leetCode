var reverseStr = function(s, k) {
    if (s.length < 2) {
        return s
    }
    const arrString = s.split('')
    console.log(arrString)
    let newStr = []
    const arrLength = arrString.length-1
    for(let i = 0; i <= arrLength ; i++) {
        let subStr = []
        for(let j = 0; j < k; j++) {
            if (i <= arrLength) {
                subStr.push(arrString[i])
                if ( j !== k-1 ){
                    i++
                }
            }
        }

        newStr.push(subStr)
        subStr = []

    }
    console.log(newStr)
    for(let i=0; i <= newStr.length-1; i++) {
        if(newStr[i].length < 2) {
            continue
        }
        if (i % 2 === 0){
            newStr[i].reverse()
        }
    }
    let finalResult = []
    for(let i= 0; i <= newStr.length-1; i++) {
        finalResult.push(newStr[i].join(''))
    }
    return finalResult.join('')

};