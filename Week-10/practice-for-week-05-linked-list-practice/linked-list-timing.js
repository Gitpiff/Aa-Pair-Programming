const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

// let n = 10000
// let ll = new LinkedList();

// console.time("LL: addToHead")
// for (let i = 0 ; i < n ; i++) {

//   ll.addToHead(i);
// }
// console.timeEnd("LL: addToHead")

let n = 10000
let ll = new LinkedList();

console.time("LL: addToTail")
for (let i = 0 ; i < n ; i++) {

  ll.addToTail(i);
}
console.timeEnd("LL: addToTail")
