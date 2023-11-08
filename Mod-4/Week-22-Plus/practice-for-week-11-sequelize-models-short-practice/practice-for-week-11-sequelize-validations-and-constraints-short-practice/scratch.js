let word = 'orangey'

const notEndingInY = (value) => {
    const nameArr = value.split('')
    console.log(nameArr[ nameArr.length -1 ])
    if(nameArr[nameArr.length -1] === 'y') {
        console.log('Error')
    }
}

notEndingInY(word)