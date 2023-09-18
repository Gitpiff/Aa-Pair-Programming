/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterBin` class found in the `./problems/02-letter-bin.js` file.


The second class is called `LetterRoom`. `LetterRoom` should hold a queue of
`LetterBin`'s. There are methods on the class to add and remove a bin from the
queue. There are also methods to get the first and last bin in the queue without
removing them. Finally, there's a method to get the total number of bins in the
queue. Implement these methods.

******************************************/

const LetterBin = require('./02-letter-bin');

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LetterRoom {
    constructor() {
        // create an empty queue
        // Hint: you may create helper classes in this file to use
        this.head = null
        this.tail = null 
        this.length = 0
    }

    getLastBin() {
        // return the last bin added to the queue
        // if there are no bins in the queue, return null
        return this.tail ? this.tail.value : null
    }

    getFirstBin() {
        // return the first bin added to the queue
        // if there are no bins in the queue, return null
        return this.head ? this.head.value : null
    }

    numBins() {
        // returns the number of bins in the queue
        return this.length
    }

    addBin() {
        // create a new bin and add it to the end of the queue
        // returns the newly created bin
        // WARNING: you cannot add properties to a LetterBin like .next
       let newBin = new LetterBin()
       let node = new Node(newBin)
       
       if(!this.head) {
            this,head = node
            this.tail = node
       } else {
        this.tail.next = node 
        this.tail = node 
       }
       this.length ++
    }

    removeBin() {
        // remove the bin at the beginning of the queue
        // returns the removed bin
        if(!this.head) {
            return null
        }

        let oldHead = this.head
        this.head = this.head.next
    }
}

module.exports = LetterRoom;