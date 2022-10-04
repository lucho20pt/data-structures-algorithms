// Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// LinkedList class
class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}

const myLinkedList = new LinkedList(4)

console.log(myLinkedList)

// LinkedList { head: Node { value: 4, next: null },
//   tail: Node { value: 4, next: null },
//   length: 1 }
