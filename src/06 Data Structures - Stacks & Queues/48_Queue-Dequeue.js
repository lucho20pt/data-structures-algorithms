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

  // dequeue
  dequeue() {
    if (this.length === 0) return undefined

    const temp = this.first

    if (this.length === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }

    this.length--
    return temp
  }
}

const myQueue = new Queue(0)

myQueue.enqueue(1)
myQueue.enqueue(2)

myQueue.dequeue()

console.log(myQueue)
