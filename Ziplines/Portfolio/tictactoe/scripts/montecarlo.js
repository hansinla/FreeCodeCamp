//
// Monte Carlo Tic-Tac-Toe Player
// Hans van Riet 2014
// ported from Python to Javascript 2015
    

////////---------TESTED----------///////////
function getEmptySquares(board){
    // returns a list of empty squares
    var emptyList = [];
    for (var i = 0; i < board.length; i++) {
        if (board[i] == EMPTY) {
            emptyList.push(i);
        }
    }
    return emptyList;
}

////////---------TESTED----------///////////
function deepCopyArray(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

////////---------TESTED----------///////////
function initScoreBoard(){
    // Initializes a board with zeros
    return [0, 0, 0,
            0, 0, 0,
            0, 0 ,0];
}

////////---------TESTED----------///////////
function randomChoice(array){

    return array[Math.floor(Math.random() * array.length)];
}

////////---------TESTED----------///////////
function initGameBoard() {
     return [EMPTY, EMPTY, EMPTY,
             EMPTY, EMPTY, EMPTY,
             EMPTY, EMPTY, EMPTY];
}

////////---------TESTED----------///////////
function makeMove(board, index, player) {
            board[index] = player;
                  return board;
        }

////////---------TESTED----------///////////
function switchPlayer(player){

      return (player == XPLAYER) ? OPLAYER : XPLAYER;
}

////////---------TESTED----------///////////
function checkForWin(board) {
        for (var i = 0; i < wins.length; i++) {
            var possibleWin = wins[i];
            if (board[possibleWin[0]] == XPLAYER &&
                        board[possibleWin[1]] == XPLAYER &&
                board[possibleWin[2]]  == XPLAYER) {
                return XPLAYER;
            }
                  if (board[possibleWin[0]] == OPLAYER &&
                        board[possibleWin[1]] == OPLAYER &&
                        board[possibleWin[2]]  == OPLAYER) {
                        return OPLAYER;
                  }
        }
            if (getEmptySquares(board).length === 0){
                  return DRAW;
            } else {
                  return NONE;
            }
 }

////////---------TESTED----------///////////
function machineUpdateScores(scores, board){
    // Score the completed board and update the scores grid.

    // check for draw
    var winner = checkForWin(board);
    if (winner == DRAW) {
        return scores;
    }
    
    for (var i = 0; i < scores.length; i++) {
        // update scores in score board
        if (board[i] == EMPTY){
            continue;
        } else if (board[i] ==  winner){
            scores[i] += MCMATCH;
        } else {
            scores[i] -= MCOTHER;
        }
    }
    return scores; 
}

////////---------TESTED----------///////////
function getBestMove(board, scores){
    // The function finds all of the empty squares with the maximum score
    // and randomly return one of them as a (row, column) tuple.
    
    var emptyCellList = getEmptySquares(board);
    if (emptyCellList.length == 1) return emptyCellList[0];
    
    var bestCells = [emptyCellList[0]];
    var bestValue = scores[emptyCellList[0]];
    
    for (var i = 1; i < emptyCellList.length; i++) {
        if (scores[emptyCellList[i]] > bestValue){
            bestCells = [emptyCellList[i]];
            bestValue = scores[emptyCellList[i]];
        } else if (scores[emptyCellList[i]] == bestValue) {
            bestCells.push(emptyCellList[i]);
        }
    }
      
    if (bestCells.length > 1) {
            console.log("Done calculating best cells here's the list ", bestCells);
            return randomChoice(bestCells);
        } else {
        return bestCells[0];
    }

}


function mc_move(board, player, NTRIALS){
    // The function uses the Monte Carlo simulation to return a move
    // for the machine player in the form of a (row, column) tuple.
    var scoreBoard = initScoreBoard();  //create a new scoreboard
    
    // Execute num trials
    for (var i = 0; i < NTRIALS; i++) {
        // make a copy of the current gameBoard
        var boardCopy = deepCopyArray(board);
        machineTrial(boardCopy, player);
        scoreBoard = machineUpdateScores(scoreBoard, boardCopy);
        
    }
    console.log("Scoreboard: ", scoreBoard);
    return getBestMove(gameBoard, scoreBoard);
}

function machineTrial(board, player){
    // tries to win a board with random moves from the given position
    var testPlayer = player;
    var emptyCellList;
    var randomCell;
  
    while (checkForWin(board) == NONE){
        // randomly pick a empty place on board
        emptyCellList = getEmptySquares(board);         // get list of possible moves
        randomCell = randomChoice(emptyCellList);      // pick a move from list
        board = makeMove(board, randomCell, testPlayer);            // make move on board
        testPlayer = switchPlayer(testPlayer);              // switch player for trial run
    }
}







 

