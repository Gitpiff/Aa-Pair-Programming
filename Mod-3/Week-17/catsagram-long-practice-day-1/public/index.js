let votesNum;

window.onload = (event) => {
  const header = document.createElement("div")
  header.className = "header"
  const title = document.createElement("h1");
  title.innerText = "Kitten Pic";
  title.className = "title"
  const votesDiv = document.createElement("div")
  votesDiv.className = "votes-div"
  const commentSection = document.createElement("div")
  commentSection
  document.body.appendChild(header);
  document.body.appendChild(votesDiv)
  header.appendChild(title)
  displayImage();
  catButton()
  votes()
  commentForm()
  //commentBox()
};



async function getCatPicture() {
  try {
    const url = "https://api.thecatapi.com/v1/images/search";
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json)
    return json
  } catch (error) {
    console.log(error)
  }
}

async function displayImage() {
    const catImage = document.createElement("img")
    catImage.className = "cat-img"
    const cat = await getCatPicture()
    console.log(cat)
    catImage.setAttribute("src", cat[0].url)
    const header = document.querySelector(".header")
    header.appendChild(catImage)
}

async function catButton() {
  const button = document.createElement("button")
  button.innerText = "Get New Cat"
  button.className = "cat-btn"
  const header = document.querySelector(".header")
    header.appendChild(button)
  //console.log(image)
  button.addEventListener("click", async() => {
    reset()
    const image = document.querySelector("img")
    const cat = await getCatPicture()
    console.log(image)
    image.src = cat[0].url
    console.log(image)
  })
}

//Two buttons
//votes variable
//A Counter create a <p> ${votes}
//Upvote btn counter +1
//Donwvote btn counter -1

function votes() {
  votesNum = 0
  const upVote = document.createElement("button")
  upVote.innerText = "Upvote"
  const downVote = document.createElement("button")
  downVote.innerText = "DownVote"
  const votesDiv = document.querySelector(".votes-div")
  const popularity = document.createElement("p")
  popularity.innerText = `Popularity Score: ${votesNum}`
  votesDiv.appendChild(upVote)
  votesDiv.appendChild(downVote)
  votesDiv.appendChild(popularity)
  upVote.addEventListener("click", e => {
    votesNum++
    popularity.innerText = `Popularity Score: ${votesNum}`
    console.log(votes)
  })
  downVote.addEventListener("click", e => {
    votesNum--
    popularity.innerText = `Popularity Score: ${votesNum}`
    console.log(votes)
  })
}

//Create a Form -label, input type, submit button
//Div with a <ul> with a <li> for each comment

const commentForm = () => {
  const form = document.createElement("form")
  const label = document.createElement("label")
  label.innerText = "Comment "
  const input = document.createElement("input")
  input.setAttribute("placeholder", "Add a comment...")
  const button = document.createElement("button")
  button.innerText = "Submit"
  button.type = "submit"
  form.appendChild(label)
  form.appendChild(input)
  form.appendChild(button)
  document.body.appendChild(form)

  const div = document.createElement("div")
  const ul = document.createElement("ul")
  div.appendChild(ul)
  document.body.appendChild(div)

  button.addEventListener("click",  e => {
    e.preventDefault()
    console.log("submit")
    const comment = input.value
    const li = document.createElement("li")
    li.innerText = comment
    ul.appendChild(li)
    input.value = ""
  })
}

const reset = () => {
  const popularity = document.querySelector("p")
  votesNum = 0
  popularity.innerText = `Popularity Score: 0`
  const input = document.querySelector("input")
  input.value = ""
  const li = document.querySelectorAll("li")
  console.log(li)
  li.forEach(listItem => listItem.remove())
}
