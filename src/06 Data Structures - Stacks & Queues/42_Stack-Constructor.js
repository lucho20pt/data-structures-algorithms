// Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Stack class
class Stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }
}

const myStack = new Stack(0)
// Stack { top: Node { value: 0, next: null }, length: 1 }
console.log(myStack)
