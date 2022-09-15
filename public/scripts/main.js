/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/board.ts":
/*!******************************!*\
  !*** ./src/classes/board.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\n/*Class representing the board containg Cards*/\nconst card_1 = __webpack_require__(/*! ./card */ \"./src/classes/card.ts\");\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\nclass Board {\n    constructor() {\n        this.difficulty = 0;\n        this.playing = false;\n        this.width = 0;\n        this.height = 0;\n        this.cards = [];\n        this.revealedCards = [];\n        this.wonCards = [];\n    }\n    initPlaying(difficulty) {\n        this.difficulty = difficulty;\n        this.initCardsArray();\n        this.initCardsImages(this.cards);\n        this.initDimension();\n        this.initBoardGrid();\n        this.playing = true;\n    }\n    //hide all cards except the won ones and the one passed in parameter\n    hideAllNotWon(cardClicked) {\n        let hide = false;\n        this.cards.forEach((card) => {\n            if (!card.won && !card.equals(cardClicked) && card.revealed) {\n                card.hide();\n                hide = true;\n            }\n        });\n        this.revealedCards = [];\n        return hide;\n    }\n    turnEnded() {\n        let ended = false;\n        let ctr = 0;\n        this.cards.forEach((card) => {\n            if (card.revealed && !card.won) {\n                ctr++;\n            }\n        });\n        if (ctr == 2) {\n            ended = true;\n        }\n        return ended;\n    }\n    //check if two cards are revealed and if they are equals return the name\n    checkCardsRevealed() {\n        let cardRevealed;\n        for (let i = 0; i < this.cards.length; i++) {\n            if (this.cards[i].revealed) {\n                //store the first card revealed of the list\n                cardRevealed = this.cards[i];\n                //browse the list to find another card revealed\n                for (let j = i + 1; j < this.cards.length; j++) {\n                    //if both cards are revealed and equals -> return the name and check for the end of the game\n                    if (this.cards[j].revealed &&\n                        this.cards[j].equals(cardRevealed) &&\n                        !this.cards[j].won) {\n                        cardRevealed.won = true;\n                        this.cards[j].won = true;\n                        if (this.checkEnd()) {\n                            this.playing = false;\n                        }\n                        return cardRevealed.name;\n                    }\n                }\n            }\n        }\n        return null;\n    }\n    boardContains(name) {\n        for (let i = 0; i < this.cards.length; i++) {\n            if (this.cards[i].name === name) {\n                return true;\n            }\n        }\n        return false;\n    }\n    checkEnd() {\n        let end = true;\n        this.cards.forEach((card) => {\n            if (!card.won) {\n                end = false;\n            }\n        });\n        return end;\n    }\n    initCardsImages(cards) {\n        cards.forEach((card) => {\n            constants_1.BOARD_CONTAINER.appendChild(card.elementImage);\n        });\n    }\n    initCardsArray() {\n        let nbCards = ((this.difficulty + 3) * (this.difficulty + 2)) / 2;\n        for (let i = 0; i < nbCards; i++) {\n            let randImage = Math.floor(Math.random() * constants_1.CARDS_NAMES.length);\n            let randPosition = Math.floor(Math.random() * this.cards.length + 1);\n            if (!this.boardContains(constants_1.CARDS_NAMES[randImage])) {\n                this.cards.push(new card_1.Card(constants_1.CARDS_NAMES[randImage]));\n                this.cards.splice(randPosition, 0, new card_1.Card(constants_1.CARDS_NAMES[randImage]));\n            }\n            else {\n                i--;\n            }\n        }\n    }\n    initDimension() {\n        if (this.difficulty === 1) {\n            this.width = 4;\n            this.height = 3;\n        }\n        else if (this.difficulty === 2) {\n            this.width = 5;\n            this.height = 4;\n        }\n        else if (this.difficulty === 3) {\n            this.width = 6;\n            this.height = 5;\n        }\n        else {\n            console.log('Error with difficulty init');\n        }\n    }\n    initBoardGrid() {\n        constants_1.BOARD_CONTAINER.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;\n        constants_1.BOARD_CONTAINER.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;\n    }\n    clear() {\n        this.cards.forEach((card) => {\n            constants_1.BOARD_CONTAINER.removeChild(card.elementImage);\n        });\n        this.cards = [];\n    }\n}\nexports.Board = Board;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/board.ts?");

/***/ }),

/***/ "./src/classes/card.ts":
/*!*****************************!*\
  !*** ./src/classes/card.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\n/*The class representing a card in the game*/\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\nconst main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nclass Card {\n    constructor(name) {\n        this.revealed = false;\n        this.name = name;\n        this.won = false;\n        this.image = './assets/cards/' + name + '.png';\n        const cardElement = document.createElement('img');\n        this.elementImage = cardElement;\n        this.elementImage.id = 'back';\n        this.elementImage.src = constants_1.CARD_BACK;\n        this.elementImage.classList.add('transition');\n        (0, constants_1.rotate)(this);\n        this.elementImage.addEventListener('click', () => {\n            (0, main_1.play)(this);\n        });\n    }\n    reveal() {\n        this.elementImage.src = this.image;\n        this.elementImage.id = 'front';\n        this.revealed = true;\n    }\n    hide() {\n        this.revealed = false;\n        this.elementImage.src = constants_1.CARD_BACK;\n        this.elementImage.id = 'back';\n        (0, constants_1.rotate)(this);\n    }\n    equals(other) {\n        return this.name === other.name;\n    }\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/card.ts?");

/***/ }),

/***/ "./src/classes/constants.ts":
/*!**********************************!*\
  !*** ./src/classes/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rotate = exports.TITLE = exports.BOARD = exports.PLAYER2 = exports.PLAYER1 = exports.CARD_BACK = exports.CARDS_NAMES = exports.SCORE2 = exports.SCORE1 = exports.BOARD_CONTAINER = exports.PLAYER2SCORE = exports.PLAYER1SCORE = exports.PLAYER2NAME = exports.PLAYER1NAME = exports.DIFFICULTY = exports.START = void 0;\nconst player_1 = __webpack_require__(/*! ./player */ \"./src/classes/player.ts\");\nconst board_1 = __webpack_require__(/*! ./board */ \"./src/classes/board.ts\");\nexports.START = document.getElementById('start');\nexports.DIFFICULTY = document.getElementById('difficulty');\nexports.PLAYER1NAME = document.getElementById('player1');\nexports.PLAYER2NAME = document.getElementById('player2');\nexports.PLAYER1SCORE = document.getElementById('player1Score');\nexports.PLAYER2SCORE = document.getElementById('player2Score');\nexports.BOARD_CONTAINER = document.getElementById('board');\nexports.SCORE1 = document.getElementById('score1');\nexports.SCORE2 = document.getElementById('score2');\nexports.CARDS_NAMES = [\n    'ace',\n    'chopper',\n    'dragon',\n    'francky',\n    'hancock',\n    'kaido',\n    'law',\n    'mihawk',\n    'nami',\n    'newgate',\n    'roger',\n    'robin',\n    'sanji',\n    'usopp',\n    'zoro'\n];\nexports.CARD_BACK = './assets/cards/luffy.png';\nexports.PLAYER1 = new player_1.Player(exports.SCORE1);\nexports.PLAYER2 = new player_1.Player(exports.SCORE2);\nexports.BOARD = new board_1.Board();\nexports.TITLE = document.getElementById('title');\nfunction rotate(card) {\n    card.elementImage.style.transform = 'rotateY(180deg)';\n    setTimeout(() => {\n        card.elementImage.style.transform = 'rotateY(0deg)';\n    }, 300);\n}\nexports.rotate = rotate;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/constants.ts?");

/***/ }),

/***/ "./src/classes/player.ts":
/*!*******************************!*\
  !*** ./src/classes/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\nclass Player {\n    constructor(scoreHTML) {\n        this.name = '';\n        this.score = 0;\n        this.playing = false;\n        this.scoreHTML = scoreHTML;\n    }\n    // Add a point to the player's score\n    addPoint() {\n        this.score++;\n        this.scoreHTML.innerHTML = this.score.toString();\n    }\n    getScore() {\n        return this.score;\n    }\n    getName() {\n        return this.name;\n    }\n    // Set the player's name\n    setName(name) {\n        this.name = name;\n    }\n    stopPlaying() {\n        this.playing = false;\n    }\n    startPlaying() {\n        constants_1.TITLE.innerHTML = this.name + ' is playing';\n        this.playing = true;\n    }\n    isPlaying() {\n        return this.playing;\n    }\n    clear() {\n        this.name = '';\n        this.score = 0;\n        this.playing = false;\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/player.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.play = void 0;\nconst constants_1 = __webpack_require__(/*! ./classes/constants */ \"./src/classes/constants.ts\");\nlet counter = 1;\nconstants_1.START.addEventListener('click', () => {\n    clear();\n    init();\n});\nfunction init() {\n    const difficulty = getDifficulty(constants_1.DIFFICULTY.value);\n    constants_1.PLAYER1.setName(constants_1.PLAYER1NAME.value);\n    constants_1.PLAYER2.setName(constants_1.PLAYER2NAME.value);\n    constants_1.PLAYER1SCORE.innerHTML = constants_1.PLAYER1.name;\n    constants_1.PLAYER2SCORE.innerHTML = constants_1.PLAYER2.name;\n    constants_1.BOARD.initPlaying(difficulty);\n    constants_1.PLAYER1.startPlaying();\n}\nfunction play(card) {\n    if (!constants_1.BOARD.turnEnded() && !card.revealed && !card.won) {\n        card.reveal();\n        (0, constants_1.rotate)(card);\n    }\n    else {\n        return;\n    }\n    if (constants_1.BOARD.checkCardsRevealed() != null) {\n        if (constants_1.PLAYER1.isPlaying()) {\n            constants_1.PLAYER1.addPoint();\n        }\n        else {\n            constants_1.PLAYER2.addPoint();\n        }\n        if (constants_1.BOARD.checkEnd()) {\n            constants_1.TITLE.innerHTML = getEndMessage();\n        }\n    }\n    else {\n        if (counter % 2 == 0) {\n            //wait 1 second before flipping back\n            setTimeout(() => {\n                constants_1.BOARD.hideAllNotWon({});\n                switchPlayers();\n            }, 1000);\n        }\n        else {\n            constants_1.BOARD.hideAllNotWon(card);\n        }\n    }\n    counter++;\n}\nexports.play = play;\nfunction getDifficulty(difficulty) {\n    if (difficulty === 'easy') {\n        return 1;\n    }\n    else if (difficulty === 'medium') {\n        return 2;\n    }\n    else if (difficulty === 'hard') {\n        return 3;\n    }\n    else {\n        console.log('Error with difficulty');\n        return 'error';\n    }\n}\nfunction clear() {\n    constants_1.BOARD.clear();\n    constants_1.PLAYER1.clear();\n    constants_1.PLAYER2.clear();\n    constants_1.SCORE1.innerHTML = '0';\n    constants_1.SCORE2.innerHTML = '0';\n    let child = constants_1.BOARD_CONTAINER.lastElementChild;\n    while (child) {\n        constants_1.BOARD_CONTAINER.removeChild(child);\n        child = constants_1.BOARD_CONTAINER.lastElementChild;\n    }\n}\nfunction switchPlayers() {\n    if (constants_1.PLAYER1.isPlaying()) {\n        constants_1.PLAYER1.stopPlaying();\n        constants_1.PLAYER2.startPlaying();\n    }\n    else {\n        constants_1.PLAYER2.stopPlaying();\n        constants_1.PLAYER1.startPlaying();\n    }\n}\nfunction getEndMessage() {\n    let message;\n    if (constants_1.PLAYER1.getScore() > constants_1.PLAYER2.getScore()) {\n        message =\n            constants_1.PLAYER1.getName() +\n                ' won with ' +\n                constants_1.PLAYER1.getScore().toString() +\n                ' points against ' +\n                constants_1.PLAYER2.getName() +\n                ' who had ' +\n                constants_1.PLAYER2.getScore().toString() +\n                ' points.';\n    }\n    else if (constants_1.PLAYER1.getScore() < constants_1.PLAYER2.getScore()) {\n        message =\n            constants_1.PLAYER2.getName() +\n                ' won with ' +\n                constants_1.PLAYER2.getScore().toString() +\n                ' points against ' +\n                constants_1.PLAYER1.getName() +\n                ' who had ' +\n                constants_1.PLAYER1.getScore().toString() +\n                ' points.';\n    }\n    else {\n        message =\n            'It was a tie! Both players have ' +\n                constants_1.PLAYER1.getScore().toString() +\n                ' points.';\n    }\n    return message;\n}\n\n\n//# sourceURL=webpack://memory-one-piece/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;