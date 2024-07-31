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
