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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   TicTacToe: () => (/* binding */ TicTacToe)\n/* harmony export */ });\nclass Board {\n    constructor() {\n        this.board = this.createEmptyBoard();\n    }\n    createEmptyBoard() {\n        return [['', '', ''], ['', '', ''], ['', '', '']];\n    }\n    reset() {\n        this.board = this.createEmptyBoard();\n    }\n    getBoard() {\n        return this.board;\n    }\n    setMove(row, col, player) {\n        if (this.isValidPosition(row, col) && this.board[row][col] === '') {\n            this.board[row][col] = player;\n            return true;\n        }\n        return false;\n    }\n    isFull() {\n        return this.board.every(row => row.every(cell => cell !== ''));\n    }\n    print() {\n        console.log('Tabuleiro:');\n        this.board.forEach(row => console.log(row.join(' | ')));\n    }\n    checkWin(player) {\n        const winPatterns = [\n            // Linhas\n            [[0, 0], [0, 1], [0, 2]],\n            [[1, 0], [1, 1], [1, 2]],\n            [[2, 0], [2, 1], [2, 2]],\n            // Colunas\n            [[0, 0], [1, 0], [2, 0]],\n            [[0, 1], [1, 1], [2, 1]],\n            [[0, 2], [1, 2], [2, 2]],\n            // Diagonais\n            [[0, 0], [1, 1], [2, 2]],\n            [[0, 2], [1, 1], [2, 0]]\n        ];\n        return winPatterns.some(pattern => pattern.every(([row, col]) => this.board[row][col] === player));\n    }\n    isValidPosition(row, col) {\n        return row >= 0 && row < 3 && col >= 0 && col < 3;\n    }\n}\nclass Player {\n    constructor() {\n        this.currentPlayer = 'X';\n    }\n    reset() {\n        this.currentPlayer = 'X';\n    }\n    getCurrentPlayer() {\n        return this.currentPlayer;\n    }\n    switchPlayer() {\n        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';\n    }\n}\nclass TicTacToe {\n    constructor() {\n        this.board = new Board();\n        this.player = new Player();\n        this.initializeKeyboardControls();\n    }\n    startGame() {\n        this.board.reset();\n        this.player.reset();\n        this.board.print();\n        console.log(`Jogador da vez: ${this.player.getCurrentPlayer()}`);\n    }\n    handleMove(row, col) {\n        if (!this.board.setMove(row, col, this.player.getCurrentPlayer())) {\n            console.log('Posição já ocupada ou inválida!');\n            return;\n        }\n        this.board.print();\n        if (this.board.checkWin(this.player.getCurrentPlayer())) {\n            console.log(`Jogador ${this.player.getCurrentPlayer()} venceu!`);\n            console.log('Pressione \"R\" para reiniciar o jogo.');\n            return;\n        }\n        if (this.board.isFull()) {\n            console.log('Empate!');\n            console.log('Pressione \"R\" para reiniciar o jogo.');\n            return;\n        }\n        this.player.switchPlayer();\n        console.log(`Jogador da vez: ${this.player.getCurrentPlayer()}`);\n    }\n    initializeKeyboardControls() {\n        const keyToPositionMap = {\n            'q': [0, 0], 'w': [0, 1], 'e': [0, 2],\n            'a': [1, 0], 's': [1, 1], 'd': [1, 2],\n            'z': [2, 0], 'x': [2, 1], 'c': [2, 2]\n        };\n        document.addEventListener('keydown', (event) => {\n            const key = event.key.toLowerCase();\n            if (key === 'r') {\n                this.startGame();\n                return;\n            }\n            const position = keyToPositionMap[key];\n            if (position) {\n                this.handleMove(position[0], position[1]);\n            }\n        });\n    }\n}\n// Inicialização\nconst game = new TicTacToe();\ngame.startGame();\n\n\n//# sourceURL=webpack://peedustry-processo/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;