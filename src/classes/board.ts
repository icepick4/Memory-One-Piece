/*Class representing the board containg Cards*/
import { Card } from './card';
import { BOARD_CONTAINER, CARDS_NAMES, CHECKBOX } from './constants';
export class Board {
    cards: Card[];
    revealedCards: Card[];
    wonCards: Card[];
    difficulty: number;
    width: number;
    height: number;
    playing: boolean;
    mode: string;

    constructor() {
        this.difficulty = 0;
        this.playing = false;
        this.width = 0;
        this.height = 0;
        this.cards = [];
        this.revealedCards = [];
        this.wonCards = [];
        this.mode = CHECKBOX.checked ? 'dual' : 'single';
    }

    initPlaying(difficulty: number) {
        this.difficulty = difficulty;
        this.initCardsArray();
        this.initCardsImages(this.cards);
        this.initDimension();
        this.initBoardGrid();
        this.playing = true;
    }

    //hide all cards except the won ones and the one passed in parameter
    hideAllNotWon(cardClicked: Card) {
        let hide: boolean = false;
        this.cards.forEach((card) => {
            if (!card.won && !card.equals(cardClicked) && card.revealed) {
                card.hide();
                hide = true;
            }
        });
        this.revealedCards = [];
        return hide;
    }

    turnEnded() {
        let ended: boolean = false;
        let ctr = 0;
        this.cards.forEach((card) => {
            if (card.revealed && !card.won) {
                ctr++;
            }
        });
        if (ctr == 2) {
            ended = true;
        }
        return ended;
    }

    //check if two cards are revealed and if they are equals return the name
    checkCardsRevealed() {
        let cardRevealed: Card;
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].revealed) {
                //store the first card revealed of the list
                cardRevealed = this.cards[i];
                //browse the list to find another card revealed
                for (let j = i + 1; j < this.cards.length; j++) {
                    //if both cards are revealed and equals -> return the name and check for the end of the game
                    if (
                        this.cards[j].revealed &&
                        this.cards[j].equals(cardRevealed) &&
                        !this.cards[j].won
                    ) {
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
        return null;
    }

    boardContains(name: string) {
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

    initCardsArray() {
        let nbCards: number =
            ((this.difficulty + 3) * (this.difficulty + 2)) / 2;
        for (let i = 0; i < nbCards; i++) {
            let randImage = Math.floor(Math.random() * CARDS_NAMES.length);
            let randPosition = Math.floor(
                Math.random() * this.cards.length + 1
            );
            if (!this.boardContains(CARDS_NAMES[randImage])) {
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
