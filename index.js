// Module for Gameboard
var gameBoard = (function() {
    var state = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    function visualize() {}

    function setState(row, col, val) {
        if (state[row][col] === "") state[row][col] = val;
    }

    function getState() {
        return state;
    }
    return { getState, setState, visualize };
})();

// Factory for players

function switchScreen(screen) {
    if (screen.id === "startscreen") {
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("gamescreen").style.display = "inline";
    } else {
        document.getElementById("startscreen").style.display = "inline";
        document.getElementById("gamescreen").style.display = "none";
    }
}