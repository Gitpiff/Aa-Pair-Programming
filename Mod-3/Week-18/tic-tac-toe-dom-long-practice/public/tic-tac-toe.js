window.onload = function () {

    let currPlayer = "x";
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', () =>
            cellClicks(cell))
    })

    const cellClicks = cell => {
        if (!cell.innerHTML) {
            if (currPlayer === 'x') {
                const x = document.createElement("img")
                x.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
                cell.appendChild(x)
                currPlayer = 'o'
            } else {
                const o = document.createElement("img")
                o.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
                cell.appendChild(o)
                currPlayer = 'x'
            }
        }

    }
}
