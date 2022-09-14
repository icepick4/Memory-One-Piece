import { Player } from './player';
import { Board } from './board';

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

export const CARDS_NAMES: string[] = [
    'ace',
    'chopper',
    'dragon',
    'francky',
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

export const CARD_BACK: string = './assets/cards/luffy.png';

export const PLAYER1: Player = new Player(SCORE1);
export const PLAYER2: Player = new Player(SCORE2);

export const BOARD: Board = new Board();

export const TITLE: HTMLElement = document.getElementById(
    'title'
) as HTMLElement;
