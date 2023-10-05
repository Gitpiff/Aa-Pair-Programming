window.onload = function () {

    const h1 = document.querySelector('h1');

    let isGameOver = false;
    let currPlayer = "X";
    const cells = document.querySelectorAll('.cell');

    const checkGameStatus = () => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (const combo of winningCombos) {
            const [a, b, c] = combo;

            if (cells[a].innerHTML &&
                cells[a].innerHTML === cells[b].innerHTML &&
                cells[a].innerHTML === cells[c].innerHTML) {
                h1.innerText = `Winner: ${currPlayer}`
                isGameOver = true;
                newGame.disabled = false;
                giveUp.disabled = true;
                return
            }
        }

        if ([...cells].every(cell => cell.innerHTML)) {
            h1.innerText = 'Winner: None';
            isGameOver = true;
            newGame.disabled = false;
            giveUp.disabled = true;
        }
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () =>
            cellClicks(cell))
    })

    const cellClicks = cell => {
        if (!cell.innerHTML && !isGameOver) {
            if (currPlayer === 'X') {
                const x = document.createElement("img")
                x.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
                cell.appendChild(x);
                checkGameStatus();
                currPlayer = 'O';
            } else {
                const o = document.createElement("img")
                o.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
                cell.appendChild(o);
                checkGameStatus();
                currPlayer = 'X';
            }
        }

    }

    const newGame = document.querySelector('#new-game-btn')
    newGame.disabled = true;

    const giveUp = document.querySelector('#give-up-btn')

    if (!isGameOver) {
        newGame.addEventListener('click', () => {
            cells.forEach(cell => cell.innerHTML = '');
            h1.innerText = '';
            isGameOver = false;
            currPlayer = 'X';
            newGame.disabled = true;
            giveUp.disabled = false;
        })
    }

    giveUp.addEventListener('click', () => {
        if (!isGameOver) {
            if (currPlayer === 'X') {
                currPlayer = 'O';
            } else {
                currPlayer = 'X';
            }
        }

        h1.innerText = `Winner: ${currPlayer}`;
        isGameOver = true;
        newGame.disabled = false;
        giveUp.disabled = true;
    })
}
