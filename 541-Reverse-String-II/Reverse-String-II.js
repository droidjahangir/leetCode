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

/*
--- Most convenient solution ---
var reverseStr = function(s, k) {
    if (s.length === 1) return s;
    else if (s.length < k)
        return s.split('').reverse().join('');
    else if (s.length <= 2 * k){
        let rev = s.slice(0, k).split('').reverse().join('');
        return rev + s.slice(k);
    }


    for (let i = 0; i < s.length;){
        let str = s.slice(i, 2 * k + i);
        if (str.length <= k) {
            str = str.split('').reverse().join('');
        }
        else {
            let start = s.slice(i, k + i).split('').reverse().join('');
            str = start + str.slice(k);
        }
        s = s.slice(0, i) + str + s.slice(i + 2 * k);

        i += 2 * k;
    }
    return s;
}

*/