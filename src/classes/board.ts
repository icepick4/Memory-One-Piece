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
        this.cards.forEach((card) => (card.revealed ? {} : card.hide()));
    }

    toggleAll() {
        this.cards.forEach((card) => card.toggle());
    }

    //check if two cards are revealed and if they are equals return the name
    checkCardsRevealed() {
        let revealedCards = this.cards.filter((card) => card.revealed);
        if (revealedCards.length === 2) {
            if (revealedCards[0].equals(revealedCards[1])) {
                return revealedCards[0].name;
            }
        }
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
        console.log(this.cards);
    }

    checkCard(name: string) {
        this.cards.forEach((card) => {
            if (card.name === name) {
                return true;
            }
        });
        return false;
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
