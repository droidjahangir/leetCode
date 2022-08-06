var findTheWinner = function(n, k) {
    let friendsQueue = []
    for(let i=1; i<=n; i++ ){
        friendsQueue.push(i)
    }
    while(friendsQueue.length>1) {
        let deleteCount = k-1
        while(deleteCount > 0) {
            friendsQueue.push(friendsQueue.shift())
            deleteCount--
        }
        friendsQueue.shift()
    }
    return friendsQueue.shift()
};