import {
    START,
    DIFFICULTY,
    INPUT_PLAYER1,
    INPUT_PLAYER2,
    TITLE_PLAYER1,
    TITLE_PLAYER2,
    PLAYER1,
    PLAYER2,
    BOARD,
    CHECKBOX_MODE,
    DUAL_MODE_TAGS
} from './constants';

import { getDifficulty, clear } from './functions';

START.addEventListener('click', () => {
    clear();
    init();
});

CHECKBOX_MODE.addEventListener('change', () => {
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
