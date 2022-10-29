class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// const newNode = new Node(4)
// console.log(newNode)
class Linkedlist {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

// // Create new Linkedlist
// let myLinkedList = new Linkedlist(4)
// console.log(myLinkedList)

// //  Push a node onto the linkedlist
// let myLinkedList = new Linkedlist(7)
// myLinkedList.push(4)
// console.log(myLinkedList)

// //  Push and Pop a node onto the linkedlist
// let myLinkedList = new Linkedlist(1)
// myLinkedList.push(2)
// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()
// console.log(myLinkedList)
