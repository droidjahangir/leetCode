var numberOfSteps = function(num) {
    let count = 0
    let number = num
    if ( number === 0 ) {
        return count
    }

    for ( let i = 0; number !== 0; i++ ) {

        if (number % 2 === 0) {
            number = number / 2
            count++
        } else {
            number--
            count++
        }
    }
    return count
};