// Constants and global variables for Monte Carlo simulator
const NTRIALS = 200;    // Number of trials to run
const MCMATCH = 1.0;   // Score for squares played by the machine player
const MCOTHER = 1.0;   // Score for squares played by the other player
const DRAW   = -2.0;   // constant used to indicate draw
const NONE   = -5.0;   // constant used to indicate no winner & no draw
const EMPTY  = -1.0;   // constant for an empty cell
const XPLAYER=  1.0;   // constant for Player X
const OPLAYER=  0.0;   // constant for player O

var xHasTurn = true;
var gameInProgress;
var gameBoard;
var currentPlayer  = XPLAYER;
var mode = 0;

var gamesPlayed = 0, numWins = 0, numDraws = 0;

var wins = [[0,1,2],[3,4,5],[6,7,8],      // if one player occupies one of these arrays,
      		[0,3,6],[1,4,7],[2,5,8],      // the player wins
      		[0,4,8],[2,4,6]];