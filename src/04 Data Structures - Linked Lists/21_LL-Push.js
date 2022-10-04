// Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// LinkedList class
class LinkedList {
  // constructor
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  // push
  push(value) {
    const newNode = new Node(value)
    // if LinkedList is empty
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
}

const myLinkedList = new LinkedList(7)
console.log(myLinkedList)
// LinkedList { head: Node { value: 7, next: null },
//   tail: Node { value: 7, next: null },
//   length: 1 }

myLinkedList.push(4)
console.log(myLinkedList)
// LinkedList { head: Node { value: 7, next: Node { value: 4, next: null } },
//   tail: Node { value: 4, next: null },
//   length: 2 }
