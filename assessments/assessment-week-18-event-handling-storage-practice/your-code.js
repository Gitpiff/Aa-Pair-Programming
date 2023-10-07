
window.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const button = document.getElementById("make-circle-blue")
  button.addEventListener("click",  e => {
    const circle = document.getElementById("blue-border-circle")
    circle.className = "blue-fill"
  })

  const checkMark = document.getElementById("will-not-check")
  checkMark.addEventListener("click", e => e.preventDefault())
});
