import { TicTacToe, Board, Player } from './index';

describe('Testes do Jogo da Velha', () => {
    let game: TicTacToe;

    beforeEach(() => {
        game = new TicTacToe();
        game.startGame();
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
        expect(game['board'].getBoard()).toEqual(emptyBoard);
    });

    test('Deve começar com o jogador X', () => {
        expect(game['player'].getCurrentPlayer()).toBe('X');
    });

    test('Deve colocar uma marca no "tabuleiro"', () => {
        game.handleMove(0, 0);
        expect(game['board'].getBoard()[0][0]).toBe('X');
    });

    test('Deve trocar de jogador após uma jogada', () => {
        game.handleMove(0, 0);
        expect(game['player'].getCurrentPlayer()).toBe('O');
        game.handleMove(1, 1);
        expect(game['player'].getCurrentPlayer()).toBe('X');
    });

    test('Verifica se o jogo não permite que um jogador faça uma jogada em um espaço já ocupado', () => {
        game.handleMove(0, 0);
        game.handleMove(0, 0);
        expect(game['board'].getBoard()[0][0]).toBe('X');
        expect(game['player'].getCurrentPlayer()).toBe('O');
    });

    test('Deve detectar uma vitória em linha', () => {
        game.handleMove(0, 0); // X
        game.handleMove(1, 0); // O
        game.handleMove(0, 1); // X
        game.handleMove(1, 1); // O
        game.handleMove(0, 2); // X - wins
        expect(game['board'].checkWin('X')).toBe(true);
    });

    test('Deve detectar uma vitória em uma coluna', () => {
        game.handleMove(0, 0); // X
        game.handleMove(0, 1); // O
        game.handleMove(1, 0); // X
        game.handleMove(1, 1); // O
        game.handleMove(2, 0); // X - wins
        expect(game['board'].checkWin('X')).toBe(true);
    });

    test('Deve detectar uma vitória em uma diagonal', () => {
        game.handleMove(0, 0); // X
        game.handleMove(0, 1); // O
        game.handleMove(1, 1); // X
        game.handleMove(1, 0); // O
        game.handleMove(2, 2); // X - wins
        expect(game['board'].checkWin('X')).toBe(true);
    });

    test('Deve detectar um empate', () => {
        game.handleMove(0, 0); // X
        game.handleMove(0, 1); // O
        game.handleMove(0, 2); // X
        game.handleMove(1, 0); // O
        game.handleMove(1, 2); // X
        game.handleMove(1, 1); // O
        game.handleMove(2, 0); // X
        game.handleMove(2, 2); // O
        game.handleMove(2, 1); // X 
        expect(game['board'].isFull()).toBe(true);
        expect(game['board'].checkWin('X')).toBe(false);
        expect(game['board'].checkWin('O')).toBe(false);
    });

    test('Deveria resetar o jogo', () => {
        game.handleMove(0, 0);
        game.startGame();
        const emptyBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        expect(game['board'].getBoard()).toEqual(emptyBoard);
        expect(game['player'].getCurrentPlayer()).toBe('X');
    });

    test('Verifica se o jogo está reagindo corretamente ao pressionamento de uma tecla específica', () => {
        const keyPressEvent = new KeyboardEvent('keydown', { key: 'q' });
        document.dispatchEvent(keyPressEvent);
        jest.advanceTimersByTime(100); // Avance o tempo para processar o evento
        expect(game['board'].getBoard()[0][0]).toBe('X');
    });

    test('O jogo está alternando corretamente entre os jogadores "X" e "O" após a pressão de teclas específicas', () => {
        const keyPressEventX = new KeyboardEvent('keydown', { key: 'q' });
        document.dispatchEvent(keyPressEventX);
        jest.advanceTimersByTime(100); // Avance o tempo para processar o evento
        expect(game['board'].getBoard()[0][0]).toBe('X');
        const keyPressEventO = new KeyboardEvent('keydown', { key: 'w' });
        document.dispatchEvent(keyPressEventO);
        jest.advanceTimersByTime(100); // Avance o tempo para processar o evento
        expect(game['board'].getBoard()[0][1]).toBe('O');
    });
});
