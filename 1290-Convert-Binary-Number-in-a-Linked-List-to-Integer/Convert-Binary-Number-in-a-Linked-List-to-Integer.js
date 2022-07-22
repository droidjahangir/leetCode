/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let val = []
    let temp = head

    while(temp !== null) {
        val.push(temp.val)
        temp = temp.next
    }

    const convertedValue = Number.parseInt(val.join(''), 2)

    return convertedValue

};