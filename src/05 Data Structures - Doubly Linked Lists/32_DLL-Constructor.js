// Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

// DoublyLinkedList class
class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1)
console.log(myDoublyLinkedList);
