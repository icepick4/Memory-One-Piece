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

    hideAll() {
        this.cards.forEach((card) => {
            if (!card.won) {
                card.hide();
            }
        });
    }

    toggleAll() {
        this.cards.forEach((card) => card.toggle());
    }

    //check if two cards are revealed and if they are equals return the name
    checkCardsRevealed() {
        let cardRevealed: Card;
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].revealed) {
                cardRevealed = this.cards[i];
                for (let j = i + 1; j < this.cards.length; j++) {
                    if (this.cards[j].revealed) {
                        if (
                            cardRevealed.equals(this.cards[j]) &&
                            !this.cards[j].won
                        ) {
                            console.log(cardRevealed.name);
                            cardRevealed.won = true;
                            this.cards[j].won = true;
                            if (this.checkEnd()) {
                                this.playing = false;
                            }
                            return cardRevealed.name;
                        }
                    }
                }
            }
        }
        console.log(this.cards);
        return null;
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
        let nbCards: number =
            ((this.difficulty + 3) * (this.difficulty + 2)) / 2;
        for (let i = 0; i < nbCards; i++) {
            let randImage = Math.floor(Math.random() * CARDS_NAMES.length);
            let randPosition = Math.floor(
                Math.random() * this.cards.length + 1
            );
            if (!this.checkCard(CARDS_NAMES[randImage])) {
                this.cards.push(new Card(CARDS_NAMES[randImage]));
                this.cards.splice(
                    randPosition,
                    0,
                    new Card(CARDS_NAMES[randImage])
                );
            } else {
                i--;
            }
        }
    }

    checkCard(name: string) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].name === name) {
                return true;
            }
        }
        return false;
    }

    checkEnd() {
        let end = true;
        this.cards.forEach((card) => {
            if (!card.won) {
                end = false;
            }
        });
        return end;
    }

    initCardsImages(cards: Card[]) {
        cards.forEach((card) => {
            BOARD_CONTAINER.appendChild(card.elementImage);
        });
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

    clear() {
        this.cards.forEach((card) => {
            BOARD_CONTAINER.removeChild(card.elementImage);
        });
        this.cards = [];
    }
}

function shuffle(array: Card[]) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }

    return array;
}
