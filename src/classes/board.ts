/*Class representing the board containg Cards*/
import { Card } from './card';
export class Board {
    cards: Card[];
    difficulty: number;
    width: number;
    height: number;
    playing: boolean;
    constructor(cards: Card[], difficulty: number) {
        this.cards = cards;
        this.difficulty = difficulty;
        this.playing = true;
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
            console.log('Error with difficulty');
            this.width = 0;
            this.height = 0;
        }
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
}
