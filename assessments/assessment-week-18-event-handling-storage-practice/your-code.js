
window.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const button = document.getElementById("make-circle-blue")
  button.addEventListener("click",  e => {
    const circle = document.getElementById("blue-border-circle")
    circle.className = "blue-fill"
  })

  const checkMark = document.getElementById("will-not-check")
  checkMark.addEventListener("click", e => e.preventDefault())

  const noBananas = document.getElementById("change-bananas-status")
  noBananas.addEventListener("click", e => {
    const bananasDiv = document.getElementById("bananas-div")
    bananasDiv.innerText = "No Bananas Today!"
    const noBananasImg = document.createElement("img")
    noBananasImg.setAttribute("src", "./images/no-bananas.png")
    const bananasImgDiv = document.getElementById("bananas-image-div")
    if(bananasImgDiv.children.length === 0) {
      bananasImgDiv.appendChild(noBananasImg)
    }
  })

  const cookieBtn = document.getElementById("store-cookie")
  const inputBox = document.getElementById("fav-cookie")
  const cookie = document.cookie
  if(cookie) {
    const val = cookie.split("=")[1]
    inputBox.val = val
  }

  cookieBtn.addEventListener("click", e => {
    let favCookie = inputBox.value
    console.log(favCookie)
  })

  // const cookie = document.cookie
});
