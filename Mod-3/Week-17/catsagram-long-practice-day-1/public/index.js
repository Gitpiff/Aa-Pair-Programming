// Your code here


window.onload = (event) => {
  const container = document.createElement("div")
  const title = document.createElement("h1");
  title.innerText = "Kitten Pic";
  title.className = "title"
  document.body.appendChild(title);
  displayImage();


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

    document.body.appendChild(catImage)
}
