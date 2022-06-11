var maxCoins = function(piles) {
    piles.sort((a,b) => b - a)
    let count = 0
    let arr = []
    for (let i = 0, j = piles.length-1; i < piles.length/3; i++, j -= 2) {
        arr.push(piles[j])
        arr.push(piles[j-1])
        arr.push(piles[i])
        count += arr[1]
        arr = []
    }
    return count
};

console.log(maxCoins([9,5,6,8,10,1,4,10,7]))