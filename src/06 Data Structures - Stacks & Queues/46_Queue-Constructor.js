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
}

const myQueue = new Queue(1)
// Queue { first: Node { value: 1, next: null },
//   last: Node { value: 1, next: null },
//   length: 1 }
console.log(myQueue)
