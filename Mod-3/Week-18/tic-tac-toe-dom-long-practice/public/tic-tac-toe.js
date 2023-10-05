window.onload = function () {

    let playerTurn = "x";

    const boardClass = document.getElementsByClassName('board')

    for (cell of boardClass) {
        cell.children[0].addEventListener('click', e => {


        })
    }


    // const cell = document.getElementById("square-0")

    // cell.addEventListener('click', e => {
    //     let children = cell.children;

    //     if (children.length === 0) {
    //         const img = document.createElement("img")
    //         img.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
    //         cell.appendChild(img)
    //     } else {
    //         return;
    //     }
    // })
}
