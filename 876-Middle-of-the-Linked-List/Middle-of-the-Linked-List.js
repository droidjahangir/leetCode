/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 1
    let temp = head

    while(temp.next !== null) {
        temp = temp.next
        count++
    }

    let middleNode = count/2
    if(Number.isInteger(middleNode)) middleNode++
    else middleNode = Math.ceil(middleNode)

    let counter = 1

    while(counter !== middleNode) {
        head = head.next
        counter++
    }

    return head

};