/*The class representing a card in the game*/
import {
    CARDS_PATH,
    CARD_BACK,
    rotate,
    SOUNDS_EFFECTS_PATH
} from './constants';
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
        this.image = CARDS_PATH + name + '.png';
        const cardElement = document.createElement('img');
        this.elementImage = cardElement;
        this.elementImage.id = 'back';
        this.elementImage.classList.add('card');
        this.elementImage.src = CARD_BACK;
        this.elementImage.classList.add('transition');
        rotate(this, 300);
        this.elementImage.addEventListener('click', () => {
            play(this);
        });
    }

    reveal() {
        let audio = new Audio(SOUNDS_EFFECTS_PATH + 'card_flip.mp3');
        audio.volume = 0.7;
        audio.play();
        this.elementImage.src = this.image;
        this.elementImage.id = 'front';
        this.revealed = true;
        rotate(this, 300);
    }

    hide() {
        let audio = new Audio(SOUNDS_EFFECTS_PATH + 'card_flip_back.mp3');
        audio.volume = 0.7;
        audio.play();
        this.revealed = false;
        this.elementImage.src = CARD_BACK;
        this.elementImage.id = 'back';
        rotate(this, 300);
    }

    equals(other: Card) {
        return this.name === other.name;
    }
}
