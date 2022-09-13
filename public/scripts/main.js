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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\n/*Class representing the board containg Cards*/\nconst card_1 = __webpack_require__(/*! ./card */ \"./src/classes/card.ts\");\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\nclass Board {\n    constructor() {\n        this.difficulty = 0;\n        this.playing = false;\n        this.width = 0;\n        this.height = 0;\n        this.cards = [];\n    }\n    hideAll() {\n        this.cards.forEach((card) => {\n            if (!card.won) {\n                card.hide();\n            }\n        });\n    }\n    toggleAll() {\n        this.cards.forEach((card) => card.toggle());\n    }\n    //check if two cards are revealed and if they are equals return the name\n    checkCardsRevealed() {\n        let cardRevealed;\n        for (let i = 0; i < this.cards.length; i++) {\n            if (this.cards[i].revealed) {\n                cardRevealed = this.cards[i];\n                for (let j = i + 1; j < this.cards.length; j++) {\n                    if (this.cards[j].revealed) {\n                        if (cardRevealed.equals(this.cards[j]) &&\n                            !this.cards[j].won) {\n                            console.log(cardRevealed.name);\n                            cardRevealed.won = true;\n                            this.cards[j].won = true;\n                            if (this.checkEnd()) {\n                                this.playing = false;\n                            }\n                            return cardRevealed.name;\n                        }\n                    }\n                }\n            }\n        }\n        console.log(this.cards);\n        return null;\n    }\n    initPlaying(difficulty) {\n        this.difficulty = difficulty;\n        this.initCards();\n        this.initCardsImages(this.cards);\n        this.initDimension();\n        this.initBoardGrid();\n        this.playing = true;\n    }\n    initCards() {\n        let nbCards = ((this.difficulty + 3) * (this.difficulty + 2)) / 2;\n        for (let i = 0; i < nbCards; i++) {\n            let randImage = Math.floor(Math.random() * constants_1.CARDS_NAMES.length);\n            let randPosition = Math.floor(Math.random() * this.cards.length + 1);\n            if (!this.checkCard(constants_1.CARDS_NAMES[randImage])) {\n                this.cards.push(new card_1.Card(constants_1.CARDS_NAMES[randImage]));\n                this.cards.splice(randPosition, 0, new card_1.Card(constants_1.CARDS_NAMES[randImage]));\n            }\n            else {\n                i--;\n            }\n        }\n    }\n    checkCard(name) {\n        for (let i = 0; i < this.cards.length; i++) {\n            if (this.cards[i].name === name) {\n                return true;\n            }\n        }\n        return false;\n    }\n    checkEnd() {\n        let end = true;\n        this.cards.forEach((card) => {\n            if (!card.won) {\n                end = false;\n            }\n        });\n        return end;\n    }\n    initCardsImages(cards) {\n        cards.forEach((card) => {\n            constants_1.BOARD_CONTAINER.appendChild(card.elementImage);\n        });\n    }\n    initDimension() {\n        if (this.difficulty === 1) {\n            this.width = 4;\n            this.height = 3;\n        }\n        else if (this.difficulty === 2) {\n            this.width = 5;\n            this.height = 4;\n        }\n        else if (this.difficulty === 3) {\n            this.width = 6;\n            this.height = 5;\n        }\n        else {\n            console.log('Error with difficulty init');\n        }\n    }\n    initBoardGrid() {\n        constants_1.BOARD_CONTAINER.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;\n        constants_1.BOARD_CONTAINER.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;\n    }\n    clear() {\n        this.cards.forEach((card) => {\n            constants_1.BOARD_CONTAINER.removeChild(card.elementImage);\n        });\n        this.cards = [];\n    }\n}\nexports.Board = Board;\nfunction shuffle(array) {\n    let currentIndex = array.length, randomIndex;\n    // While there remain elements to shuffle.\n    while (currentIndex != 0) {\n        // Pick a remaining element.\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex--;\n        // And swap it with the current element.\n        [array[currentIndex], array[randomIndex]] = [\n            array[randomIndex],\n            array[currentIndex]\n        ];\n    }\n    return array;\n}\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/board.ts?");

/***/ }),

/***/ "./src/classes/card.ts":
/*!*****************************!*\
  !*** ./src/classes/card.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\n/*The class representing a card in the game*/\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\nconst main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\nclass Card {\n    constructor(name) {\n        this.revealed = false;\n        this.name = name;\n        this.won = false;\n        this.image = './assets/cards/' + name + '.png';\n        const cardElement = document.createElement('img');\n        this.elementImage = cardElement;\n        this.elementImage.id = this.name;\n        this.elementImage.src = constants_1.CARD_BACK;\n        this.elementImage.addEventListener('click', () => {\n            (0, main_1.play)(this);\n        });\n    }\n    isWon() {\n        return this.won;\n    }\n    flip() {\n        this.elementImage.src = this.image;\n        this.revealed = true;\n    }\n    hide() {\n        this.revealed = false;\n        this.elementImage.src = constants_1.CARD_BACK;\n    }\n    toggle() {\n        this.revealed = !this.revealed;\n    }\n    toString() {\n        return this.name;\n    }\n    equals(other) {\n        return this.name === other.name;\n    }\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/card.ts?");

/***/ }),

/***/ "./src/classes/constants.ts":
/*!**********************************!*\
  !*** ./src/classes/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PLAYER2 = exports.PLAYER1 = exports.CARD_BACK = exports.CARDS_NAMES = exports.SCORE2 = exports.SCORE1 = exports.BOARD_CONTAINER = exports.PLAYER2SCORE = exports.PLAYER1SCORE = exports.PLAYER2NAME = exports.PLAYER1NAME = exports.DIFFICULTY = exports.START = void 0;\nconst player_1 = __webpack_require__(/*! ./player */ \"./src/classes/player.ts\");\nexports.START = document.getElementById('start');\nexports.DIFFICULTY = document.getElementById('difficulty');\nexports.PLAYER1NAME = document.getElementById('player1');\nexports.PLAYER2NAME = document.getElementById('player2');\nexports.PLAYER1SCORE = document.getElementById('player1Score');\nexports.PLAYER2SCORE = document.getElementById('player2Score');\nexports.BOARD_CONTAINER = document.getElementById('board');\nexports.SCORE1 = document.getElementById('score1');\nexports.SCORE2 = document.getElementById('score2');\nexports.CARDS_NAMES = [\n    'ace',\n    'chopper',\n    'dragon',\n    'francky',\n    'hancock',\n    'kaido',\n    'law',\n    'mihawk',\n    'nami',\n    'newgate',\n    'roger',\n    'robin',\n    'sanji',\n    'usopp',\n    'zoro'\n];\nexports.CARD_BACK = './assets/cards/luffy.png';\nexports.PLAYER1 = new player_1.Player();\nexports.PLAYER2 = new player_1.Player();\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/constants.ts?");

/***/ }),

/***/ "./src/classes/player.ts":
/*!*******************************!*\
  !*** ./src/classes/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nclass Player {\n    constructor() {\n        this.name = '';\n        this.score = 0;\n        this.playing = false;\n    }\n    // Add a point to the player's score\n    addPoint() {\n        this.score++;\n    }\n    // Get the player's score\n    getScore() {\n        return this.score;\n    }\n    // Get the player's name\n    getName() {\n        return this.name;\n    }\n    // Set the player's name\n    setName(name) {\n        this.name = name;\n    }\n    stopPlaying() {\n        this.playing = false;\n    }\n    startPlaying() {\n        this.playing = true;\n    }\n    isPlaying() {\n        return this.playing;\n    }\n    clear() {\n        this.name = '';\n        this.score = 0;\n        this.playing = false;\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/player.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.play = exports.BOARD = void 0;\nconst constants_1 = __webpack_require__(/*! ./classes/constants */ \"./src/classes/constants.ts\");\nconst board_1 = __webpack_require__(/*! ./classes/board */ \"./src/classes/board.ts\");\nexports.BOARD = new board_1.Board();\nlet counter = 1;\nconstants_1.START.addEventListener('click', () => {\n    clear();\n    init();\n});\nfunction init() {\n    const difficulty = getDifficulty(constants_1.DIFFICULTY.value);\n    constants_1.PLAYER1.setName(constants_1.PLAYER1NAME.value);\n    constants_1.PLAYER2.setName(constants_1.PLAYER2NAME.value);\n    exports.BOARD.initPlaying(difficulty);\n    constants_1.PLAYER1SCORE.innerHTML = constants_1.PLAYER1.getName().toString();\n    constants_1.PLAYER2SCORE.innerHTML = constants_1.PLAYER2.getName().toString();\n}\nfunction getDifficulty(difficulty) {\n    if (difficulty === 'easy') {\n        return 1;\n    }\n    else if (difficulty === 'medium') {\n        return 2;\n    }\n    else if (difficulty === 'hard') {\n        return 3;\n    }\n    else {\n        console.log('Error with difficulty');\n        return 'error';\n    }\n}\nfunction clear() {\n    exports.BOARD.clear();\n    constants_1.PLAYER1SCORE.innerHTML = '';\n    constants_1.PLAYER2SCORE.innerHTML = '';\n    constants_1.PLAYER1.clear();\n    constants_1.PLAYER2.clear();\n    let child = constants_1.BOARD_CONTAINER.lastElementChild;\n    while (child) {\n        constants_1.BOARD_CONTAINER.removeChild(child);\n        child = constants_1.BOARD_CONTAINER.lastElementChild;\n    }\n}\nfunction play(card) {\n    if (exports.BOARD.checkCardsRevealed() != null) {\n        console.log('2 cards revealed');\n        if (constants_1.PLAYER1.isPlaying()) {\n            constants_1.PLAYER1.addPoint();\n            constants_1.SCORE1.innerHTML = constants_1.PLAYER1.getScore().toString();\n        }\n        else {\n            constants_1.PLAYER2.addPoint();\n            constants_1.SCORE2.innerHTML = constants_1.PLAYER2.getScore().toString();\n        }\n    }\n    else {\n        if (counter % 2 == 0) {\n            //wait 1 second before flipping back\n            setTimeout(() => {\n                exports.BOARD.hideAll();\n            }, 1000);\n            if (constants_1.PLAYER1.isPlaying()) {\n                constants_1.PLAYER1.stopPlaying();\n                constants_1.PLAYER2.startPlaying();\n            }\n            else {\n                constants_1.PLAYER2.stopPlaying();\n                constants_1.PLAYER1.startPlaying();\n            }\n        }\n        else {\n            exports.BOARD.hideAll();\n            card.flip();\n        }\n    }\n    counter++;\n}\nexports.play = play;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/main.ts?");

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