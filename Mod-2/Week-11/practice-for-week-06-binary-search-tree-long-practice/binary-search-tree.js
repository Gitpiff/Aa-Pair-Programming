// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null
    }
  
    insert(val, currentNode=this.root) {
      //If there's not root, make the newly created node the root
      if(!this.root) {
       //Make a new node with the passed value as the value
      this.root = new TreeNode(val)
      return 
     } else if(val < currentNode.val) {
      if(!currentNode.left) {
        currentNode.left = new TreeNode(val)
      } else {
        this.insert(val, currentNode.left)
      }
     } else if(val > currentNode.val) {
      if(!currentNode.right) {
        currentNode.right = new TreeNode(val)
      } else {
        this.insert(val, currentNode.right)
      }
    }
    }
  
    search(val) {
      let currentNode = this.root
      //console.log(val, this.root.val)
      if(currentNode === null) return false
  
      while(currentNode) {
        if(val === currentNode.val) return true 
        else if(val < currentNode.val) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
      }
      return false
  
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      //root, left, right
      //Check if there's a current node
      if(currentNode) {
        console.log(currentNode.val)
        //use recursion to call the left and right nodes
        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)
      }
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      //left, root, right
      if(currentNode) {
        //use recursion to call the left and right nodes
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
      } 
  
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      //left, right, root
      if(currentNode) {
        //use recursion to call the left and right nodes
        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)
      }
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
     //queue
     const queue = [this.root]
  
     while(queue.length) {
      //print and remove first node in stack
      let currentNode = queue.shift()
      console.log(currentNode.val)
  
      // if the node has a left node
          // push the left node on the back of the stack
      if(currentNode.left) queue.push(currentNode.left)
      
      // if the node has a right node
          // push the right node on the back of the stack
      if(currentNode.right) queue.push(currentNode.right)
     }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal(curr = this.root) {
      //Stack
      // const stack = [this.root]
      // while(stack.length) {
      //   const curr = stack.pop()
      //   console.log(curr.val)
  
      //   if(curr.left) stack.push(curr.left)
      //   if(curr.right) stack.push(curr.right)
      // }
  
      if(!curr) return
      console.log(curr.val)
      if(curr.right) this.depthFirstTraversal(curr.right)
      if(curr.left) this.depthFirstTraversal(curr.left)
  
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };