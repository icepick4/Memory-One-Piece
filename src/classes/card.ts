/*The class representing a card in the game*/
import { CARD_BACK } from './constants';
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
        this.elementImage.id = 'back';
        this.elementImage.src = CARD_BACK;
        this.elementImage.classList.add('transition');
        this.elementImage.addEventListener('click', () => {
            play(this);
        });
    }

    reveal() {
        this.elementImage.src = this.image;
        this.elementImage.id = 'front';
        this.revealed = true;
    }

    hide() {
        this.revealed = false;
        this.elementImage.src = CARD_BACK;
        this.elementImage.id = 'back';
        this.elementImage.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            this.elementImage.style.transform = 'rotateY(0deg)';
        }, 310);
    }

    equals(other: Card) {
        return this.name === other.name;
    }
}
