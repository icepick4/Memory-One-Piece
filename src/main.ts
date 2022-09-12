import {
    START,
    DIFFICULTY,
    PLAYER1NAME,
    PLAYER2NAME,
    PLAYER1SCORE,
    PLAYER2SCORE,
    BOARD_CONTAINER
} from './classes/constants';

import { Board } from './classes/board';
import { Player } from './classes/player';
let BOARD: Board = new Board();
START.addEventListener('click', () => {
    clear();
    if (BOARD.playing == false) {
        init();
    }
});

function init() {
    const difficulty: number = getDifficulty(DIFFICULTY.value) as number;
    const player1Name: string = PLAYER1NAME.value;
    const player2Name: string = PLAYER2NAME.value;
    BOARD.initPlaying(difficulty);
    const player1: Player = new Player(player1Name);
    const player2: Player = new Player(player2Name);
    PLAYER1SCORE.innerHTML = player1.getName().toString();
    PLAYER2SCORE.innerHTML = player2.getName().toString();
}

function getDifficulty(difficulty: string) {
    if (difficulty === 'easy') {
        return 1;
    } else if (difficulty === 'medium') {
        return 2;
    } else if (difficulty === 'hard') {
        return 3;
    } else {
        console.log('Error with difficulty');
        return 'error';
    }
}

function clear() {
    BOARD = new Board();
    PLAYER1SCORE.innerHTML = '';
    PLAYER2SCORE.innerHTML = '';
    let child = BOARD_CONTAINER.lastElementChild;
    while (child) {
        BOARD_CONTAINER.removeChild(child);
        child = BOARD_CONTAINER.lastElementChild;
    }
}
