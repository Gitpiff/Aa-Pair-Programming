function binaryToString(binaryBlob) {
  //Return a string
  let str = ""
  //Loop over the "binaryBlob", but iterate every 8 chars
  for(let i  = 0; i < binaryBlob.length; i += 8) {
    //Store the first 8 chars
    const eightBit = binaryBlob.slice(i, i + 8)
    //Turn them into a decimal value
    const decimal = parseInt(eightBit, 2)
    //Convert the decimal value into a string
    const newString = String.fromCharCode(decimal)
    //Add the newly created string to the rest of the string 
    str += newString
  }

  return str 
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;