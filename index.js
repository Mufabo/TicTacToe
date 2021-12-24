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

    function _check(elem1, elem2, elem3){
        return new Set([elem1, elem2, elem3]).size === 1 & elem1 !== "";
    }

    function _checkRows(val) {
        return _check(_state[0], _state[1], _state[2])|
        _check(_state[3], _state[4], _state[5])=== 1 |
        _check(_state[6], _state[7], _state[8])
    }

    function _checkCols(val) {
        return _check(_state[0], _state[3], _state[6]) |
        _check(_state[1], _state[4], _state[7]) |
        _check(_state[2], _state[5], _state[8]) ;
    }

    function _checkDiag(val) {
            return _check(_state[0], _state[4], _state[8]) |
            _check(_state[2], _state[4], _state[6]);
        }

    function _checkGameOver(val) {
        if(_state.indexOf("")===-1){
            return true;
        }
        if (_checkCols(val) | _checkDiag(val) | _checkRows(val)) { 
            return true; } else return false;
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
            alert("You lost or Tie");
        }
    }

    function move(num) {
        if (setState(num, player)) {
            if (_checkGameOver()) {
                // Player won or Tie
                alert("You won or tie");
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