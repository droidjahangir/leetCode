var plusOne = function(digits) {
    const strDigit = digits.join('')
    let intDigit = BigInt(strDigit)
    intDigit++
    const toStr = intDigit.toString()
    const restoreInt = toStr.split('')
    return restoreInt
};

plusOne([4,3,2,1])