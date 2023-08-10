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
    if(this.data[index]) {              
      newNode.next = this.data[index]
    }
    this.data[index] = newNode                //store it in the data bucket location returned by hashMod(key)
    this.count ++
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
