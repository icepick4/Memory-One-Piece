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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\n/*Class representing the board containg Cards*/\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\nconst functions_1 = __webpack_require__(/*! ../functions */ \"./src/functions.ts\");\nconst card_1 = __webpack_require__(/*! ./card */ \"./src/classes/card.ts\");\nclass Board {\n    constructor() {\n        this.difficulty = 0;\n        this.playing = false;\n        this.width = 0;\n        this.height = 0;\n        this.cards = [];\n        this.revealedCards = [];\n        this.wonCards = [];\n        this.mode = constants_1.CHECKBOX_MODE.checked ? 'dual' : 'single';\n    }\n    initPlaying(difficulty) {\n        (0, functions_1.audio)(constants_1.SOUNDS_EFFECTS_PATH + 'starting.mp3', 1);\n        this.difficulty = difficulty;\n        this.initCardsArray();\n        this.initCardsImages(this.cards);\n        this.initDimension();\n        this.initBoardGrid();\n        this.playing = true;\n    }\n    /**\n     *\n     * @param cardClicked\n     * @description hide all cards except the won ones and the one passed in parameter\n     * @returns return true if the card passed in parameter is hidden\n     */\n    hideAllNotWon(cardClicked) {\n        let hide = false;\n        this.cards.forEach((card) => {\n            if (!card.won && !card.equals(cardClicked) && card.revealed) {\n                card.hide();\n                hide = true;\n            }\n        });\n        this.revealedCards = [];\n        return hide;\n    }\n    turnEnded() {\n        let ended = false;\n        let ctr = 0;\n        this.cards.forEach((card) => {\n            if (card.revealed && !card.won) {\n                ctr++;\n            }\n        });\n        if (ctr == 2) {\n            ended = true;\n        }\n        return ended;\n    }\n    //check if two cards are revealed and if they are equals return the name\n    checkCardsRevealed() {\n        let cardRevealed;\n        for (let i = 0; i < this.cards.length; i++) {\n            if (this.cards[i].revealed) {\n                //store the first card revealed of the list\n                cardRevealed = this.cards[i];\n                //browse the list to find another card revealed\n                for (let j = i + 1; j < this.cards.length; j++) {\n                    //if both cards are revealed and equals -> return the name and check for the end of the game\n                    if (this.cards[j].revealed &&\n                        this.cards[j].equals(cardRevealed) &&\n                        !this.cards[j].won) {\n                        cardRevealed.won = true;\n                        this.cards[j].won = true;\n                        if (this.checkEnd()) {\n                            this.playing = false;\n                        }\n                        return cardRevealed.name;\n                    }\n                }\n            }\n        }\n        return null;\n    }\n    boardContains(name) {\n        for (let i = 0; i < this.cards.length; i++) {\n            if (this.cards[i].name === name) {\n                return true;\n            }\n        }\n        return false;\n    }\n    checkEnd() {\n        let end = true;\n        this.cards.forEach((card) => {\n            if (!card.won) {\n                end = false;\n            }\n        });\n        return end;\n    }\n    initCardsImages(cards) {\n        cards.forEach((card) => {\n            constants_1.BOARD_CONTAINER.appendChild(card.elementImage);\n        });\n    }\n    /**\n     * @description Init the cards array\n     * set the cards array depending on the difficulty set before in {@link initPlaying()}\n     */\n    initCardsArray() {\n        let nbCards = ((this.difficulty + 3) * (this.difficulty + 2)) / 2;\n        for (let i = 0; i < nbCards; i++) {\n            let randImage = Math.floor(Math.random() * constants_1.CARDS_NAMES.length);\n            let randPosition = Math.floor(Math.random() * this.cards.length + 1);\n            if (!this.boardContains(constants_1.CARDS_NAMES[randImage])) {\n                this.cards.push(new card_1.Card(constants_1.CARDS_NAMES[randImage]));\n                this.cards.splice(randPosition, 0, new card_1.Card(constants_1.CARDS_NAMES[randImage]));\n            }\n            else {\n                i--;\n            }\n        }\n    }\n    initDimension() {\n        let checkMobile;\n        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n            checkMobile = true;\n        }\n        else {\n            checkMobile = false;\n        }\n        if (this.difficulty === 1) {\n            if (!checkMobile) {\n                this.width = 4;\n                this.height = 3;\n            }\n            else {\n                this.width = 3;\n                this.height = 4;\n            }\n        }\n        else if (this.difficulty === 2) {\n            if (!checkMobile) {\n                this.width = 5;\n                this.height = 4;\n            }\n            else {\n                this.width = 4;\n                this.height = 5;\n            }\n        }\n        else if (this.difficulty === 3) {\n            if (!checkMobile) {\n                this.width = 6;\n                this.height = 5;\n            }\n            else {\n                this.width = 5;\n                this.height = 6;\n            }\n        }\n        else {\n            console.log('Error with difficulty init');\n        }\n    }\n    /**\n     * @description Init the board grid\n     * set the grid of the board depending on width and height set before in {@link initDimension()}\n     */\n    initBoardGrid() {\n        constants_1.BOARD_CONTAINER.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;\n        constants_1.BOARD_CONTAINER.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;\n    }\n    clear() {\n        this.cards.forEach((card) => {\n            constants_1.BOARD_CONTAINER.removeChild(card.elementImage);\n        });\n        this.cards = [];\n        this.mode = constants_1.CHECKBOX_MODE.checked ? 'dual' : 'single';\n    }\n}\nexports.Board = Board;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/board.ts?");

/***/ }),

/***/ "./src/classes/card.ts":
/*!*****************************!*\
  !*** ./src/classes/card.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\n/*The class representing a card in the game*/\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\nconst functions_1 = __webpack_require__(/*! ../functions */ \"./src/functions.ts\");\nclass Card {\n    constructor(name) {\n        this.revealed = false;\n        this.name = name;\n        this.won = false;\n        this.image = constants_1.CARDS_PATH + name + '.png';\n        const cardElement = document.createElement('img');\n        this.elementImage = cardElement;\n        this.elementImage.id = 'back';\n        this.elementImage.src = constants_1.CARD_BACK_PATH;\n        this.elementImage.classList.add('card');\n        this.elementImage.classList.add('transition');\n        (0, functions_1.rotate)(this, 300);\n        this.elementImage.addEventListener('click', () => {\n            (0, functions_1.play)(this);\n        });\n    }\n    reveal() {\n        (0, functions_1.audio)(constants_1.SOUNDS_EFFECTS_PATH + 'card_flip.mp3', 0.7);\n        this.elementImage.src = this.image;\n        this.elementImage.id = 'front';\n        this.revealed = true;\n        (0, functions_1.rotate)(this, 300);\n    }\n    hide() {\n        (0, functions_1.audio)(constants_1.SOUNDS_EFFECTS_PATH + 'card_flip_back.mp3', 0.7);\n        this.revealed = false;\n        this.elementImage.src = constants_1.CARD_BACK_PATH;\n        this.elementImage.id = 'back';\n        (0, functions_1.rotate)(this, 300);\n    }\n    equals(other) {\n        return this.name === other.name;\n    }\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/card.ts?");

/***/ }),

/***/ "./src/classes/player.ts":
/*!*******************************!*\
  !*** ./src/classes/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\nclass Player {\n    constructor(scoreHTML, nameElement) {\n        this.name = '';\n        this.score = 0;\n        this.playing = false;\n        this.scoreHTML = scoreHTML;\n        this.nameElement = nameElement;\n    }\n    // Add a point to the player's score\n    addPoint() {\n        this.score++;\n        this.scoreHTML.innerHTML = this.score.toString();\n    }\n    getScore() {\n        return this.score;\n    }\n    getName() {\n        return this.name;\n    }\n    // Set the player's name\n    setName(name) {\n        this.name = name;\n    }\n    stopPlaying() {\n        this.playing = false;\n        this.nameElement.classList.remove('playing');\n    }\n    startPlaying() {\n        constants_1.TITLE.innerHTML = this.name + ' is playing';\n        this.nameElement.classList.add('playing');\n        this.playing = true;\n    }\n    isPlaying() {\n        return this.playing;\n    }\n    clear() {\n        this.name = '';\n        this.score = 0;\n        this.playing = false;\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack://memory-one-piece/./src/classes/player.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TITLE = exports.BOARD = exports.PLAYER2 = exports.PLAYER1 = exports.CARD_BACK_PATH = exports.SOUNDS_EFFECTS_PATH = exports.SOUNDS_CHARACTERS_PATH = exports.CARDS_PATH = exports.CARDS_NAMES = exports.DUAL_MODE_TAGS = exports.CHECKBOX_MODE = exports.SCORE2 = exports.SCORE1 = exports.BOARD_CONTAINER = exports.TITLE_PLAYER2 = exports.TITLE_PLAYER1 = exports.INPUT_PLAYER2 = exports.INPUT_PLAYER1 = exports.DIFFICULTY = exports.START = void 0;\nconst player_1 = __webpack_require__(/*! ./classes/player */ \"./src/classes/player.ts\");\nconst board_1 = __webpack_require__(/*! ./classes/board */ \"./src/classes/board.ts\");\nexports.START = document.getElementById('start');\nexports.DIFFICULTY = document.getElementById('difficulty');\nexports.INPUT_PLAYER1 = document.getElementById('player1');\nexports.INPUT_PLAYER2 = document.getElementById('player2');\nexports.TITLE_PLAYER1 = document.getElementById('player1Score');\nexports.TITLE_PLAYER2 = document.getElementById('player2Score');\nexports.BOARD_CONTAINER = document.getElementById('board');\nexports.SCORE1 = document.getElementById('score1');\nexports.SCORE2 = document.getElementById('score2');\nexports.CHECKBOX_MODE = document.getElementById('checkbox');\nexports.DUAL_MODE_TAGS = document.getElementsByClassName('dual-mode');\nexports.CARDS_NAMES = [\n    'ace',\n    'chopper',\n    'dragon',\n    'franky',\n    'hancock',\n    'kaido',\n    'law',\n    'mihawk',\n    'nami',\n    'newgate',\n    'roger',\n    'robin',\n    'sanji',\n    'usopp',\n    'zoro'\n];\nexports.CARDS_PATH = './assets/cards/';\nexports.SOUNDS_CHARACTERS_PATH = './assets/sounds/characters/';\nexports.SOUNDS_EFFECTS_PATH = './assets/sounds/cards_effects/';\nexports.CARD_BACK_PATH = './assets/cards/luffy.png';\nexports.PLAYER1 = new player_1.Player(exports.SCORE1, exports.TITLE_PLAYER1);\nexports.PLAYER2 = new player_1.Player(exports.SCORE2, exports.TITLE_PLAYER2);\nexports.BOARD = new board_1.Board();\nexports.TITLE = document.getElementById('title');\n\n\n//# sourceURL=webpack://memory-one-piece/./src/constants.ts?");

/***/ }),

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.play = exports.clear = exports.getDifficulty = exports.audio = exports.rotate = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\nlet counter = 1;\n/**\n * \"Rotate the card 180 degrees, then after a certain amount of time, rotate it back to 0 degrees.\"\n * @param {Card} card - Card - The card to rotate\n * @param {number} speed - The speed of the rotation in milliseconds.\n */\nfunction rotate(card, speed) {\n    card.elementImage.style.transform = 'rotateY(180deg)';\n    setTimeout(() => {\n        card.elementImage.style.transform = 'rotateY(0deg)';\n    }, speed);\n}\nexports.rotate = rotate;\nfunction audio(src, volume) {\n    let audio = new Audio(src);\n    audio.volume = volume;\n    audio.play();\n}\nexports.audio = audio;\nfunction getDifficulty(difficulty) {\n    if (difficulty === 'easy') {\n        return 1;\n    }\n    else if (difficulty === 'medium') {\n        return 2;\n    }\n    else if (difficulty === 'hard') {\n        return 3;\n    }\n    else {\n        console.log('Error with difficulty');\n        return 'error';\n    }\n}\nexports.getDifficulty = getDifficulty;\nfunction clear() {\n    constants_1.BOARD.clear();\n    constants_1.PLAYER1.clear();\n    constants_1.PLAYER2.clear();\n    constants_1.SCORE1.innerHTML = '0';\n    constants_1.SCORE2.innerHTML = '0';\n    constants_1.TITLE.innerHTML = 'Memory One Piece';\n    counter = 1;\n    let child = constants_1.BOARD_CONTAINER.lastElementChild;\n    while (child) {\n        constants_1.BOARD_CONTAINER.removeChild(child);\n        child = constants_1.BOARD_CONTAINER.lastElementChild;\n    }\n}\nexports.clear = clear;\nfunction play(card) {\n    if (!constants_1.BOARD.turnEnded() && !card.revealed && !card.won) {\n        card.reveal();\n    }\n    else {\n        return;\n    }\n    if (constants_1.BOARD.checkCardsRevealed() != null) {\n        audio(constants_1.SOUNDS_CHARACTERS_PATH + card.name + '.mp3', 0.7);\n        if (constants_1.BOARD.mode == 'dual') {\n            if (constants_1.PLAYER1.isPlaying()) {\n                constants_1.PLAYER1.addPoint();\n            }\n            else {\n                constants_1.PLAYER2.addPoint();\n            }\n        }\n        if (constants_1.BOARD.checkEnd()) {\n            constants_1.TITLE.innerHTML = getEndMessage();\n            return;\n        }\n    }\n    else {\n        //check if its the second card flipped\n        if (counter % 2 == 0) {\n            //wait 1.25 seconds before flipping back\n            setTimeout(() => {\n                constants_1.BOARD.hideAllNotWon({});\n                if (constants_1.BOARD.mode == 'dual') {\n                    switchPlayers();\n                }\n            }, 1250);\n        }\n        else {\n            constants_1.BOARD.hideAllNotWon(card);\n        }\n    }\n    if (constants_1.BOARD.mode == 'single') {\n        constants_1.TITLE.innerHTML =\n            'Moves :' + ((counter - (counter % 2)) / 2).toString();\n    }\n    counter++;\n}\nexports.play = play;\nfunction switchPlayers() {\n    if (constants_1.BOARD.mode == 'dual') {\n        if (constants_1.PLAYER1.isPlaying()) {\n            constants_1.PLAYER1.stopPlaying();\n            constants_1.PLAYER2.startPlaying();\n        }\n        else {\n            constants_1.PLAYER2.stopPlaying();\n            constants_1.PLAYER1.startPlaying();\n        }\n    }\n}\nfunction getEndMessage() {\n    let message;\n    if (constants_1.PLAYER1.getScore() > constants_1.PLAYER2.getScore()) {\n        message =\n            constants_1.PLAYER1.getName() +\n                ' won with ' +\n                constants_1.PLAYER1.getScore().toString() +\n                ' points against ' +\n                constants_1.PLAYER2.getName() +\n                ' who had ' +\n                constants_1.PLAYER2.getScore().toString() +\n                ' points.';\n    }\n    else if (constants_1.PLAYER1.getScore() < constants_1.PLAYER2.getScore()) {\n        message =\n            constants_1.PLAYER2.getName() +\n                ' won with ' +\n                constants_1.PLAYER2.getScore().toString() +\n                ' points against ' +\n                constants_1.PLAYER1.getName() +\n                ' who had ' +\n                constants_1.PLAYER1.getScore().toString() +\n                ' points.';\n    }\n    else {\n        if (constants_1.BOARD.mode == 'dual') {\n            message =\n                'It was a tie! Both players have ' +\n                    constants_1.PLAYER1.getScore().toString() +\n                    ' points.';\n        }\n        else {\n            message =\n                'You won in ' +\n                    ((counter - (counter % 2)) / 2).toString() +\n                    ' moves!';\n        }\n    }\n    return message;\n}\n\n\n//# sourceURL=webpack://memory-one-piece/./src/functions.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\nconst functions_1 = __webpack_require__(/*! ./functions */ \"./src/functions.ts\");\nconstants_1.START.addEventListener('click', () => {\n    (0, functions_1.clear)();\n    init();\n});\nconstants_1.CHECKBOX_MODE.addEventListener('change', () => {\n    //change between single and dual mode\n    if (!constants_1.CHECKBOX_MODE.checked) {\n        for (let i = 0; i < constants_1.DUAL_MODE_TAGS.length; i++) {\n            constants_1.DUAL_MODE_TAGS[i].classList.add('hidden');\n        }\n    }\n    else {\n        for (let i = 0; i < constants_1.DUAL_MODE_TAGS.length; i++) {\n            constants_1.DUAL_MODE_TAGS[i].classList.remove('hidden');\n        }\n    }\n});\nfunction init() {\n    const difficulty = (0, functions_1.getDifficulty)(constants_1.DIFFICULTY.value);\n    constants_1.PLAYER1.setName(constants_1.INPUT_PLAYER1.value);\n    constants_1.PLAYER2.setName(constants_1.INPUT_PLAYER2.value);\n    constants_1.TITLE_PLAYER1.innerHTML = constants_1.PLAYER1.name;\n    constants_1.TITLE_PLAYER2.innerHTML = constants_1.PLAYER2.name;\n    constants_1.BOARD.initPlaying(difficulty);\n    if (constants_1.BOARD.mode == 'dual') {\n        constants_1.PLAYER1.startPlaying();\n    }\n}\n\n\n//# sourceURL=webpack://memory-one-piece/./src/main.ts?");

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