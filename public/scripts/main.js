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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\n/*Class representing the board containg Cards*/\nconst card_1 = __webpack_require__(/*! ./card */ \"./src/classes/card.ts\");\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\nclass Board {\n    constructor() {\n        this.difficulty = 0;\n        this.playing = false;\n        this.width = 0;\n        this.height = 0;\n        this.cards = [];\n    }\n    revealAll() {\n        this.cards.forEach((card) => card.reveal());\n    }\n    hideAll() {\n        this.cards.forEach((card) => card.hide());\n    }\n    toggleAll() {\n        this.cards.forEach((card) => card.toggle());\n    }\n    initPlaying(difficulty) {\n        this.difficulty = difficulty;\n        this.initCards();\n        this.initCardsImages(this.cards);\n        this.initDimension();\n        this.initBoardGrid();\n        this.playing = true;\n    }\n    initCards() {\n        console.log(constants_1.CARDS_NAMES.length);\n        if (this.difficulty === 1) {\n            for (let i = 0; i < (4 * 3) / 2; i++) {\n                let rand1 = Math.floor(Math.random() * constants_1.CARDS_NAMES.length);\n                let rand2 = Math.floor(Math.random() * this.cards.length);\n                if (!this.checkCard(constants_1.CARDS_NAMES[rand1])) {\n                    this.cards.push(new card_1.Card(constants_1.CARDS_NAMES[rand1]));\n                    this.cards.splice(rand2, 0, new card_1.Card(constants_1.CARDS_NAMES[rand1]));\n                }\n                else {\n                    i--;\n                }\n            }\n        }\n        else if (this.difficulty === 2) {\n            for (let i = 0; i < (5 * 4) / 2; i++) {\n                let rand1 = Math.floor(Math.random() * constants_1.CARDS_NAMES.length);\n                let rand2 = Math.floor(Math.random() * this.cards.length);\n                if (!this.checkCard(constants_1.CARDS_NAMES[rand1])) {\n                    this.cards.push(new card_1.Card(constants_1.CARDS_NAMES[rand1]));\n                    this.cards.splice(rand2, 0, new card_1.Card(constants_1.CARDS_NAMES[rand1]));\n                }\n                else {\n                    i--;\n                }\n            }\n        }\n        else if (this.difficulty === 3) {\n            for (let i = 0; i < (6 * 5) / 2; i++) {\n                let rand1 = Math.floor(Math.random() * constants_1.CARDS_NAMES.length);\n                let rand2 = Math.floor(Math.random() * this.cards.length);\n                if (!this.checkCard(constants_1.CARDS_NAMES[rand1])) {\n                    this.cards.push(new card_1.Card(constants_1.CARDS_NAMES[rand1]));\n                    this.cards.splice(rand2, 0, new card_1.Card(constants_1.CARDS_NAMES[rand1]));\n                }\n                else {\n                    i--;\n                }\n            }\n        }\n    }\n    checkCard(name) {\n        let count = 0;\n        this.cards.forEach((card) => {\n            if (card.name === name) {\n                count++;\n            }\n        });\n        if (count === 2) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    initCardsImages(cards) {\n        cards.forEach((card) => { });\n    }\n    initDimension() {\n        if (this.difficulty === 1) {\n            this.width = 4;\n            this.height = 3;\n        }\n        else if (this.difficulty === 2) {\n            this.width = 5;\n            this.height = 4;\n        }\n        else if (this.difficulty === 3) {\n            this.width = 6;\n            this.height = 5;\n        }\n        else {\n            console.log('Error with difficulty init');\n        }\n    }\n    initBoardGrid() {\n        constants_1.BOARD_CONTAINER.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;\n        constants_1.BOARD_CONTAINER.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;\n    }\n}\nexports.Board = Board;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/board.ts?");

/***/ }),

/***/ "./src/classes/card.ts":
/*!*****************************!*\
  !*** ./src/classes/card.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\n/*The class representing a card in the game*/\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/classes/constants.ts\");\nclass Card {\n    constructor(name) {\n        this.revealed = false;\n        this.name = name;\n        this.image = './assets/cards/' + name + '.png';\n        const cardElement = document.createElement('img');\n        this.elementImage = cardElement;\n        this.elementImage.id = this.name;\n        this.elementImage.src = constants_1.CARD_BACK;\n        this.elementImage.style.backgroundColor = 'grey';\n        this.elementImage.addEventListener('click', () => {\n            this.reveal();\n        });\n        constants_1.BOARD_CONTAINER.appendChild(this.elementImage);\n    }\n    reveal() {\n        this.revealed = true;\n        this.elementImage.src = this.image;\n        this.elementImage.style.backgroundColor = 'none';\n    }\n    hide() {\n        this.revealed = false;\n    }\n    toggle() {\n        this.revealed = !this.revealed;\n    }\n    toString() {\n        return this.name;\n    }\n    equals(other) {\n        return this.name === other.name;\n    }\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/card.ts?");

/***/ }),

/***/ "./src/classes/constants.ts":
/*!**********************************!*\
  !*** ./src/classes/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CARD_BACK = exports.CARDS_NAMES = exports.BOARD_CONTAINER = exports.PLAYER2SCORE = exports.PLAYER1SCORE = exports.PLAYER2NAME = exports.PLAYER1NAME = exports.DIFFICULTY = exports.START = void 0;\nexports.START = document.getElementById('start');\nexports.DIFFICULTY = document.getElementById('difficulty');\nexports.PLAYER1NAME = document.getElementById('player1');\nexports.PLAYER2NAME = document.getElementById('player2');\nexports.PLAYER1SCORE = document.getElementById('player1Score');\nexports.PLAYER2SCORE = document.getElementById('player2Score');\nexports.BOARD_CONTAINER = document.getElementById('board');\nexports.CARDS_NAMES = [\n    'ace',\n    'chopper',\n    'dragon',\n    'francky',\n    'hancock',\n    'kaido',\n    'law',\n    'mihawk',\n    'nami',\n    'newgate',\n    'roger',\n    'robin',\n    'sanji',\n    'usopp',\n    'zoro'\n];\nexports.CARD_BACK = './assets/cards/luffy.png';\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/constants.ts?");

/***/ }),

/***/ "./src/classes/player.ts":
/*!*******************************!*\
  !*** ./src/classes/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nclass Player {\n    constructor(name) {\n        this.name = name;\n        this.score = 0;\n    }\n    // Add a point to the player's score\n    addPoint() {\n        this.score++;\n    }\n    // Get the player's score\n    getScore() {\n        return this.score;\n    }\n    // Get the player's name\n    getName() {\n        return this.name;\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/player.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst constants_1 = __webpack_require__(/*! ./classes/constants */ \"./src/classes/constants.ts\");\nconst board_1 = __webpack_require__(/*! ./classes/board */ \"./src/classes/board.ts\");\nconst player_1 = __webpack_require__(/*! ./classes/player */ \"./src/classes/player.ts\");\nlet BOARD = new board_1.Board();\nconstants_1.START.addEventListener('click', () => {\n    clear();\n    if (BOARD.playing == false) {\n        init();\n    }\n});\nfunction init() {\n    const difficulty = getDifficulty(constants_1.DIFFICULTY.value);\n    const player1Name = constants_1.PLAYER1NAME.value;\n    const player2Name = constants_1.PLAYER2NAME.value;\n    BOARD.initPlaying(difficulty);\n    const player1 = new player_1.Player(player1Name);\n    const player2 = new player_1.Player(player2Name);\n    constants_1.PLAYER1SCORE.innerHTML = player1.getName().toString();\n    constants_1.PLAYER2SCORE.innerHTML = player2.getName().toString();\n}\nfunction getDifficulty(difficulty) {\n    if (difficulty === 'easy') {\n        return 1;\n    }\n    else if (difficulty === 'medium') {\n        return 2;\n    }\n    else if (difficulty === 'hard') {\n        return 3;\n    }\n    else {\n        console.log('Error with difficulty');\n        return 'error';\n    }\n}\nfunction clear() {\n    BOARD = new board_1.Board();\n    constants_1.PLAYER1SCORE.innerHTML = '';\n    constants_1.PLAYER2SCORE.innerHTML = '';\n    let child = constants_1.BOARD_CONTAINER.lastElementChild;\n    while (child) {\n        constants_1.BOARD_CONTAINER.removeChild(child);\n        child = constants_1.BOARD_CONTAINER.lastElementChild;\n    }\n}\n\n\n//# sourceURL=webpack://memory-one-piece/./src/main.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;