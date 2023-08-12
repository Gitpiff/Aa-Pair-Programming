function binaryToString(binaryBlob) {
  let str = ""

  for(let i  = 0; i < binaryBlob.length; i += 8) {
    const eightBit = binaryBlob.slice(i, i + 8)
    const decimal = parseInt(eightBit, 2)
    const newString = String.fromCharCode(decimal)
    str += newString
  }

  return str 
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;