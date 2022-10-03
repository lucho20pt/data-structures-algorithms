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
    this.next = null
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}

const newLinkedList = new LinkedList(4)

console.log(newLinkedList)

// LinkedList { next: null,
//     head: Node { value: 4, next: null },
//     tail: Node { value: 4, next: null },
//     length: 1 }
