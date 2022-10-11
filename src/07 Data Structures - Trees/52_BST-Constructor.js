// Node class
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// BinarySearchTree class
class BST {
  constructor() {
    this.root = null
  }
}

const myBST = new BST()
// BST { root: null }
console.log(myBST)