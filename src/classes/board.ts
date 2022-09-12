/*Class representing the board containg Cards*/
import { Card } from './card';
import { BOARD_CONTAINER, CARDS_NAMES } from './constants';
export class Board {
    cards: Card[];
    difficulty: number;
    width: number;
    height: number;
    playing: boolean;
    constructor() {
        this.difficulty = 0;
        this.playing = false;
        this.width = 0;
        this.height = 0;
        this.cards = [];
    }

    revealAll() {
        this.cards.forEach((card) => card.reveal());
    }

    hideAll() {
        this.cards.forEach((card) => card.hide());
    }

    toggleAll() {
        this.cards.forEach((card) => card.toggle());
    }

    initPlaying(difficulty: number) {
        this.difficulty = difficulty;
        this.initCards();
        this.initCardsImages(this.cards);
        this.initDimension();
        this.initBoardGrid();
        this.playing = true;
    }

    initCards() {
        console.log(CARDS_NAMES.length);
        if (this.difficulty === 1) {
            for (let i = 0; i < (4 * 3) / 2; i++) {
                let rand1 = Math.floor(Math.random() * CARDS_NAMES.length);
                let rand2 = Math.floor(Math.random() * this.cards.length);
                if (!this.checkCard(CARDS_NAMES[rand1])) {
                    this.cards.push(new Card(CARDS_NAMES[rand1]));
                    this.cards.splice(rand2, 0, new Card(CARDS_NAMES[rand1]));
                } else {
                    i--;
                }
            }
        } else if (this.difficulty === 2) {
            for (let i = 0; i < (5 * 4) / 2; i++) {
                let rand1 = Math.floor(Math.random() * CARDS_NAMES.length);
                let rand2 = Math.floor(Math.random() * this.cards.length);
                if (!this.checkCard(CARDS_NAMES[rand1])) {
                    this.cards.push(new Card(CARDS_NAMES[rand1]));
                    this.cards.splice(rand2, 0, new Card(CARDS_NAMES[rand1]));
                } else {
                    i--;
                }
            }
        } else if (this.difficulty === 3) {
            for (let i = 0; i < (6 * 5) / 2; i++) {
                let rand1 = Math.floor(Math.random() * CARDS_NAMES.length);
                let rand2 = Math.floor(Math.random() * this.cards.length);
                if (!this.checkCard(CARDS_NAMES[rand1])) {
                    this.cards.push(new Card(CARDS_NAMES[rand1]));
                    this.cards.splice(rand2, 0, new Card(CARDS_NAMES[rand1]));
                } else {
                    i--;
                }
            }
        }
    }

    checkCard(name: string) {
        let count = 0;
        this.cards.forEach((card) => {
            if (card.name === name) {
                count++;
            }
        });
        if (count === 2) {
            return true;
        } else {
            return false;
        }
    }

    initCardsImages(cards: Card[]) {
        cards.forEach((card) => {});
    }

    initDimension() {
        if (this.difficulty === 1) {
            this.width = 4;
            this.height = 3;
        } else if (this.difficulty === 2) {
            this.width = 5;
            this.height = 4;
        } else if (this.difficulty === 3) {
            this.width = 6;
            this.height = 5;
        } else {
            console.log('Error with difficulty init');
        }
    }

    initBoardGrid() {
        BOARD_CONTAINER.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
        BOARD_CONTAINER.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;
    }
}
