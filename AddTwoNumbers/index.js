// Question => https://leetcode.com/problems/add-two-numbers/

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

// Solution
var addTwoNumbers = function (l1, l2) {
  let a = 0;
  let res = new ListNode();
  while (l1 || l2) {
    let val = (l1?.val || 0) + (l2?.val || 0) + a;
    pushToEnd(res, val % 10);

    if (val >= 10) {
      a = 1;
    } else {
      a = 0;
    }

    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (a > 0) {
    pushToEnd(res, 1);
  }

  return res.next;
};

function pushToEnd(head, val) {
  const newNode = new ListNode(val);
  if (!head) {
    return newNode;
  }
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}
