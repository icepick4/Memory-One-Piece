import { Player } from './classes/player';
import { Board } from './classes/board';

export const START: HTMLElement = document.getElementById(
    'start'
) as HTMLElement;

export const DIFFICULTY: HTMLSelectElement = document.getElementById(
    'difficulty'
) as HTMLSelectElement;

export const INPUT_PLAYER1: HTMLInputElement = document.getElementById(
    'player1'
) as HTMLInputElement;

export const INPUT_PLAYER2: HTMLInputElement = document.getElementById(
    'player2'
) as HTMLInputElement;

export const TITLE_PLAYER1: HTMLElement = document.getElementById(
    'player1Score'
) as HTMLElement;

export const TITLE_PLAYER2: HTMLElement = document.getElementById(
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

export const CHECKBOX_MODE: HTMLInputElement = document.getElementById(
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

export const SOUNDS_CHARACTERS_PATH: string = './assets/sounds/characters/';

export const SOUNDS_EFFECTS_PATH: string = './assets/sounds/cards_effects/';

export const CARD_BACK_PATH: string = './assets/cards/luffy.png';

export const PLAYER1: Player = new Player(SCORE1, TITLE_PLAYER1);
export const PLAYER2: Player = new Player(SCORE2, TITLE_PLAYER2);

export const BOARD: Board = new Board();

export const TITLE: HTMLElement = document.getElementById(
    'title'
) as HTMLElement;
