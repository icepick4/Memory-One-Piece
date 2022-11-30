import {
    BOARD,
    CHECKBOX_MODE,
    DIFFICULTY,
    DUAL_MODE_TAGS,
    INPUT_PLAYER1,
    INPUT_PLAYER2,
    PLAYER1,
    PLAYER2,
    START,
    TITLE_PLAYER1,
    TITLE_PLAYER2
} from './constants';

import { clear, getDifficulty } from './functions';

START.addEventListener('click', () => {
    clear();
    init();
});

CHECKBOX_MODE.addEventListener('change', () => {
    //change between single and dual mode
    if (!CHECKBOX_MODE.checked) {
        for (let i = 0; i < DUAL_MODE_TAGS.length; i++) {
            DUAL_MODE_TAGS[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < DUAL_MODE_TAGS.length; i++) {
            DUAL_MODE_TAGS[i].classList.remove('hidden');
        }
    }
});

function init() {
    const difficulty: number = getDifficulty(DIFFICULTY.value) as number;
    PLAYER1.setName(INPUT_PLAYER1.value);
    PLAYER2.setName(INPUT_PLAYER2.value);
    TITLE_PLAYER1.innerHTML = PLAYER1.name;
    TITLE_PLAYER2.innerHTML = PLAYER2.name;
    BOARD.initPlaying(difficulty);
    if (BOARD.mode == 'dual') {
        PLAYER1.startPlaying();
    }
}
