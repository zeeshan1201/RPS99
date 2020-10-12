// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;
let a = "see"

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if(!moveOneType|| !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
        return;
    }
    let options = ["rock", "paper", "scissors"];
    moveOneType = moveOneType.toLowerCase();
    moveTwoType = moveTwoType.toLowerCase();
    moveThreeType = moveThreeType.toLowerCase();
    if(!options.includes(moveOneType) || !options.includes(moveTwoType) || !options.includes(moveThreeType)) {
        return;
    }
    if((moveOneValue < 1) || (moveTwoValue < 1) || (moveThreeValue < 1)){
        return;
    }
    if((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

const getRoundWinner = (round) => {
    let playOne;
    let playTwo;
    let playOneValue;
    let playTwoValue;
    if(round === 1) {
        playOne = playerOneMoveOneType;
        playOneValue = playerOneMoveOneValue;
        playTwo = playerTwoMoveOneType;
        playTwoValue = playerTwoMoveOneValue;
    } else if (round === 2) {
        playOne = playerOneMoveTwoType;
        playOneValue = playerOneMoveTwoValue;
        playTwo = playerTwoMoveTwoType;
        playTwoValue = playerTwoMoveTwoValue;
    } else if (round === 3) {
        playOne = playerOneMoveThreeType;
        playOneValue = playerOneMoveThreeValue;
        playTwo = playerTwoMoveThreeType;
        playTwoValue = playerTwoMoveThreeValue;
    } else {
        return null;
    }
    if(!playOne || !playTwo || !playOneValue || !playTwoValue){
        return null;
    }
    if(playOne === playTwo) {
        if(playOneValue > playTwoValue){
            return "Player One";
        } else if (playOneValue < playTwoValue){
            return "Player Two";
        } else {
            return "Tie";
        }
    }
    if(playOne === "rock"){
        if(playTwo === "paper"){
            return "Player Two";
        } else {
            return "Player One"
        }
    }
    if(playOne === "paper"){
        if(playTwo === "scissors"){
            return "Player Two";
        } else {
            return "Player One"
        }
    }
    if(playOne === "scissors"){
        if(playTwo === "rock"){
            return "Player Two";
        } else {
            return "Player One"
        }
    }
}
const getGameWinner = () => {
    let one = 0;
    let two = 0;
    const r1w = getRoundWinner(1);
    const r2w = getRoundWinner(2);
    const r3w = getRoundWinner(3);
    if(!r1w || !r2w || !r3w) {
        return null;
    }
    if (r1w === 'Player One') {
        one++;
    } else if (r1w === "Player Two") {
        two++;
    }
    if (r2w === 'Player One') {
        one++;
    } else if (r2w === "Player Two") {
        two++;
    }
    if (r3w === 'Player One') {
        one++;
    } else if (r3w === "Player Two") {
        two++;
    }
    if(one > two){
        return "Player One";
    } else if (one < two) {
        return "Player Two";
    } else {
        return "Tie";
    }
}
const setComputerMoves = () => {
    let options = ["rock", "paper", "scissors"];
    playerTwoMoveOneType = options[Math.floor(Math.random() * 3)];
    playerTwoMoveTwoType = options[Math.floor(Math.random() * 3)];
    playerTwoMoveThreeType = options[Math.floor(Math.random() * 3)];
    playerTwoMoveOneValue = Math.floor(Math.random() * 97) + 1;
    playerTwoMoveTwoValue = Math.floor(Math.random() * (98 - playerTwoMoveOneValue)) + 1;
    playerTwoMoveThreeValue = 99 - (playerTwoMoveOneValue + playerTwoMoveTwoValue);
}

