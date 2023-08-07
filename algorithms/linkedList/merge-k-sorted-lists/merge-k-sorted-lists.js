/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function (lists) {
    // at first time the accumulator = []
    // the currentValue = lists[0]
    return lists
        .reduce((accumulator, currentValue) => {
            while (currentValue) {
                accumulator.push(currentValue);
                currentValue = currentValue.next; // undefined
            }
            return accumulator;
        }, [])
        .sort((a, b) => a.val - b.val)
        .reduceRight((p, n) => ((n.next = p), (p = n), p), null);
};

const node1 = new ListNode(1, 2);
node1.next = new ListNode(2, 4);
node1.next.next = new ListNode(4, 5);

const node2 = new ListNode(1, 3);
node2.next = new ListNode(3, 4);
node2.next.next = new ListNode(4, 5);

const node3 = new ListNode(1, 2);
node3.next = new ListNode(2, 6);
node3.next.next = new ListNode(6, 7);
console.log('node1', node1);
console.log('node2', node2);
console.log('node3', node3);

const lists = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];
console.log(mergeKLists(lists));
