# POO Avaliação

1. Vamos elaborar um código para desenvolver um jogo de tabuleiro (apenas classes para modelar o problema, não será jogável nem terá interface gráfica) considerando o tabuleiro padrão do Xadrez. Esse tabuleiro pode ser utilizado para 3 jogos diferentes:
    - Dama
    - Xadrez
    - Chaturanga

    Deve ser oportunizado ao usuário de sua aplicação a escolha de qual jogo ele gostaria de iniciar a partida. 

    Independente do jogo escolhido o sistema irá solicitar que essa instância `monteTabuleiro()` e depois `inicieJogo()`;

    Durante a montagem do tabuleiro o sistema deve construir e posicionar as peças de forma específica para cada jogo.

    Cada peça terá seu *Sprite*(imagem que define a aparência) e sua definição de movimento que não podem ser modificados durante a partida;

    Existem 3 tipos de movimentos possíveis:

    - Vertical
    - Horizontal
    - Diagonal

    Na montagem do jogo de **Damas** devem ser construídos dois conjuntos de 4 peças que se movem na diagonal sendo que o primeiro conjunto deve ter o *sprite* `DamaBranca.jpg` e o segundo conjunto `DamaPreta.jpg`;

    Na montagem do jogo de **Xadrez** devem ser construídos dois conjuntos (Pretas e Brancas) de 6 peças (Rei, Rainha, Bispo, Cavalo, Torre, Peão) com os seguintes movimentos:

    | Peça   | Movimento  | sprites                            |
    | ------ | ---------- | ---------------------------------- |
    | Rei    | Vertical   | `ReiPreto.jpg` e `ReiBranca.jpg`       |
    | Rainha | Horizontal | `RainhaPreto.jpg` e `RainhaBranca.jpg` |
    | Bispo  | Diagonal   | `BispoPreto.jpg` e `BispoBranca.jpg`   |
    | Cavalo | Vertical   | `CavaloPreto.jpg` e `CavaloBranca.jpg` |
    | Torre  | Horizontal | `TorrePreto.jpg` e `TorreBranca.jpg`   |
    | Peão   | Horizontal | `PeaoPreto.jpg` e `PeaoBranca.jpg`     |

    A montagem do jogo **Chaturanga** deve seguir com as mesmas regras do Xadrez mas no lugar no Cavalo será um Elefante.

    Por fim, crie uma classe que irá utilizar as classes que foram definidas e mostre de que forma serão utilizadas completando o código a seguir:

    ```java
    ...
    Jogo jogo;
    Scanner sc = new Scanner(System.in);
    int opcao = 0;
    System.out.println("## Escolha uma das opções abaixo ##");
    System.out.println("Opção 1 - Dama");
    System.out.println("Opção 2 - Xadrez");
    System.out.println("Opção 3 - Chaturanga");
    System.out.println("_______________________");
    System.out.print("Digite aqui sua opção: ");
    opcao = Integer.parseInt(sc.nextLine());
    ...    
    jogo = new ...
    ...
    jogo.monteTabuleiro();
    jogo.inicieJogo();
    ...
    ```

    Considere os conceitos vistos na disciplina.

2. O almoxarifado de uma empresa estoca materiais e deve fazer o controle disso. Para cada material ali depositado, deve-se saber o seu código numérico, seu nome e a quantidade no estoque. A quantidade só pode ser alterada quando há retiradas ou abastecimentos, o nome e o código devem ser definidos uma única vez e deve ser possível visualizar essas informações quando necessário. 

    Crie as classes para atender a descrição acima.