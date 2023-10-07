
window.addEventListener("DOMContentLoaded", () => {
  // Your code here
  //Problem 1
  const button = document.getElementById("make-circle-blue")
  button.addEventListener("click",  e => {
    const circle = document.getElementById("blue-border-circle")
    circle.className = "blue-fill"
  })

  //Problem 2
  const checkMark = document.getElementById("will-not-check")
  checkMark.addEventListener("click", e => e.preventDefault())

  //Problem 3
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

  //Problem 4
  const cookieBtn = document.getElementById("store-cookie")
  //const inputBox = document.getElementById("fav-cookie")
  // const cookie = document.cookie
  // if(cookie) {
  //   const val = cookie.split("=")[1]
  //   inputBox.val = val
  // }

  // cookieBtn.addEventListener("click", e => {
  //   let favCookie = inputBox.value
  //   console.log(favCookie)
  // })

  // Jame's Solution Problem 4
  const input = document.getElementById("fav-cookie")
  document.getElementById("store-cookie").addEventListener("click", e => {
    document.cookie = `favCookie=${input.value}`
  })

  if(document.cookie) {
    const [key, value] = document.cookie.split("=")
    input.value - value
  }

  //Problem 5
  document.getElementById("save-pie").addEventListener("click", e => {
    const input = document.getElementById("pie-type")
    //console.log(input)
    if(input.value.length <= 0) return
    const list = document.querySelector(".pie-list")
    if(list.children.length >= 5) return
    const newPie = document.createElement("li")
    newPie.innerText = input.value
    console.log(newPie)
    list.appendChild(newPie)
    input.value= ""
  })

  //Problem 6
  const iceCreamInput = document.getElementById("fav-ice-cream")
  document.getElementById("save-ice-cream").addEventListener("click", e => {
    localStorage.setItem("iceCream", iceCreamInput.value)
  })

  const faveIcecream = localStorage.getItem("iceCream")
  if(faveIcecream) {
    iceCreamInput.value = faveIcecream
  }

  //Problem 7
  const appleButton = document.getElementById("add-apple")
  const orangeButton = document.getElementById("add-orange")
  const emptyBasket = document.getElementById("reset-basket")
  const basket = document.getElementById("fruit-storage")
  const total = document.getElementById("total-fruit")
  const count = 0

  appleButton.addEventListener("click", e => {
    if(count <= 25) {
      count ++
      const newApple = document.createElement("span")
      newApple.innerText = "🍎"
      basket.appendChild(newApple)
      total.innerText = count
    }
  })

  orangeButton.addEventListener("click", e => {
    if(count <= 25) {
      count ++
      const newOrange = document.createElement("div")
      newOrange.innerText = "🍊"
      basket.appendChild(newOrange)
      total.innerText = count
    }
  })
  emptyBasket.addEventListener("click", e => {
    count = 0
    basket.innerText = ""
    total.innerText = count
  })

  //Problem 8
  document.getElementById("bubble-maker")
  .addEventListener("click", e => e.stopPropagation())
});
