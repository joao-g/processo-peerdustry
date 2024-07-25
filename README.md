# Documentação do Jogo da Velha

Esta documentação descreve a implementação de um jogo da velha (Tic-Tac-Toe) usando TypeScript (POO), HTML e CSS. O jogo permite que dois jogadores joguem alternadamente até que um ganhe ou o jogo termine em empate. A interface do usuário é criada com HTML e estilizada com CSS. Também inclui testes unitários utilizando Jest.

![Screenshot do Meu Projeto](interface.png)

## Estrutura do Projeto

- `index.html`: Arquivo HTML contendo a estrutura do jogo.
- `styles.css`: Arquivo CSS para estilizar a interface do jogo.
- `index.ts`: Arquivo TypeScript contendo a lógica do jogo.
- `index.test.ts`: Arquivo de teste para o jogo usando Jest.

## index.html

O arquivo `index.html` define a estrutura básica da interface do jogo da velha. 

### Estrutura do HTML

- **`<div class="game-container">`**: Contém todo o conteúdo do jogo.
  - **`<div id="board">`**: Representa o tabuleiro do jogo, composto por 9 células.
    - **`<div class="cell" data-row="x" data-col="y"></div>`**: Cada célula do tabuleiro é representada por um div com as classes `cell`, e atributos `data-row` e `data-col` que indicam a posição da célula no tabuleiro.
  - **`<button id="resetButton">Reiniciar Jogo</button>`**: Botão para reiniciar o jogo.
  - **`<p id="currentPlayer">Jogador da vez: X</p>`**: Parágrafo que exibe o jogador atual.

## styles.css

O arquivo `styles.css` estiliza a interface do jogo, garantindo que o tabuleiro e os elementos do jogo sejam visualmente agradáveis e fáceis de usar.

### Estilos Principais

- **Body**: Centraliza o conteúdo da página e define um fundo cinza claro.
  ```css
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
  }
  ```

- **Game Container**: Centraliza o conteúdo do jogo e define o alinhamento do texto.
  ```css
  .game-container {
      text-align: center;
  }
  ```

- **Board**: Cria uma grade 3x3 com células de 100px de largura e altura, com um espaçamento de 5px entre elas.
  ```css
  #board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 5px;
      margin-bottom: 20px;
  }
  ```

- **Cell**: Define o estilo das células do tabuleiro, incluindo tamanho, centralização do texto, bordas e efeitos de hover.
  ```css
  .cell {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      background-color: white;
      border: 1px solid #ccc;
      cursor: pointer;
  }

  .cell:hover {
      background-color: #e0e0e0;
  }
  ```

- **Reset Button**: Estiliza o botão de reinício do jogo.
  ```css
  #resetButton {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1em;
  }
  ```

## index.ts

A classe `TicTacToe` contém a lógica principal do jogo. Ela é responsável por gerenciar o estado do tabuleiro, alternar entre os jogadores, verificar as condições de vitória e empates, e atualizar a interface do usuário.

### Métodos Principais

- **`initialize()`**: Inicializa os eventos para teclas e cliques.
- **`handleKeyPress(event: KeyboardEvent)`**: Lida com eventos de teclas.
- **`handleCellClick(event: Event)`**: Lida com eventos de cliques nas células.
- **`play(row: number, col: number)`**: Executa uma jogada.
- **`checkWin(player: string)`**: Verifica se um jogador venceu.
- **`isBoardFull()`**: Verifica se o tabuleiro está cheio.
- **`resetGame()`**: Reinicia o jogo.

## Testes

Os testes são escritos usando Jest para garantir que a lógica do jogo funcione corretamente.

### index.test.ts

Os testes em Jest garantem que a funcionalidade do jogo esteja correta, incluindo o comportamento do tabuleiro, alternância de jogadores, detecção de vitórias e empates, e a reinicialização do jogo.

### Descrição dos Testes

1. **Deve começar com um tabuleiro vazio**:
   - Verifica se o tabuleiro inicial está vazio.
   
2. **Deve começar com o jogador X**:
   - Verifica se o jogador inicial é o 'X'.
   
3. **Deve colocar uma marca no "tabuleiro"**:
   - Verifica se uma jogada coloca a marca correta no tabuleiro.
   
4. **Deve trocar de jogador após uma jogada**:
   - Verifica se o jogador atual alterna após uma jogada.
   
5. **Verifica se o jogo não permite que um jogador faça uma jogada em um espaço já ocupado**:
   - Garante que uma célula ocupada não pode ser jogada novamente.
   
6. **Deve detectar uma vitória em linha**:
   - Verifica se o jogo detecta corretamente uma vitória em linha.
   
7. **Deve detectar uma vitória em uma coluna**:
   - Verifica se o jogo detecta corretamente uma vitória em coluna.
   
8. **Deve detectar uma vitória em uma diagonal**:
   - Verifica se o jogo detecta corretamente uma vitória em diagonal.
   
9. **Deve detectar um empate**:
   - Verifica se o jogo detecta corretamente um empate quando o tabuleiro está cheio e ninguém venceu.
   
10. **Deveria resetar o jogo**:
    - Verifica se o jogo reinicia corretamente, limpando o tabuleiro e resetando o jogador atual para 'X'.
    
11. **Verifica se o jogo está reagindo corretamente ao pressionamento de uma tecla específica**:
    - Testa se o jogo processa corretamente uma jogada feita por meio do pressionamento de teclas.
    
12. **O jogo está alternando corretamente entre os jogadores "X" e "O" após a pressão de teclas específicas**:
    - Verifica se o jogo alterna corretamente entre os jogadores quando as jogadas são feitas por meio de teclas.
