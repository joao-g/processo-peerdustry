export class Board {
    private board: string[][];

    constructor() {
        this.board = this.createEmptyBoard();
    }

    private createEmptyBoard(): string[][] {
        return [['', '', ''], ['', '', ''], ['', '', '']];
    }

    reset(): void {
        this.board = this.createEmptyBoard();
    }

    getBoard(): string[][] {
        return this.board;
    }

    setMove(row: number, col: number, player: string): boolean {
        if (this.isValidPosition(row, col) && this.board[row][col] === '') {
            this.board[row][col] = player;
            return true;
        }
        return false;
    }

    isFull(): boolean {
        return this.board.every(row => row.every(cell => cell !== ''));
    }

    print(): void {
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

    private isValidPosition(row: number, col: number): boolean {
        return row >= 0 && row < 3 && col >= 0 && col < 3;
    }
}

export class Player {
    private currentPlayer: string;

    constructor() {
        this.currentPlayer = 'X';
    }

    reset(): void {
        this.currentPlayer = 'X';
    }

    getCurrentPlayer(): string {
        return this.currentPlayer;
    }

    switchPlayer(): void {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
}

export class TicTacToe {
    private board: Board;
    private player: Player;

    constructor() {
        this.board = new Board();
        this.player = new Player();
        this.initializeKeyboardControls();
    }

    startGame(): void {
        this.board.reset();
        this.player.reset();
        this.board.print();
        console.log(`Jogador da vez: ${this.player.getCurrentPlayer()}`);
    }

    handleMove(row: number, col: number): void {
        if (!this.board.setMove(row, col, this.player.getCurrentPlayer())) {
            console.log('Posição já ocupada ou inválida!');
            return;
        }

        this.board.print();

        if (this.board.checkWin(this.player.getCurrentPlayer())) {
            console.log(`Jogador ${this.player.getCurrentPlayer()} venceu!`);
            console.log('Pressione "R" para reiniciar o jogo.');
            return;
        }

        if (this.board.isFull()) {
            console.log('Empate!');
            console.log('Pressione "R" para reiniciar o jogo.');
            return;
        }

        this.player.switchPlayer();
        console.log(`Jogador da vez: ${this.player.getCurrentPlayer()}`);
    }

    private initializeKeyboardControls(): void {
        const keyToPositionMap: { [key: string]: [number, number] } = {
            'q': [0, 0], 'w': [0, 1], 'e': [0, 2],
            'a': [1, 0], 's': [1, 1], 'd': [1, 2],
            'z': [2, 0], 'x': [2, 1], 'c': [2, 2]
        };

        document.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();
            if (key === 'r') {
                this.startGame();
                return;
            }

            const position = keyToPositionMap[key];
            if (position) {
                this.handleMove(position[0], position[1]);
            }
        });
    }
}

// Inicialização
const game = new TicTacToe();
game.startGame();
