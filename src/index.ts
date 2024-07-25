export class TicTacToe {
    private board: string[][];
    private currentPlayer: string;

    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.printBoard();
        console.log(`Jogador da vez: ${this.currentPlayer}`);
    }

    initialize() {
        document.addEventListener('keydown', (event) => this.handleKeyPress(event));
    }

    handleKeyPress(event: KeyboardEvent): void {
        const keyToPosition: { [key: string]: number[] } = {
            'Q': [0, 0], 'W': [0, 1], 'E': [0, 2],
            'A': [1, 0], 'S': [1, 1], 'D': [1, 2],
            'Z': [2, 0], 'X': [2, 1], 'C': [2, 2],
        };

        const position = keyToPosition[event.key.toUpperCase()];

        if (position) {
            this.play(position[0], position[1]);
        }
    }

    play(row: number, col: number): void {
        if (this.board[row][col] !== '') {
            console.log('Posição já ocupada!');
            return;
        }

        this.board[row][col] = this.currentPlayer;
        console.log(`Jogada na posição: [${row}, ${col}] pelo jogador ${this.currentPlayer}`);
        this.printBoard();

        if (this.checkWin(this.currentPlayer)) {
            console.log(`Jogador ${this.currentPlayer} venceu!`);
            return;
        }

        if (this.isBoardFull()) {
            console.log('Empate!');
            return;
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        console.log(`Jogador da vez: ${this.currentPlayer}`);
    }
    
    printBoard(): void {
        console.log('Tabuleiro:');
        this.board.forEach(row => console.log(row.join(' | ')));
    }

    checkWin(player: string): boolean {
        const winPatterns = [
            // Linhas
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Colunas
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonais
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        return winPatterns.some(pattern =>
            pattern.every(([row, col]) => this.board[row][col] === player)
        );
    }

    isBoardFull(): boolean {
        return this.board.every(row => row.every(cell => cell !== ''));
    }

    resetGame(): void {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        console.log('Jogo reiniciado!');
        this.printBoard();
    }
}

const game = new TicTacToe();
game.initialize();
