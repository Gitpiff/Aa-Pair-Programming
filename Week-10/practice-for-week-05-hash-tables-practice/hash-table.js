const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
    //console.log(this.data)
  }

  hash(key) {
    let sha = sha256(key).slice(0, 8);
    return parseInt(sha, 16);

  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let index = this.hashMod(key);

    if(!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error('hash collision or same key/value pair already exists!')
    }

  }

  insertWithHashCollisions(key, value) {
    let index = this.hashMod(key);

    let newNode = new KeyValuePair(key, value) //create new node
    console.log(this.data[index])
    if(this.data[index]) {       //Collision       
      newNode.next = this.data[index] 
    }
    this.data[index] = newNode     //store it in the data bucket location returned by hashMod(key)
    this.count ++
  }

  insert(key, value) {
    let index = this.hashMod(key);
    
    let oldPair = this.data[index]

    //Check if index and oldPair have the same key
    //We're checking multiple nodes -linked list- use a while loop
    while(oldPair && oldPair.key !== key) {
      oldPair = oldPair.next
    }

    if(oldPair){ //if oldPair has the ley we're trying to push
      oldPair.value = value
    } else {
      this.insertWithHashCollisions(key, value)
    }
    // else { //using different key but same value
    //   let newPair = new KeyValuePair(key, value)
    //   if(!this.data[index]) { //if there's something at this index
    //     this.data[index] = newPair
    //   } else {
    //     newPair.next = this.data[index]
    //     this.data[index] = newPair
    //   }

    //   this.count ++
    // }
  }

}


module.exports = HashTable;
