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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Board = void 0;\r\n/*Class representing the board containg Cards*/\r\nconst card_1 = __webpack_require__(/*! ./card */ \"./src/classes/card.ts\");\r\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\r\nclass Board {\r\n    constructor() {\r\n        this.difficulty = 0;\r\n        this.playing = false;\r\n        this.width = 0;\r\n        this.height = 0;\r\n        this.cards = [];\r\n    }\r\n    revealAll() {\r\n        this.cards.forEach((card) => card.reveal());\r\n    }\r\n    hideAll() {\r\n        this.cards.forEach((card) => (card.revealed ? {} : card.hide()));\r\n    }\r\n    toggleAll() {\r\n        this.cards.forEach((card) => card.toggle());\r\n    }\r\n    //check if two cards are revealed and if they are equals return the name\r\n    checkCardsRevealed() {\r\n        let revealedCards = this.cards.filter((card) => card.revealed);\r\n        if (revealedCards.length === 2) {\r\n            if (revealedCards[0].equals(revealedCards[1])) {\r\n                return revealedCards[0].name;\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n    initPlaying(difficulty) {\r\n        this.difficulty = difficulty;\r\n        this.initCards();\r\n        this.initCardsImages(this.cards);\r\n        this.initDimension();\r\n        this.initBoardGrid();\r\n        this.playing = true;\r\n    }\r\n    initCards() {\r\n        let nbCards = ((this.difficulty + 3) * (this.difficulty + 2)) / 2;\r\n        for (let i = 0; i < nbCards; i++) {\r\n            let randImage = Math.floor(Math.random() * constants_1.CARDS_NAMES.length);\r\n            let randPosition = Math.floor(Math.random() * this.cards.length + 1);\r\n            if (!this.checkCard(constants_1.CARDS_NAMES[randImage])) {\r\n                this.cards.push(new card_1.Card(constants_1.CARDS_NAMES[randImage]));\r\n                this.cards.splice(randPosition, 0, new card_1.Card(constants_1.CARDS_NAMES[randImage]));\r\n            }\r\n            else {\r\n                i--;\r\n            }\r\n        }\r\n        console.log(this.cards);\r\n    }\r\n    checkCard(name) {\r\n        this.cards.forEach((card) => {\r\n            if (card.name === name) {\r\n                return true;\r\n            }\r\n        });\r\n        return false;\r\n    }\r\n    initCardsImages(cards) {\r\n        cards.forEach((card) => {\r\n            constants_1.BOARD_CONTAINER.appendChild(card.elementImage);\r\n        });\r\n    }\r\n    initDimension() {\r\n        if (this.difficulty === 1) {\r\n            this.width = 4;\r\n            this.height = 3;\r\n        }\r\n        else if (this.difficulty === 2) {\r\n            this.width = 5;\r\n            this.height = 4;\r\n        }\r\n        else if (this.difficulty === 3) {\r\n            this.width = 6;\r\n            this.height = 5;\r\n        }\r\n        else {\r\n            console.log('Error with difficulty init');\r\n        }\r\n    }\r\n    initBoardGrid() {\r\n        constants_1.BOARD_CONTAINER.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;\r\n        constants_1.BOARD_CONTAINER.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;\r\n    }\r\n    clear() {\r\n        this.cards.forEach((card) => {\r\n            constants_1.BOARD_CONTAINER.removeChild(card.elementImage);\r\n        });\r\n        this.cards = [];\r\n    }\r\n}\r\nexports.Board = Board;\r\nfunction shuffle(array) {\r\n    let currentIndex = array.length, randomIndex;\r\n    // While there remain elements to shuffle.\r\n    while (currentIndex != 0) {\r\n        // Pick a remaining element.\r\n        randomIndex = Math.floor(Math.random() * currentIndex);\r\n        currentIndex--;\r\n        // And swap it with the current element.\r\n        [array[currentIndex], array[randomIndex]] = [\r\n            array[randomIndex],\r\n            array[currentIndex]\r\n        ];\r\n    }\r\n    return array;\r\n}\r\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/board.ts?");

/***/ }),

/***/ "./src/classes/card.ts":
/*!*****************************!*\
  !*** ./src/classes/card.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Card = void 0;\r\n/*The class representing a card in the game*/\r\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\r\nconst main_1 = __webpack_require__(/*! ../main */ \"./src/main.ts\");\r\nclass Card {\r\n    constructor(name) {\r\n        this.revealed = false;\r\n        this.name = name;\r\n        this.image = './assets/cards/' + name + '.png';\r\n        const cardElement = document.createElement('img');\r\n        this.elementImage = cardElement;\r\n        this.elementImage.id = this.name;\r\n        this.elementImage.src = constants_1.CARD_BACK;\r\n        this.elementImage.addEventListener('click', main_1.play);\r\n    }\r\n    reveal() {\r\n        this.revealed = true;\r\n    }\r\n    flip() {\r\n        this.elementImage.src = this.image;\r\n    }\r\n    hide() {\r\n        this.revealed = false;\r\n    }\r\n    toggle() {\r\n        this.revealed = !this.revealed;\r\n    }\r\n    toString() {\r\n        return this.name;\r\n    }\r\n    equals(other) {\r\n        return this.name === other.name;\r\n    }\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/card.ts?");

/***/ }),

/***/ "./src/classes/constants.ts":
/*!**********************************!*\
  !*** ./src/classes/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PLAYER2 = exports.PLAYER1 = exports.CARD_BACK = exports.CARDS_NAMES = exports.BOARD_CONTAINER = exports.PLAYER2SCORE = exports.PLAYER1SCORE = exports.PLAYER2NAME = exports.PLAYER1NAME = exports.DIFFICULTY = exports.START = void 0;\r\nconst player_1 = __webpack_require__(/*! ./player */ \"./src/classes/player.ts\");\r\nexports.START = document.getElementById('start');\r\nexports.DIFFICULTY = document.getElementById('difficulty');\r\nexports.PLAYER1NAME = document.getElementById('player1');\r\nexports.PLAYER2NAME = document.getElementById('player2');\r\nexports.PLAYER1SCORE = document.getElementById('player1Score');\r\nexports.PLAYER2SCORE = document.getElementById('player2Score');\r\nexports.BOARD_CONTAINER = document.getElementById('board');\r\nexports.CARDS_NAMES = [\r\n    'ace',\r\n    'chopper',\r\n    'dragon',\r\n    'francky',\r\n    'hancock',\r\n    'kaido',\r\n    'law',\r\n    'mihawk',\r\n    'nami',\r\n    'newgate',\r\n    'roger',\r\n    'robin',\r\n    'sanji',\r\n    'usopp',\r\n    'zoro'\r\n];\r\nexports.CARD_BACK = './assets/cards/luffy.png';\r\nexports.PLAYER1 = new player_1.Player();\r\nexports.PLAYER2 = new player_1.Player();\r\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/constants.ts?");

/***/ }),

/***/ "./src/classes/player.ts":
/*!*******************************!*\
  !*** ./src/classes/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Player = void 0;\r\nclass Player {\r\n    constructor() {\r\n        this.name = '';\r\n        this.score = 0;\r\n        this.playing = false;\r\n    }\r\n    // Add a point to the player's score\r\n    addPoint() {\r\n        this.score++;\r\n    }\r\n    // Get the player's score\r\n    getScore() {\r\n        return this.score;\r\n    }\r\n    // Get the player's name\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    // Set the player's name\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n    stopPlaying() {\r\n        this.playing = false;\r\n    }\r\n    startPlaying() {\r\n        this.playing = true;\r\n    }\r\n    isPlaying() {\r\n        return this.playing;\r\n    }\r\n}\r\nexports.Player = Player;\r\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/player.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.play = exports.BOARD = void 0;\r\nconst constants_1 = __webpack_require__(/*! ./classes/constants */ \"./src/classes/constants.ts\");\r\nconst board_1 = __webpack_require__(/*! ./classes/board */ \"./src/classes/board.ts\");\r\nexports.BOARD = new board_1.Board();\r\nconstants_1.START.addEventListener('click', () => {\r\n    clear();\r\n    if (exports.BOARD.playing == false) {\r\n        init();\r\n    }\r\n});\r\nfunction init() {\r\n    const difficulty = getDifficulty(constants_1.DIFFICULTY.value);\r\n    constants_1.PLAYER1.setName(constants_1.PLAYER1NAME.value);\r\n    constants_1.PLAYER2.setName(constants_1.PLAYER2NAME.value);\r\n    exports.BOARD.initPlaying(difficulty);\r\n    constants_1.PLAYER1SCORE.innerHTML = constants_1.PLAYER1.getName().toString();\r\n    constants_1.PLAYER2SCORE.innerHTML = constants_1.PLAYER2.getName().toString();\r\n}\r\nfunction getDifficulty(difficulty) {\r\n    if (difficulty === 'easy') {\r\n        return 1;\r\n    }\r\n    else if (difficulty === 'medium') {\r\n        return 2;\r\n    }\r\n    else if (difficulty === 'hard') {\r\n        return 3;\r\n    }\r\n    else {\r\n        console.log('Error with difficulty');\r\n        return 'error';\r\n    }\r\n}\r\nfunction clear() {\r\n    exports.BOARD.clear();\r\n    constants_1.PLAYER1SCORE.innerHTML = '';\r\n    constants_1.PLAYER2SCORE.innerHTML = '';\r\n    let child = constants_1.BOARD_CONTAINER.lastElementChild;\r\n    while (child) {\r\n        constants_1.BOARD_CONTAINER.removeChild(child);\r\n        child = constants_1.BOARD_CONTAINER.lastElementChild;\r\n    }\r\n}\r\nfunction play() {\r\n    if (exports.BOARD.checkCardsRevealed() != null) {\r\n        if (constants_1.PLAYER1.isPlaying()) {\r\n            constants_1.PLAYER1.addPoint();\r\n            constants_1.PLAYER1SCORE.innerHTML = constants_1.PLAYER1.getScore().toString();\r\n        }\r\n        else {\r\n            constants_1.PLAYER2.addPoint();\r\n            constants_1.PLAYER2SCORE.innerHTML = constants_1.PLAYER2.getScore().toString();\r\n        }\r\n    }\r\n    else {\r\n        exports.BOARD.hideAll();\r\n    }\r\n}\r\nexports.play = play;\r\n\n\n//# sourceURL=webpack://memory-one-piece/./src/main.ts?");

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