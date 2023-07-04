/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function addCol(p1, p2, carry = 0) {
        //Add the latest two numbers
        let sum = carry
        
        if(p1) {
            sum += p1.val
        }

        if(p2) {
            sum += p2.val
        }

        //Split to carry and non-carry
        let nextCarry = (sum > 9)? 1 : 0;
        let newNode = new ListNode(sum % 10)

        if(p1?.next || p2?.next || nextCarry > 0) {
            newNode.next = addCol(p1?.next,p2?.next, nextCarry)
            return newNode
        }
        return newNode
    }
    return addCol(l1,l2)
};