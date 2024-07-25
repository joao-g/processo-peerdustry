import { TicTacToe } from './index';

describe('Testes do Jogo da Velha', () => {
    let game: TicTacToe;

    beforeEach(() => {
        game = new TicTacToe();
        game.initialize();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('Deve começar com um tabuleiro vazio', () => {
        const emptyBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        expect((game as any).board).toEqual(emptyBoard);
    });

    test('Deve começar com o jogador X', () => {
        expect((game as any).currentPlayer).toBe('X');
    });

    test('Deve colocar uma marca no "tabuleiro"', () => {
        (game as any).play(0, 0);
        expect((game as any).board[0][0]).toBe('X');
    });

    test('Deve trocar de jogador após uma jogada', () => {
        (game as any).play(0, 0);
        expect((game as any).currentPlayer).toBe('O');
        (game as any).play(1, 1);
        expect((game as any).currentPlayer).toBe('X');
    });

    test('Verifica se o jogo não permite que um jogador faça uma jogada em um espaço já ocupado', () => {
        (game as any).play(0, 0);
        (game as any).play(0, 0);
        expect((game as any).board[0][0]).toBe('X');
        expect((game as any).currentPlayer).toBe('O');
    });

    test('Deve detectar uma vitória em linha', () => {
        (game as any).play(0, 0); // X
        (game as any).play(1, 0); // O
        (game as any).play(0, 1); // X
        (game as any).play(1, 1); // O
        (game as any).play(0, 2); // X - wins
        expect((game as any).checkWin('X')).toBe(true);
    });

    test('Deve detectar uma vitoria em uma coluna', () => {
        (game as any).play(0, 0); // X
        (game as any).play(0, 1); // O
        (game as any).play(1, 0); // X
        (game as any).play(1, 1); // O
        (game as any).play(2, 0); // X - wins
        expect((game as any).checkWin('X')).toBe(true);
    });

    test('Deve detectar uma vitoria em uma diagonal', () => {
        (game as any).play(0, 0); // X
        (game as any).play(0, 1); // O
        (game as any).play(1, 1); // X
        (game as any).play(1, 0); // O
        (game as any).play(2, 2); // X - wins
        expect((game as any).checkWin('X')).toBe(true);
    });

    test('Deve detectar um empate', () => {
        (game as any).play(0, 0); // X
        (game as any).play(0, 1); // O
        (game as any).play(0, 2); // X
        (game as any).play(1, 0); // O
        (game as any).play(1, 2); // X
        (game as any).play(1, 1); // O
        (game as any).play(2, 0); // X
        (game as any).play(2, 2); // O
        (game as any).play(2, 1); // X 
        expect((game as any).isBoardFull()).toBe(true);
        expect((game as any).checkWin('X')).toBe(false);
        expect((game as any).checkWin('O')).toBe(false);
    });

    test('Deveria resetar o jogo', () => {
        (game as any).play(0, 0);
        (game as any).resetGame();
        const emptyBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        expect((game as any).board).toEqual(emptyBoard);
        expect((game as any).currentPlayer).toBe('X');
    });

    test('Verifica se o jogo está reagindo corretamente ao pressionamento de uma tecla específica', () => {
        const keyPressEvent = new KeyboardEvent('keydown', { key: 'Q' });
        document.dispatchEvent(keyPressEvent);
        jest.advanceTimersByTime(100); // Avance o tempo para processar o evento
        expect((game as any).board[0][0]).toBe('X');
    });

    test('O jogo está alternando corretamente entre os jogadores "X" e "O" após a pressão de teclas específicas', () => {
        const keyPressEventX = new KeyboardEvent('keydown', { key: 'Q' });
        document.dispatchEvent(keyPressEventX);
        jest.advanceTimersByTime(100); // Avance o tempo para processar o evento
        expect((game as any).board[0][0]).toBe('X');
        const keyPressEventO = new KeyboardEvent('keydown', { key: 'W' });
        document.dispatchEvent(keyPressEventO);
        jest.advanceTimersByTime(100); // Avance o tempo para processar o evento
        expect((game as any).board[0][1]).toBe('O');
    });
});
