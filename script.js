const blocks = document.querySelectorAll(".block");
let ind = 0; // Use let instead of var for block-scoped variables
let turn = 0;
const gameboard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let counter=0

const turn_displayer = document.getElementById("turn_displayer");
turn_displayer.style.color = "white";
turn_displayer.innerHTML = "Player 1's Turn";

blocks.forEach(function (b) {
    b.addEventListener("click", handle_click);
    b.i = ind % 3;
    b.j = Math.floor(ind / 3);
    ind+=1
});

function row_checker() {
    // Check rows
    for (let i = 0; i < gameboard.length; i++) {
        console.log(gameboard[i][0],gameboard[i][1],gameboard[i][2])
        if (gameboard[i][0] !== 0 &&
            gameboard[i][0] === gameboard[i][1] &&
            gameboard[i][0] === gameboard[i][2]) {
            if (gameboard[i][0] === 1) {
                turn_displayer.innerHTML = "Player 1 has won";
            } else {
                turn_displayer.innerHTML = "Player 2 has won";
            }
            return; // Exit the function if a winner is found
        }
    }
}

function handle_click() {

    if (gameboard[this.j][this.i] === 0) {
        const x_player = document.createElement("h1");
        if (turn % 2 === 0) {
            x_player.innerHTML = "X";
            turn_displayer.style.color = "yellow";
            turn_displayer.innerHTML = "Player 2's Turn";
            gameboard[this.j][this.i] = 1;
        } else {
            x_player.innerHTML = "O";
            turn_displayer.style.color = "white";
            turn_displayer.innerHTML = "Player 1's Turn";
            gameboard[this.j][this.i] = 2;
        }
        row_checker();
        turn++;
        x_player.style.marginLeft = "35px";
        x_player.style.marginTop = "30px";
        counter+=1
        if (counter == 9) {
            turn_displayer.innerHTML="The game is tied"
        }

        this.append(x_player);
    }
     // Update ind for the next block
}
