//Snakes and Ladders Project
// The game consists of a 10x10 playing board of squares.
function createBoardCode() {
    // This method creates and returns an array of objects representing
    // the playing board. Each object has only one property, ".end", which
    // defaults to the number or index of that object (or square). But what
    // makes this game what it is are the special behaviors at specific squares,
    // where landing on the square 'teleports' the user forward or backward in
    // big leaps (see the picture for the UI). An example will be
    //      board[13].end = 47, meaning 14th square ends up in square 48.
    // The special squares, by index and their .end points, are as follows...
    // The "Ladders": 14->48, 19->60, 55->76, 69->90, 78->97.
    // The "Snakes": 99->29. 47->18, 25->7.
    var ladders = new Object();
    ladders[14] = 48;
    ladders[19] = 60;
    ladders[55] = 76;
    ladders[69] = 90;
    ladders[78] = 97;
    
    var snakes = new Object();
    snakes[99] = 29;
    snakes[47] = 18;
    snakes[25] = 7;
    
    var board = new Array();
    
    for (i = 0; i < 10*10; i++) {
        var tile = new Object();
        
        if (typeof ladders[i+1] != "undefined") {
            tile.end = ladders[i+1] - 1;
        } else if (typeof snakes[i+1] != "undefined") {
            tile.end = snakes[i+1] - 1;
        } else {
            tile.end = i;
        }
        
        board[i] = tile;
	}
    
    return board;
}

function getSteps() {
    // Select a random number from 1-6 and return that number.
    // This simulates the rolling of a single die.
	return Math.floor(Math.random() * 6);
}

function makeMove(playerPos, steps1, steps2) {
    // This method will move a player's piece across the board.
    // Imagine the player rolling two dice -- i.e., two calls to the getSteps()
    // method above. The values of those two rolls are "steps1" and "steps2".
    // The player's current board position is passed in as "playerPos".
    // This method adds steps1 and steps2 to playerPos. You will also need to
    // check the new player position against 99, which is as far as the board can go.
	var newPos = playerPos + steps1 + steps2;
    var endPos = 99;
    
    if (newPos <= endPos) {
        return newPos;
    } else {
        return endPos;
    }
}