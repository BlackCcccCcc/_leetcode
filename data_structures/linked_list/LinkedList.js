import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator';
import { NewLineKind } from 'typescript';

// export default class LinkedList {
//   constructor(compareFunction) {
//     this.head = null;
//     this.tail = null;
//     this.compareFunction = new Comparator(compareFunction);
//   }

//   prepend(value) {
//     const newNode = new LinkedListNode(value, this.head);
//     this.head = newNode;

//     if (!this.tail) {
//       this.tail = newNode;
//     }

//     return this;
//   }

//   append(value) {
//     const newNode = new LinkedListNode(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;

//       return this;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;

//     return this;
//   }

//   insert(value, rawIndex) {
//     const index = rawIndex < 0 ? 0 : rawIndex;
//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       let count = 1;
//       let currentNode = this.head;
//       const newNode = new LinkedListNode(value);
//       while (currentNode) {
//         if (count === index) {
//           break;
//         }
//         currentNode = currentNode.next;
//         count += 1;
//       }
//       if (currentNode) {
//         newNode.next = currentNode.next;
//         currentNode.next = newNode;
//       } else {
//         if (this.tail) {
//           this.tail.next = newNode;
//           this.tail = newNode;
//         } else {
//           this.head = newNode;
//           this.tail = newNode;
//         }
//       }
//     }

//     return this;
//   }

//   delete(value) {
//     if (!this.head) {
//       return null;
//     }

//     let deleteNode = null;
//     while (this.head && this.compareFunction.equal(this.head.value, value)) {
//       deleteNode = this.head;
//       this.head = this.head.next;
//     }
//     let currentNode = this.head;

//     if (currentNode !== null) {
//       while (currentNode.next) {
//         if (this.compareFunction.equal(currentNode.next.value, value)) {
//           deleteNode = currentNode.next;
//           currentNode.next = currentNode.next.next;
//         } else {
//           currentNode = currentNode.next;
//         }
//       }
//     }

//     if (this.compareFunction.equal(this.tail.value, value)) {
//       this.tail = currentNode;
//     }

//     return deleteNode;
//   }

//   removeAt(rawIndex) {
//     if (!this.head) {
//       return;
//     }
//     let currentNode = this.head;
//     let deleteNode = null;
//     let count = 0;
//     if (rawIndex === 0) {
//       deleteNode = this.head;
//       this.head = currentNode.next;
//     } else {
//       while (count < rawIndex) {
//         currentNode = currentNode.next;
//         count += 1;
//       }
//       deleteNode = currentNode;
//     }

//     return deleteNode;
//   }

//   find({ value = undefined, callback = undefined }) {
//     if (!this.head) {
//       return null;
//     }
//     let currentNode = this.head;
//     while (currentNode) {
//       if (callback && callback(currentNode.value)) {
//         return currentNode;
//       }

//       if (
//         value !== undefined &&
//         this.compareFunction.equal(currentNode.value, value)
//       ) {
//         return currentNode;
//       }

//       currentNode = currentNode.next;
//     }

//     return null;
//   }

//   deleteTail() {
//     const deleteTail = this.tail;
//     if (this.head === this.tail) {
//       this.head = null;
//       this.tail = null;
//       return deleteTail;
//     }
//     let currentNode = this.head;
//     while (currentNode.next) {
//       if (!currentNode.next.next) {
//         currentNode.next = null;
//       } else {
//         currentNode = currentNode.next;
//       }
//     }
//     this.tail = currentNode;
//     return deleteTail;
//   }

//   deleteHead() {
//     if (!this.head) {
//       return null;
//     }
//     const deleteHead = this.head;
//     if (this.head.next) {
//       this.head = this.head.next;
//     } else {
//       this.head = null;
//       this.tail = null;
//     }
//     return deleteHead;
//   }

//   fromArray(values) {
//     values.forEach((value) => {
//       this.append(value);
//     });
//     return this;
//   }

//   toArray() {
//     const nodes = [];
//     let currentNode = this.head;
//     while (currentNode) {
//       nodes.push(currentNode);
//       currentNode = currentNode.next;
//     }

//     return nodes;
//   }

//   toString(callback) {
//     return this.toArray()
//       .map((node) => node.toString(callback))
//       .toString();
//   }

//   reverse() {
//     let currentNode = this.head;
//     let previousNode = null;
//     let nextNode = null;

//     while (currentNode) {
//       nextNode = currentNode.next;
//       currentNode.next = previousNode;

//       previousNode = currentNode;
//       currentNode = nextNode;
//     }
//     this.tail = this.head;
//     this.head = previousNode;

//     return this;
//   }
// }

export default class LinkedList {
    constructor(compareFunction) {
        this.head = null;
        this.tail = null;
        this.compareFunction = new Comparator(compareFunction);
    }

    prepend(value) {
        let newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    append(value) {
        let newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    insert(value, rowIndex) {
        const index = rowIndex < 0 ? 0 : rowIndex;
        let newNode = new LinkedListNode(value);
        let currentNode = this.head;
        let count = 1;
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            while (currentNode) {
                if (count === index) {
                    break;
                }
                count += 1;
                currentNode = currentNode.next;
            }
            if (currentNode) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            } else {
                if (this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode;
                } else {
                    this.head = newNode;
                    this.tail = newNode;
                }
            }
        }

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }
        let deleteNode = null;
        while (
            this.head &&
            this.compareFunction.equal(this.head.value, value)
        ) {
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (this.compareFunction.equal(currentNode.next.value, value)) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.compareFunction.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }

        return deleteNode;
    }

    deleteTail() {
        const deleteTail = this.tail;
        // { value: xxx  ,  next: null}
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deleteTail;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deleteTail;
    }

    deleteHead() {
        const deleteHead = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deleteHead;
        }
        this.head = this.head.next;

        return deleteHead;
    }

    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            if (
                value !== undefined &&
                this.compareFunction.equal(currentNode.value, value)
            ) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    toArray() {
        let nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    fromArray(array) {
        array.forEach((node) => {
            this.append(node);
        });
        return this;
    }
    toString(callback) {
        return this.toArray()
            .map((node) => {
                return node.toString(callback);
            })
            .toString();
    }

    reverse() {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        let nextNode = null;
        let previousNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        this.head = previousNode;
    }
}
