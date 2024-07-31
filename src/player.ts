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
