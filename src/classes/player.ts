export class Player {
    name: string;
    score: number;
    constructor(name: string) {
        this.name = name;
        this.score = 0;
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
}
