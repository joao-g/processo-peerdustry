# Documentação do Jogo da Velha (TicTacToe)

## Descrição

Esta documentação descreve a classe `TicTacToe`, uma implementação em TypeScript do clássico jogo da velha, e os testes associados à sua funcionalidade. A classe `TicTacToe` implementa a lógica do jogo, incluindo a manipulação do tabuleiro, alternância de jogadores, verificação de vitórias e empates, e reinicialização do jogo. Os testes garantem que a lógica do jogo está funcionando corretamente.

## Classe `TicTacToe`

A classe `TicTacToe` representa o jogo da velha e inclui a lógica para jogar, verificar vitórias, e alternar entre jogadores.

### Propriedades

- `private board: string[][]` - Representa o tabuleiro do jogo, uma matriz 3x3 de strings que pode conter 'X', 'O', ou uma string vazia para células não ocupadas.
- `private currentPlayer: string` - Representa o jogador atual, que pode ser 'X' ou 'O'.

### Métodos

#### `constructor()`

Inicializa o tabuleiro com células vazias e define o jogador atual como 'X'. Também imprime o tabuleiro e o jogador da vez no console.

#### `initialize()`

Configura o jogo para reagir ao pressionamento de teclas, registrando um ouvinte de eventos para `keydown`.

#### `handleKeyPress(event: KeyboardEvent): void`

Maneja eventos de pressionamento de tecla e converte a tecla pressionada em uma posição no tabuleiro, chamando o método `play` para realizar a jogada.

#### `play(row: number, col: number): void`

Executa uma jogada na posição especificada no tabuleiro. Atualiza o tabuleiro com a marca do jogador atual, verifica se há uma vitória ou empate, e alterna para o próximo jogador se o jogo continuar.

#### `printBoard(): void`

Imprime o estado atual do tabuleiro no console.

#### `checkWin(player: string): boolean`

Verifica se o jogador especificado ganhou o jogo, verificando linhas, colunas e diagonais para padrões de vitória.

#### `isBoardFull(): boolean`

Verifica se o tabuleiro está cheio, indicando um empate se não houver mais células vazias.

#### `resetGame(): void`

Reinicia o tabuleiro e define o jogador atual como 'X', reiniciando o estado do jogo.

# Documentação dos testes

## Descrição

Esta documentação descreve os testes associados à classe `TicTacToe`, implementada em TypeScript. Os testes garantem que a lógica do jogo funciona conforme o esperado, verificando a inicialização, jogadas, alternância de jogadores, detecção de vitórias e empates, e o comportamento ao pressionar teclas.
