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

  // push
  push(value) {
    const newNode = new Node(value)
    // if empty list
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1)
// console.log(myDoublyLinkedList)

myDoublyLinkedList.push(2)
console.log(myDoublyLinkedList)
