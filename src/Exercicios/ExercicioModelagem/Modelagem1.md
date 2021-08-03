# Exercício de Modelagem 1

[^UFF]


1. Identifique as classes, atributos e métodos necessários para modelar e implementar: 
    1. Uma conta corrente que possui um número, um saldo, um status que informa se ela é especial ou não, um limite e um conjunto de movimentações. 
    1. Uma movimentação que possui uma descrição, um valor e uma informação se ela é uma movimentação de crédito ou débito. 
    1. Um banco que armazene um conjunto de contas e forneça métodos que permitam que sejam feitos criações de conta, exclusão de contas, saques (uma conta corrente só pode fazer saques desde que o valor não exceda o limite de saque‐limite + saldo negativo), depósitos, emissão de saldo e extrato e transferência entre contas.

1. Escreva uma classe que represente um país. Um país tem como atributos o seu nome, o nome da capital, sua dimensão em Km2 e uma lista de países com os quais ele faz fronteira. Represente a classe e forneça os seguintes construtores e método: 
    1. Construtor que inicialize o nome, capital e a dimensão do país;
    1. Métodos de acesso (obter/get) para as propriedades indicadas no item (a); 
    1. Um método que permita verificar se dois países são iguais. Dois países são iguais se tiverem o mesmo nome e a mesma capital. A assinatura deste método deve ser: 
    ```java
    public boolean equals(final Pais outro);
    ```
    1. Um método que define quais outros países fazem fronteira (note que um país não pode fazer fronteira com ele mesmo); 
    1. Um método que retorne a lista de países que fazem fronteira; 
    1. Um método que receba um outro país como parâmetro e retorne uma lista de vizinhos comuns aos dois paí.


1. Implemente uma classe que represente polinômios com uma variável.  Esta classe deve conter: 
    1. Diferentes construtores; 
    1. Métodos de acesso; 
    1. Operações de adição e multiplicação.  
    1. Um método que faça a avaliação do polinômio, dado um número real x. Escreva, também, uma classe de testes para a classe que representa o polinômio. 
4. De forma incremental, traduza o seguinte conjunto de classes em um programa Java. Importante: Não são permitidas chamadas a System.in, System.out ou similares de dentro das classes criadas. 
    1. Classe: Porta 
       
       Atributos: aberta, cor, dimensaoX, dimensaoY, dimensaoZ 
       
       Métodos: void abre(), void fecha(), void pinta(String s), boolean estaAberta() 
       
       Para testar, crie uma porta, abra e feche a mesma, pinte‐a de diversas cores, altere suas dimensões e use o método estaAberta para verificar se ela está aberta. 
    1. Classe: Casa 
    
        Atributos: cor, porta1, porta2, porta3 
        
        Método:  void  pinta(String  s),  int  quantasPortasEstaoAbertas(), int totalDePortas() 
        
        Para testar, crie uma casa e pinte‐a. Crie três portas e coloque‐as na casa; abra e feche as mesmas como desejar. Utilize o método quantasPortasEstaoAbertas para imprimir o número de portas abertas. 
        
    1. Classe: Edificio 
    
        Atributos: cor, totalDePortas, totalDeAndares, portas[] 
        
        Métodos:  void  pinta(String  s),  int  quantasPortasEstaoAbertas(), void adicionaPorta(Porta  p),  int  totalDePortas(),  void  adicionarAndar(),  int totalDeAndares() 
        
        Para testar, crie um edifício, pinte‐o. Crie seis portas e coloque‐as no edifício através do método adicionaPorta, abra e feche‐as como desejar. Utilize o método quantasPortasEstaoAbertas  para  imprimir  o  número  de  portas  abertas  e  o método totalDePortas para imprimir o total de portas em seu edifício. Cria alguns andares utilizado o método adicionarAndar e retorne o número total de andares utilizando o método totalDeAndares. 
        
    1. As classes Casa e edifício ficaram muito parecidas. Crie a classe Imovel e coloque nela tudo o Casa e Edificio tem em comum. Faça Imovel superclasse de Casa e Edificio. Note que alguns métodos em comum não poderão ser implementados por Imovel (e.g., quantasPortasEstaoAbertas e totalDePortas). Logo, esses deverão ser declarados como métodos 

    [^UFF]: Leandro A. F. Fernandes, Marcos Lage, Isabel Rosseti. 2ª Lista de Exercícios Orientação a Objetos. Universidade Federal Fluminense, Instituto de Computação, Departamento de Ciência da Computação, Programação de Computadores II