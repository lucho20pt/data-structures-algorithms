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

  // push
  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
    return this
  }
}

const myStack = new Stack(0)
// Stack { top: Node { value: 0, next: null }, length: 1 }
// console.log(myStack)

myStack.push(1)
myStack.push(2)
console.log(myStack)
