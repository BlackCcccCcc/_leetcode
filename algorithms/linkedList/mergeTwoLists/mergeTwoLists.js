function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
const mergeTwoLists = (l1, l2) => {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

const l1 = new ListNode(1, 2);
l1.next = new ListNode(2, 3);
l1.next.next;
const l2 = new ListNode(2, 3);
l2.next = new ListNode(3);

console.log('l1', l1);
console.log('l2', l2);
const ans = mergeTwoLists(l1, l2);
console.log(ans);
console.log(ans.next);
