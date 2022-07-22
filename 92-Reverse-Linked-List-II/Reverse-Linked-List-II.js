const reverseBetween = function(head, left, right){
    let currentPos = 1, currentNode = head, start = head

    while (currentPos < left) {
        start = currentNode
        currentNode = currentNode.next
        currentPos++
    }

    let newList = null, tail = currentNode
    while (currentPos >= left && currentPos <= right){
        const next = currentNode.next
        currentNode.next = newList
        newList = currentNode
        currentNode = next
        currentPos++
    }

    start.next = newList
    tail.next = currentNode

    if (left > 1) {
        return head
    } else {
        return newList
    }
}

reverseBetween([1,2,3,4,5], 2, 4)