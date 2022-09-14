import { TITLE } from './constants';

export class Player {
    name: string;
    score: number;
    playing: boolean;
    scoreHTML: HTMLElement;
    constructor(scoreHTML: HTMLElement) {
        this.name = '';
        this.score = 0;
        this.playing = false;
        this.scoreHTML = scoreHTML;
    }

    // Add a point to the player's score
    addPoint() {
        this.score++;
        this.scoreHTML.innerHTML = this.score.toString();
    }

    getScore() {
        return this.score;
    }

    getName() {
        return this.name;
    }

    // Set the player's name
    setName(name: string) {
        this.name = name;
    }

    stopPlaying() {
        this.playing = false;
    }

    startPlaying() {
        TITLE.innerHTML = this.name + ' is playing';
        this.playing = true;
    }

    isPlaying() {
        return this.playing;
    }

    clear() {
        this.name = '';
        this.score = 0;
        this.playing = false;
    }
}
