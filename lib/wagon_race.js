// TODO: write your code here
function movePlayerRight(player) {
  let currentCell;
  let nextCell;

  if (player === 1) {
    currentCell = document.querySelector("#player1-race .player-icon").parentElement;
    nextCell = currentCell.nextElementSibling;
  } else if (player === 2) {
    currentCell = document.querySelector("#player2-race .player-icon").parentElement;
    nextCell = currentCell.nextElementSibling;
  }

  if (nextCell) {
    const playerIcon = currentCell.querySelector(".player-icon");
    currentCell.removeChild(playerIcon);
    nextCell.appendChild(playerIcon);
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    movePlayerRight(1);
  }
  if (e.key === "1") {
    movePlayerRight(2);
  }
});
