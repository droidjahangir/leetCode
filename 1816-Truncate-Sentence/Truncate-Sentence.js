var truncateSentence = function(s, k) {
    const arrString = s.split(' ')
    const modifiedArr = arrString.slice(k-1)
    return modifiedArr.join(' ')
};

truncateSentence("What is the solution to this problem", 4)