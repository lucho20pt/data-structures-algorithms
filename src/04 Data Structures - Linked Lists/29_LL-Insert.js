// Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// LinkedList class
class LinkedList {
  // constructor
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
      this.tail = newNode
    }
    this.length++
    return this
  }

  // pop
  pop() {
    // if empty list
    if (!this.head) return undefined

    // if 2+ items list
    let temp = this.head
    let pre = this.head

    while (temp.next) {
      pre = temp
      temp = temp.next
    }

    this.tail = pre
    this.tail.next = null
    this.length--

    // if 1 item
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  // unshift
  unshift(value) {
    const newNode = new Node(value)
    // if empty list
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // shift
  shift() {
    // if empty list
    if (!this.head) return undefined

    // if 2+ items list
    let temp = this.head

    this.head = this.head.next
    temp.next = null

    this.length--
    // if 1 item
    if (this.length === 0) {
      // this.head = null
      this.tail = null
    }

    return temp
  }

  // get
  get(index) {
    // if empty list
    if (index < 0 || index >= this.length) return undefined

    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
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
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)
    if (index < 0 || index > this.length) return false

    const newNode = new Node(value)
    const temp = this.get(index - 1)

    newNode.next = temp.next
    temp.next = newNode

    this.length++
    return true
  }
}

const myLinkedList = new LinkedList(0)
myLinkedList.push(1)
// myLinkedList.push(2)
// console.log(myLinkedList)

// myLinkedList.pop()
// console.log(myLinkedList)

// myLinkedList.unshift(999)
// console.log(myLinkedList)

// myLinkedList.shift()
// console.log(myLinkedList)

// console.log(myLinkedList.get(2))

// console.log(myLinkedList.set(2, 999))

myLinkedList.insert(1, 555)
console.log(myLinkedList)
