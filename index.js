// Module for Gameboard
var gameBoard = (function() {
    var _state = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    var player;
    var pc_val;

    function visualize(num, val) {
        console.log(val);
        document.getElementById("" + num).innerHTML = val;
    }

    function _checkRows(val) {}

    function _checkCols(val) {}

    function _checkDiag(val) {}

    function _checkGameOver(val) {
        if (_checkCols(val) || _checkDiag(val) || _checkRows(val)) { return true; } else return false;
    }

    function setState(num, val) {
        if (_state[num] === "") {
            _state[num] = val;
            visualize(num, val);
            return true;
        } else return false;
    }

    function _move_pc() {
        var num = Math.floor(Math.random() * 9);
        while (!setState(num, pc_val)) {
            num = Math.floor(Math.random() * 9);
        }
        if (_checkGameOver()) {
            // Player lost or Tie
        }
    }

    function move(num) {
        if (setState(num, player)) {
            if (_checkGameOver()) {
                // Player won or Tie
            } else _move_pc();
        }
    }

    function getState() {
        return _state;
    }

    const switchScreen = function(screen) {
        if (screen.id === "play") {
            document.getElementById("startscreen").style.display = "none";
            document.getElementById("gamescreen").style.display = "inline";
            player = document.querySelector('input[name="player"]:checked').value;
            if (player === "X") pc_val = "O";
            else pc_val = "X";
            if (player === "O") _move_pc();
        } else {
            document.getElementById("startscreen").style.display = "inline";
            document.getElementById("gamescreen").style.display = "none";
            _state = [
                "", "", "",
                "", "", "",
                "", "", ""
            ];
            for (let c of document.getElementById("game-board").children) {
                c.innerHTML = "";
            }
        }
    }

    return { player, pc_val, visualize, move, switchScreen };
})();