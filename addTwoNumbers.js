const addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let result = null;
  let carry = 0;

  while (node1 !== null || node2 !== null || carry !== 0) {
    let sum = (node1?.val ?? 0) + (node2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    let newNode = new ListNode(sum % 10);

    if (result === null) {
      result = newNode;
    } else {
      let temp = result;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }

    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }

  return result;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1] 
*/

const listnode1 = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0))))))
);
const listnode2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

let result = addTwoNumbers(listnode1, listnode2);

while (result != null) {
  console.log(result.val);
  result = result.next;
}
