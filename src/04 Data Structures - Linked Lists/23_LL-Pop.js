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
  }

  // pop
  pop() {
    // if empty list
    if (!this.head) return undefined
    let temp = this.head
    let pre = this.head

    // if 2+ items list
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
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(2)
console.log(myLinkedList)
// LinkedList { head: Node { value: 1, next: Node { value: 2, next: null } },
//   tail: Node { value: 2, next: null },
//   length: 2 }

myLinkedList.pop()
console.log(myLinkedList)
// LinkedList { head: Node { value: 1, next: null },
//   tail: Node { value: 1, next: null },
//   length: 1 }
myLinkedList.pop()
console.log(myLinkedList)
// LinkedList { head: null, tail: null, length: 0 }
