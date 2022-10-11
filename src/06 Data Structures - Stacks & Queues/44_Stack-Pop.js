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

  // pop
  pop() {
    if (this.length === 0) return undefined

    const temp = this.top
    this.top = this.top.next
    temp.next = null

    this.length--
    return temp
  }
}

const myStack = new Stack(0)
myStack.push(1)
myStack.push(2)

myStack.pop()

console.log(myStack)
