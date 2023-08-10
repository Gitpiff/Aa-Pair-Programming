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

    while(oldPair && oldPair.key !== key) { //while current node exists & it's key !== key  
      oldPair = oldPair.next  //oldPair checks the next node
    } //loop stops when oldPair === null or oldPair.key === key

    if(oldPair){ //if there's an oldPair
      oldPair.value = value  //reassing value
    } else {
      let newPair = new KeyValuePair(key, value) //make a new key value node
      if(!this.data[index]) { //if spot is empty
        this.data[index] = newPair //populate it with new node
      } else {
        newPair.next = this.data[index] //move oldPair to the .next index
        this.data[index] = newPair //reassing current index to newPair 
      }

      this.count ++ //update count of list by one
    }
  }


  read(key) {
    let index = this.hashMod(key) //Index to read

    let current = this.data[index] //Grab current node
    //console.log(current)
    while(current && current.key !== key) { //while current node exists & it's key !== key  
      current = current.next  //current checks the next node
    } //loop stops when current === null or current.key === key
   if(current) { //there's a node that contains the key
    return current.value //return the value of the key
   } else { //if no node has a matching key return undefined
    return undefined
   }

  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;