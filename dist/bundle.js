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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TicTacToe: () => (/* binding */ TicTacToe)\n/* harmony export */ });\nclass TicTacToe {\n    constructor() {\n        this.board = [\n            ['', '', ''],\n            ['', '', ''],\n            ['', '', '']\n        ];\n        this.currentPlayer = 'X';\n        this.printBoard();\n        console.log(`Jogador da vez: ${this.currentPlayer}`);\n    }\n    initialize() {\n        var _a;\n        document.addEventListener('keydown', (event) => this.handleKeyPress(event));\n        document.querySelectorAll('.cell').forEach(cell => {\n            cell.addEventListener('click', (event) => this.handleCellClick(event));\n        });\n        (_a = document.getElementById('resetButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.resetGame());\n    }\n    handleKeyPress(event) {\n        const keyToPosition = {\n            'Q': [0, 0], 'W': [0, 1], 'E': [0, 2],\n            'A': [1, 0], 'S': [1, 1], 'D': [1, 2],\n            'Z': [2, 0], 'X': [2, 1], 'C': [2, 2],\n        };\n        const position = keyToPosition[event.key.toUpperCase()];\n        if (position) {\n            this.play(position[0], position[1]);\n        }\n    }\n    handleCellClick(event) {\n        const target = event.target;\n        const row = parseInt(target.getAttribute('data-row') || '0', 10);\n        const col = parseInt(target.getAttribute('data-col') || '0', 10);\n        this.play(row, col);\n    }\n    play(row, col) {\n        if (this.board[row][col] !== '') {\n            console.log('Posição já ocupada!');\n            return;\n        }\n        this.board[row][col] = this.currentPlayer;\n        console.log(`Jogada na posição: [${row}, ${col}] pelo jogador ${this.currentPlayer}`);\n        this.printBoard();\n        this.updateBoardUI();\n        if (this.checkWin(this.currentPlayer)) {\n            console.log(`Jogador ${this.currentPlayer} venceu!`);\n            alert(`Jogador ${this.currentPlayer} venceu!`);\n            return;\n        }\n        if (this.isBoardFull()) {\n            console.log('Empate!');\n            alert('Empate!');\n            return;\n        }\n        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';\n        console.log(`Jogador da vez: ${this.currentPlayer}`);\n        this.updateCurrentPlayerUI();\n    }\n    printBoard() {\n        console.log('Tabuleiro:');\n        this.board.forEach(row => console.log(row.join(' | ')));\n    }\n    updateBoardUI() {\n        this.board.forEach((row, rowIndex) => {\n            row.forEach((cell, colIndex) => {\n                const cellElement = document.querySelector(`.cell[data-row='${rowIndex}'][data-col='${colIndex}']`);\n                if (cellElement) {\n                    cellElement.textContent = cell;\n                }\n            });\n        });\n    }\n    updateCurrentPlayerUI() {\n        const currentPlayerElement = document.getElementById('currentPlayer');\n        if (currentPlayerElement) {\n            currentPlayerElement.textContent = `Jogador da vez: ${this.currentPlayer}`;\n        }\n    }\n    checkWin(player) {\n        const winPatterns = [\n            // Linhas\n            [[0, 0], [0, 1], [0, 2]],\n            [[1, 0], [1, 1], [1, 2]],\n            [[2, 0], [2, 1], [2, 2]],\n            // Colunas\n            [[0, 0], [1, 0], [2, 0]],\n            [[0, 1], [1, 1], [2, 1]],\n            [[0, 2], [1, 2], [2, 2]],\n            // Diagonais\n            [[0, 0], [1, 1], [2, 2]],\n            [[0, 2], [1, 1], [2, 0]]\n        ];\n        return winPatterns.some(pattern => pattern.every(([row, col]) => this.board[row][col] === player));\n    }\n    isBoardFull() {\n        return this.board.every(row => row.every(cell => cell !== ''));\n    }\n    resetGame() {\n        this.board = [\n            ['', '', ''],\n            ['', '', ''],\n            ['', '', '']\n        ];\n        this.currentPlayer = 'X';\n        console.log('Jogo reiniciado!');\n        this.printBoard();\n        this.updateBoardUI();\n        this.updateCurrentPlayerUI();\n    }\n}\nconst game = new TicTacToe();\ngame.initialize();\n\n\n//# sourceURL=webpack://peedustry-processo/./src/index.ts?");

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