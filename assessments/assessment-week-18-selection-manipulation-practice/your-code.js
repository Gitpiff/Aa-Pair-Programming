/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

window.onload = function () {
    firstSq()
    secondSq()
    problemThree()
    fourthBox()
    problemFive()
}

// Your code here
const firstSq = () => {
    const firstSquare = document.getElementById("problem-one")
    firstSquare.innerText = ""
    const button = document.createElement("button")
    button.innerText = "1"
    firstSquare.appendChild(button)
}

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// Your code here
const secondSq = () => {
    const secondSquare = document.querySelector(".two")
    secondSquare.style.backgroundColor = "orange"
    secondSquare.style.color = "white"
    secondSquare.style.border = "5px dashed black"
}
// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
const problemThree = () => {
    const plus = document.body.querySelectorAll(".plus")
    console.log(plus)
    plus.forEach(ele => {
        ele.style.width = "100px"
        ele.style.fontSize = "60px"
    })
}

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here
const fourthBox = () => {
    const four = document.querySelector(".four")
    four.id = "problem-four"
    four.classList.remove("square")
    four.className = "round"
}

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here
const problemFive = () => {
    const removed = document.querySelectorAll(".square")
    console.log(removed)
    removed.forEach(box => {
        if(box.innerText === "5" || box.innerText === "6" || box.innerText === "7") {
            box.remove()
        }
    })
}
