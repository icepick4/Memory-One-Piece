import {
    START,
    DIFFICULTY,
    PLAYER1NAME,
    PLAYER2NAME,
    PLAYER1SCORE,
    PLAYER2SCORE,
    BOARD_CONTAINER,
    PLAYER1,
    PLAYER2,
    BOARD,
    TITLE,
    SCORE1,
    SCORE2,
    rotate,
    CHECKBOX,
    DUAL_MODE_TAGS,
    SOUNDS_CHARACTERS_PATH
} from './classes/constants';
import { Card } from './classes/card';
let counter = 1;

START.addEventListener('click', () => {
    clear();
    init();
});

CHECKBOX.addEventListener('change', () => {
    if (CHECKBOX.checked) {
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
    PLAYER1.setName(PLAYER1NAME.value);
    PLAYER2.setName(PLAYER2NAME.value);
    PLAYER1SCORE.innerHTML = PLAYER1.name;
    PLAYER2SCORE.innerHTML = PLAYER2.name;

    BOARD.initPlaying(difficulty);
    if (BOARD.mode == 'dual') {
        PLAYER1.startPlaying();
    }
}

export function play(card: Card) {
    if (!BOARD.turnEnded() && !card.revealed && !card.won) {
        card.reveal();
    } else {
        return;
    }
    if (BOARD.checkCardsRevealed() != null) {
        let audio = new Audio(SOUNDS_CHARACTERS_PATH + card.name + '.mp3');
        audio.volume = 0.65;
        audio.play();
        if (BOARD.mode == 'dual') {
            if (PLAYER1.isPlaying()) {
                PLAYER1.addPoint();
            } else {
                PLAYER2.addPoint();
            }
        }
        if (BOARD.checkEnd()) {
            TITLE.innerHTML = getEndMessage() as string;
            return;
        }
    } else {
        if (counter % 2 == 0) {
            //wait 1.25 seconds before flipping back
            setTimeout(() => {
                BOARD.hideAllNotWon({} as Card);
                if (BOARD.mode == 'dual') {
                    switchPlayers();
                }
            }, 1250);
        } else {
            BOARD.hideAllNotWon(card);
        }
    }
    if (BOARD.mode == 'single') {
        TITLE.innerHTML =
            'Moves :' + ((counter - (counter % 2)) / 2).toString();
    }

    counter++;
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
    PLAYER1.clear();
    PLAYER2.clear();
    SCORE1.innerHTML = '0';
    SCORE2.innerHTML = '0';
    TITLE.innerHTML = 'Memory One Piece';
    counter = 1;
    let child = BOARD_CONTAINER.lastElementChild;
    while (child) {
        BOARD_CONTAINER.removeChild(child);
        child = BOARD_CONTAINER.lastElementChild;
    }
}

function switchPlayers() {
    if (BOARD.mode == 'dual') {
        if (PLAYER1.isPlaying()) {
            PLAYER1.stopPlaying();
            PLAYER2.startPlaying();
        } else {
            PLAYER2.stopPlaying();
            PLAYER1.startPlaying();
        }
    }
}

function getEndMessage() {
    let message: string;
    if (PLAYER1.getScore() > PLAYER2.getScore()) {
        message =
            PLAYER1.getName() +
            ' won with ' +
            PLAYER1.getScore().toString() +
            ' points against ' +
            PLAYER2.getName() +
            ' who had ' +
            PLAYER2.getScore().toString() +
            ' points.';
    } else if (PLAYER1.getScore() < PLAYER2.getScore()) {
        message =
            PLAYER2.getName() +
            ' won with ' +
            PLAYER2.getScore().toString() +
            ' points against ' +
            PLAYER1.getName() +
            ' who had ' +
            PLAYER1.getScore().toString() +
            ' points.';
    } else {
        if (BOARD.mode == 'dual') {
            message =
                'It was a tie! Both players have ' +
                PLAYER1.getScore().toString() +
                ' points.';
        } else {
            message =
                'You won in ' +
                ((counter - (counter % 2)) / 2).toString() +
                ' moves!';
        }
    }
    return message;
}
