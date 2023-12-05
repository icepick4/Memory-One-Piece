import { Card } from './classes/card';
import {
    BOARD,
    BOARD_CONTAINER,
    PLAYER1,
    PLAYER2,
    SCORE1,
    SCORE2,
    SOUNDS_CHARACTERS_PATH,
    TITLE
} from './constants';

let counter = 1;

/**
 * "Rotate the card 180 degrees, then after a certain amount of time, rotate it back to 0 degrees."
 * @param {Card} card - Card - The card to rotate
 * @param {number} speed - The speed of the rotation in milliseconds.
 */
export function rotate(card: Card, speed: number) {
    card.elementImage.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        card.elementImage.style.transform = 'rotateY(0deg)';
    }, speed);
}

export function audio(src: string, volume: number, sound_mode: boolean) {
    if (!sound_mode) {
        return;
    }
    let audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}

export function getDifficulty(difficulty: string) {
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

export function clear() {
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

export function play(card: Card) {
    if (!BOARD.turnEnded() && !card.revealed && !card.won) {
        card.reveal();
    } else {
        return;
    }
    if (BOARD.checkCardsRevealed() != null) {
        audio(SOUNDS_CHARACTERS_PATH + card.name + '.mp3', 0.7, BOARD.sound);
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
        //check if its the second card flipped
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
