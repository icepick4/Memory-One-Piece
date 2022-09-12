import {
    START,
    DIFFICULTY,
    PLAYER1NAME,
    PLAYER2NAME,
    PLAYER1SCORE,
    PLAYER2SCORE,
    BOARD_CONTAINER,
    PLAYER1,
    PLAYER2
} from './classes/constants';

import { Board } from './classes/board';
import { Player } from './classes/player';
import { Card } from './classes/card';
export const BOARD: Board = new Board();
START.addEventListener('click', () => {
    clear();
    if (BOARD.playing == false) {
        init();
    }
});

function init() {
    const difficulty: number = getDifficulty(DIFFICULTY.value) as number;
    PLAYER1.setName(PLAYER1NAME.value);
    PLAYER2.setName(PLAYER2NAME.value);
    BOARD.initPlaying(difficulty);

    PLAYER1SCORE.innerHTML = PLAYER1.getName().toString();
    PLAYER2SCORE.innerHTML = PLAYER2.getName().toString();
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
    BOARD.clear();
    PLAYER1SCORE.innerHTML = '';
    PLAYER2SCORE.innerHTML = '';
    let child = BOARD_CONTAINER.lastElementChild;
    while (child) {
        BOARD_CONTAINER.removeChild(child);
        child = BOARD_CONTAINER.lastElementChild;
    }
}

export function play() {
    // card.flip();
    if (BOARD.checkCardsRevealed() != null) {
        if (PLAYER1.isPlaying()) {
            PLAYER1.addPoint();
            PLAYER1SCORE.innerHTML = PLAYER1.getScore().toString();
        } else {
            PLAYER2.addPoint();
            PLAYER2SCORE.innerHTML = PLAYER2.getScore().toString();
        }
    } else {
        BOARD.hideAll();
    }
}
