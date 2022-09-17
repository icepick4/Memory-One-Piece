import { Player } from './player';
import { Board } from './board';
import { Card } from './card';

export const START: HTMLElement = document.getElementById(
    'start'
) as HTMLElement;

export const DIFFICULTY: HTMLSelectElement = document.getElementById(
    'difficulty'
) as HTMLSelectElement;

export const PLAYER1NAME: HTMLInputElement = document.getElementById(
    'player1'
) as HTMLInputElement;

export const PLAYER2NAME: HTMLInputElement = document.getElementById(
    'player2'
) as HTMLInputElement;

export const PLAYER1SCORE: HTMLElement = document.getElementById(
    'player1Score'
) as HTMLElement;

export const PLAYER2SCORE: HTMLElement = document.getElementById(
    'player2Score'
) as HTMLElement;

export const BOARD_CONTAINER: HTMLElement = document.getElementById(
    'board'
) as HTMLElement;

export const SCORE1: HTMLElement = document.getElementById(
    'score1'
) as HTMLElement;

export const SCORE2: HTMLElement = document.getElementById(
    'score2'
) as HTMLElement;

export const CHECKBOX: HTMLInputElement = document.getElementById(
    'checkbox'
) as HTMLInputElement;

export const DUAL_MODE_TAGS: HTMLCollection = document.getElementsByClassName(
    'dual-mode'
) as HTMLCollection;

export const CARDS_NAMES: string[] = [
    'ace',
    'chopper',
    'dragon',
    'franky',
    'hancock',
    'kaido',
    'law',
    'mihawk',
    'nami',
    'newgate',
    'roger',
    'robin',
    'sanji',
    'usopp',
    'zoro'
];

export const CARDS_PATH: string = './assets/cards/';

export const SOUNDS_PATH: string = './assets/sounds/';

export const CARD_BACK: string = './assets/cards/luffy.png';

export const PLAYER1: Player = new Player(SCORE1, PLAYER1SCORE);
export const PLAYER2: Player = new Player(SCORE2, PLAYER2SCORE);

export const BOARD: Board = new Board();

export const TITLE: HTMLElement = document.getElementById(
    'title'
) as HTMLElement;

export function rotate(card: Card, speed: number) {
    card.elementImage.style.transform = 'rotateY(180deg)';
    const rotating = setTimeout(() => {
        card.elementImage.style.transform = 'rotateY(0deg)';
    }, speed);
}
