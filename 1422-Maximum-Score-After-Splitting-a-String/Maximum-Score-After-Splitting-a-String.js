var maxScore = function(s) {
    let maximum = 0
    const arrLength = s.length

    for( let i=1; i<arrLength; i++ ) {
        let score = 0
        const arr1 = s.slice(0, i)
        for (let j=0; j<arr1.length; j++){
            if(arr1[j] == 0) score++
        }
        const arr2 = s.slice(i, arrLength)
        for( let k=0; k<arr2.length; k++){
            if(arr2[k] == 1) score++
        }
        if (score>maximum) maximum = score
    }
    return maximum
};