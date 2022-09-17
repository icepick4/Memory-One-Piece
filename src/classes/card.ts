/*The class representing a card in the game*/
import { CARDS_PATH, CARD_BACK_PATH, SOUNDS_EFFECTS_PATH } from '../constants';
import { audio, play, rotate } from '../functions';

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
        this.elementImage.src = CARD_BACK_PATH;
        this.elementImage.classList.add('card');
        this.elementImage.classList.add('transition');
        rotate(this, 300);
        this.elementImage.addEventListener('click', () => {
            play(this);
        });
    }

    reveal() {
        audio(SOUNDS_EFFECTS_PATH + 'card_flip.mp3', 0.7);
        this.elementImage.src = this.image;
        this.elementImage.id = 'front';
        this.revealed = true;
        rotate(this, 300);
    }

    hide() {
        audio(SOUNDS_EFFECTS_PATH + 'card_flip_back.mp3', 0.7);
        this.revealed = false;
        this.elementImage.src = CARD_BACK_PATH;
        this.elementImage.id = 'back';
        rotate(this, 300);
    }

    equals(other: Card) {
        return this.name === other.name;
    }
}
