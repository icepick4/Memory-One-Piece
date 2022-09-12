/*The class representing a card in the game*/

export class Card {
    revealed: boolean;
    name: string;
    image: string;
    constructor(name: string) {
        this.revealed = false;
        this.name = name;
        this.image = 'assets/images/' + name + '.png';
    }

    reveal() {
        this.revealed = true;
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
