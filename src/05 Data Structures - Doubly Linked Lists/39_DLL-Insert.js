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

  // pop
  pop() {
    // if empty list
    if (this.length === 0) return undefined

    const temp = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      temp.prev = null
    }

    this.length--

    return temp
  }

  // unshift
  unshift(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++

    return this
  }

  // shift
  shift() {
    if (this.length === 0) return undefined

    const temp = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      temp.next = null
    }

    this.length--

    return temp
  }

  // get
  get(index) {
    if (index < 0 || index >= this.length) return undefined

    let temp = this.head
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    } else {
      temp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev
      }
    }

    return temp
  }

  // set
  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  // insert
  insert(index, value) {
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push(value)
    if (index < 0 || index > this.length) return false

    const newNode = new Node(value)
    const before = this.get(index - 1)
    const after = before.next

    before.next = newNode
    newNode.prev = before
    newNode.next = after
    after.prev = newNode

    this.length++
    return true
  }
}

const myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1)
// myDoublyLinkedList.push(2)

// myDoublyLinkedList.pop()

// myDoublyLinkedList.unshift(555)

// myDoublyLinkedList.shift()

// console.log(myDoublyLinkedList.get(3))

// console.log(myDoublyLinkedList.set(1, 999))

myDoublyLinkedList.insert(1, 888)

console.log(myDoublyLinkedList.tail)
