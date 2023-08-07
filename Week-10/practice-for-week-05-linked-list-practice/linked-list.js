class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = undefined
    this.length = 0
  }

  addToHead(val) {
   const newNode =  new LinkedListNode(val)
    // if(this.head) {
    //   newNode.next = this.head
    // } else {
    //   this.tail = newNode
    // }
    newNode.next = this.head
    this.head = newNode
    this.length ++
  }

  addToTail(val) {
    const newNode =  new LinkedListNode(val)
    if(this.tail) {
      newNode.prev = this.tail
    } else {
      this.head = newNode
    }
    this.tail = newNode
    this.length ++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;