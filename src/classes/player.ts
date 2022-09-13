export class Player {
    name: string;
    score: number;
    playing: boolean;
    constructor() {
        this.name = '';
        this.score = 0;
        this.playing = false;
    }

    // Add a point to the player's score
    addPoint() {
        this.score++;
    }

    // Get the player's score
    getScore() {
        return this.score;
    }

    // Get the player's name
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
