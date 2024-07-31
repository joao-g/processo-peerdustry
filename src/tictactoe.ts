import { Board } from './board';
import { Player } from './player';

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
