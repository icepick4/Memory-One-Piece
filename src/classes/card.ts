/*The class representing a card in the game*/
import { CARD_BACK } from './constants';
import { play } from '../main';

export class Card {
    revealed: boolean;
    name: string;
    image: string;
    elementImage: HTMLImageElement;
    constructor(name: string) {
        this.revealed = false;
        this.name = name;
        this.image = './assets/cards/' + name + '.png';
        const cardElement = document.createElement('img');
        this.elementImage = cardElement;
        this.elementImage.id = this.name;
        this.elementImage.src = CARD_BACK;
        this.elementImage.addEventListener('click', play());
    }

    reveal() {
        this.revealed = true;
    }

    flip() {
        this.elementImage.src = this.image;
    }

    hide() {
        this.revealed = false;
    }

    toggle() {
        this.revealed = !this.revealed;
    }

    toString() {
        return this.name;
    }

    equals(other: Card) {
        return this.name === other.name;
    }
}
