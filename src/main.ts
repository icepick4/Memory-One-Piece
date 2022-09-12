import {
    START,
    DIFFICULTY,
    PLAYER1NAME,
    PLAYER2NAME,
    PLAYER1SCORE,
    PLAYER2SCORE
} from './classes/constants';

import { Board } from './classes/board';
let BOARD: Board;
START.addEventListener('click', init);

function init() {
    const difficulty: string = DIFFICULTY.value;
    const player1Name: string = PLAYER1NAME.value;
    const player2Name: string = PLAYER2NAME.value;

    // BOARD = new Board();
}
