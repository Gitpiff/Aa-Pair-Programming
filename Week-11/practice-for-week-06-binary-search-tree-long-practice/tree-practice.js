const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  while(rootNode.left) {
    rootNode = rootNode.left
  }

  return rootNode.val
}

function findMaxBST (rootNode) {
  while(rootNode.right) {
    rootNode = rootNode.right
  }

  return rootNode.val
}

function findMinBT (rootNode) {
  const stack = [rootNode]
  let min = rootNode.val

  while(stack.length) {
    let curr = stack.pop()

   if(curr.val < min) min = curr.val
   
   if(curr.left) stack.push(curr.left)
   if(curr.right)stack.push(curr.right)
  }

  return min
}

function findMaxBT (rootNode) {
  const stack = [rootNode]
  let max = rootNode.val

  while(stack.length) {
    let curr = stack.pop()

   if(curr.val > max) max = curr.val
   
   if(curr.left) stack.push(curr.left)
   if(curr.right)stack.push(curr.right)
  }

  return max
}

function getHeight (rootNode) {
  if(!rootNode) return -1

  const queue = [rootNode]
  let height = - 1

  while(queue.length) {
    let count = queue.length
    height ++

    while(count > 0) {
      let curr = queue.shift()

      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
      count --
    }
  }

  return height
}

function countNodes (rootNode) {
 const stack = [rootNode]
 let count = 0

 while(stack.length) {
  let curr = stack.pop()
  count ++

  if(curr.left) stack.push(curr.left)
  if(curr.right) stack.push(curr.right)
 }

 return count
}


function balancedTree (rootNode) {
  const queue = [rootNode]

  while(queue.length) {
    let curr = queue.shift()
    let diff = Math.abs(getHeight(curr.left) - getHeight(curr.right))

    if(diff <= 1) {
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    } else {
      return false
    }
  }

  return true

}


function getParentNode (rootNode, target) {
  if(rootNode.val === target) return null

  const queue = [rootNode]

  while(queue.length) {
    let curr = queue.shift()
    if(curr.left) {
      if(curr.left.val === target) return curr
      queue.push(curr.left)
    }
    if(curr.right) {
      if(curr.right.val === target) return curr
      queue.push(curr.right)
    }
    
  }
}

function inOrderPredecessor (rootNode, target) { 

  let predecessor = null 

  while(rootNode !== null) {
    if(rootNode.val > target) {
      rootNode = rootNode.left
    } else if(rootNode.val < target) {
      predecessor = rootNode
      rootNode = rootNode.right
    } else {
      if(rootNode.left !== null) {
        let temp = rootNode.left
        while(temp.right !== null) {
          temp = temp.right
        }
        predecessor = temp
      }
      break
    }

  }

  return predecessor !== null ? predecessor.val : null
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parent = getParentNode(rootNode, target);

  // Undefined if the target cannot be found
  if (parent === undefined) return undefined;

  // Set target based on parent
  let targetNode;
  let isLeft = false;

  // Case 0: Zero children and no parent:
  if (!parent) {
    targetNode = rootNode;
  } else if (parent.left && parent.left.val === target) {
    targetNode = parent.left;
    isLeft = true;
  } else if (parent.right && parent.right.val === target) {
    targetNode = parent.right;
  } else {
    throw new Error("Algorithm Error: This should never happen");
  }
  if (!parent && !targetNode.left && !targetNode.right) return null;
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeft) parent.left = null;
    else parent.right = null;
  }
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  else if (targetNode.left && targetNode.right) {
    let predecessor = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, predecessor);
    //  Replace target node with the left most child on its right side,
    //  or the right most child on its left side.
    //  Then delete the child that it was replaced with.
    targetNode.val = predecessor;
  }
  // Case 3: One child:
  //   Make the parent point to the child
  else {
    if (targetNode.left) {
      if (isLeft) parent.left = targetNode.left;
      else parent.right = targetNode.left;
    } else {
      if (isLeft) parent.left = targetNode.right;
      else parent.right = targetNode.right;
    }
  }
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}