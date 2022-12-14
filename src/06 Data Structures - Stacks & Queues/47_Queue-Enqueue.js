// Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Queue class
class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }

  // enqueue
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }
}

const myQueue = new Queue(1)

myQueue.enqueue(2)

console.log(myQueue)
