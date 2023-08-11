class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let index = this.hashMod(key) //Index to add at

    let oldPair = this.data[index] //check if key exists

    while (oldPair && oldPair.key !== key) { //while current node exists & it's key !== key  
      oldPair = oldPair.next  //oldPair checks the next node
    } //loop stops when oldPair === null or oldPair.key === key

    if (oldPair) { //if there's an oldPair
      oldPair.value = value  //reassing value
    } else {
      let newPair = new KeyValuePair(key, value) //make a new key value node
      if (!this.data[index]) { //if spot is empty
        this.data[index] = newPair //populate it with new node
      } else {
        newPair.next = this.data[index] //move oldPair to the .next index
        this.data[index] = newPair //reassing current index to newPair 
      }

      this.count++ //update count of list by one
    }
  }


  read(key) {
    let index = this.hashMod(key) //Index to read

    let current = this.data[index] //Grab current node
    //console.log(current)
    while (current && current.key !== key) { //while current node exists & it's key !== key  
      current = current.next  //current checks the next node
    } //loop stops when current === null or current.key === key
    if (current) { //there's a node that contains the key
      return current.value //return the value of the key
    } else { //if no node has a matching key return undefined
      return undefined
    }

  }


  resize() {
    // hash table property changes should occur first:
    // copy data to preserve old elements
    let oldData = this.data.slice()

    // reassign capacity to double its previous value
    this.capacity = this.capacity * 2

    // re-instantiate data to an array with its new size filled with null
    this.data = new Array(this.capacity).fill(null)

    // reset count (calling insert will re-increment count)
    this.count = 0

    // iterate over old data
    // iterate over each element in old data, looking for nested nodes
    // insert every node back into our new data buckets

    for (let i = 0; i < oldData.length; i++) {
      let current = oldData[i]

      while (current) {
        this.insert(current.key, current.value)
        current = current.next
      }
    }
    return this.data


  }


  delete(key) {
    let index = this.hashMod(key) //Index to add at

    let oldPair = this.data[index] //check if key exists

    while (oldPair && oldPair.key !== key) { // this helps us find the pair that has the key

      oldPair = oldPair.next
    }

    if (oldPair) { //if there's an oldPair that matches the key
      let current = this.data[index];
      oldPair = current.next
      console.log(oldPair);
    } else {
      throw Error("Key not found")
    }

    this.count-- //update count of list by one
  }
}


module.exports = HashTable;
