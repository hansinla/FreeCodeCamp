
window.onload = function(){
      resetGame();

      $(".dropdown-menu li a").click(function(){
            var selText = $(this).text();
            $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
      });
};

function resetGame(){
                  gameBoard = initGameBoard();
                  resetDisplay();
                  gameInProgress = true;
                  if (mode === 0 || mode === 2) {
                        currentPlayer = XPLAYER;
                  } else {
                        currentPlayer = OPLAYER;
                  }
                  updateScore();
}



function updateBoard(player, square){
            // change appearance of square according to the player who clicked
            if (player == XPLAYER) {
                  document.getElementById(square).innerHTML = "<img src='images/X.png'>";
            } else {
                  document.getElementById(square).innerHTML = "<img src='images/O.png'>";
            }
}

function updateScore(){
      document.getElementById('gamesPlayed').innerHTML = "Games played: " + gamesPlayed;
      document.getElementById('numWins').innerHTML = "Wins: " + numWins;
      document.getElementById('numDraws').innerHTML = "Draws: " + numDraws;
}

function displayWinner(winner, player){
      gameInProgress = false;                   // disable the game board, preventing further clicks
      gamesPlayed += 1;
      if (winner == DRAW) {
            numDraws += 1;
            document.getElementById("winner").innerHTML = "<h2>It's a draw!</h2>";
      } else if (winner == player) {
            if (player == XPLAYER) {
                  if (mode === 0 || mode === 2) {
                        numWins += 1;
                  }
                  document.getElementById("winner").innerHTML = "<h2>The winner is X</h2>";
            } else document.getElementById("winner").innerHTML = "<h2>The winner is O</h2>";
      }
      updateScore();
      document.getElementById('gamesPlayed').style.webkitTransform = 'scale(1)'; // Force browser to update score board

}


function OnClick (select) {
            // if game is disable gameBoard
            if (!gameInProgress) return;
		// check if the clicked square is still in play
            var emptyList = getEmptySquares(gameBoard);
		if (emptyList.indexOf(parseInt(select.id)) == -1) return;

            gameBoard = makeMove(gameBoard, select.id, currentPlayer);        // update gameBoard for logics
            updateBoard(currentPlayer, select.id);                            // update visuals on webpage

            // Check for win
            winner = checkForWin(gameBoard);
            if (winner == NONE) {
                  currentPlayer = switchPlayer(currentPlayer);                // switch to next player
            } else displayWinner(winner, currentPlayer);
            
            // disable this part for manual play ------------------------------------------------------
            
            if (mode && gameInProgress){
                  // time for the machine to make a move
                  var machineMove = mc_move(gameBoard, currentPlayer, NTRIALS);
                  console.log("machineMove = ", machineMove);
                  gameBoard = makeMove(gameBoard, machineMove, currentPlayer);      // update gameBoard for logics
                  updateBoard(currentPlayer, machineMove);                // update visuals on webpage

                 // Check for win
                  var winner = checkForWin(gameBoard);
                  if (winner == NONE) {
                        currentPlayer = switchPlayer(currentPlayer);    // switch to next player
                  } else displayWinner(winner, currentPlayer);
            }

            // end disable part for manual play -------------------------------------------------------

}


function toggleMode(select){
      mode = parseInt(select.id)-10;
      resetGame();
}


 function resetDisplay(){
      for (var i = 0; i < gameBoard.length; i++) {
            document.getElementById(i).innerHTML = "<img src='images/start.png'>";
      }
      document.getElementById("winner").innerHTML = "";
 }