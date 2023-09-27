// window.addEventListener("DOMContentLoaded", event => {
//     const parent = document.getElementById("your-best-friend");
//     const childNodes = parent.childNodes;
//     for (let value of childNodes.values()) {
//       console.log(value);
//     }
//   });

// generate a random number for each list item
// const getRandomInt = max => {
//     return Math.floor(Math.random() * Math.floor(max));
//   };

  // listen for DOM ready event
//   window.addEventListener("DOMContentLoaded", event => {
//     // push 6 LI elements into an array and join
//     const liArr = [];
//     for (let i = 0; i < 6; i++) {
//       liArr.push("<li>" + getRandomInt(10) + "</li>");
//     }
//     const liString = liArr.join(" ");

//     // insert string into the DOM using innerHTML
//     const listElement = document.getElementById("your-worst-enemy");
//     listElement.innerHTML = liString;
//   });


//   const date = new Date()

//   window.addEventListener("DOMContentLoaded", event => {
//     const title = document.getElementById("title")
//     const time = () => {
//         const date = new Date()
//         const seconds = date.getSeconds()
//         const minutes = date.getMinutes()
//         const hours = date.getHours()

//         title.innerHTML = hours + ":" + minutes + ":" + seconds
//     }

//     setInterval(time, 1000)
//   })


// const addElement = () => {
//     //create a new h1 element
//     const newElement = document.createElement("h1")

//     //add some text to it
//     newElement.innerHTML = "El Pan"

//     //add the newElement and it's contents to the DOM
//     document.body.appendChild(newElement)
// }

const addElementAlt = () => {
    document.body.innerHTML("<h1>Los Panes</h1>")
}

window.onload = addElementAlt
