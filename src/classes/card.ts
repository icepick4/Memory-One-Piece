/*The class representing a card in the game*/
import { BOARD, CARD_BACK } from './constants';
import { play } from '../main';

export class Card {
    revealed: boolean;
    name: string;
    image: string;
    elementImage: HTMLImageElement;
    won: boolean;
    constructor(name: string) {
        this.revealed = false;
        this.name = name;
        this.won = false;
        this.image = './assets/cards/' + name + '.png';
        const cardElement = document.createElement('img');
        this.elementImage = cardElement;
        this.elementImage.id = this.name;
        this.elementImage.src = CARD_BACK;
        this.elementImage.addEventListener('click', () => {
            play(this);
        });
    }

    flip() {
        this.elementImage.src = this.image;
        this.revealed = true;
    }

    hide() {
        this.revealed = false;
        this.elementImage.src = CARD_BACK;
    }

    equals(other: Card) {
        return this.name === other.name;
    }
}
