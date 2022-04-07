---
sidebar: false
---

# Exercício de Modelagem 1

[^UFF]


1. Escreva uma classe que represente um país. Um país tem como atributos o seu nome, o nome da capital, sua dimensão em Km<sup>2</sup> e uma lista de países com os quais ele faz fronteira. Represente a classe e forneça os seguintes construtores e método: 
    1. Construtor que inicialize o nome, capital e a dimensão do país;
    1. Métodos de acesso (obter/get) para as propriedades indicadas no item (1); 
    1. Um método que permita verificar se dois países são iguais. Dois países são iguais se tiverem o mesmo nome e a mesma capital. A assinatura deste método deve ser: 
        ```java
        public boolean equals(final Pais outro);
        ```
    1. Um método que define quais outros países fazem fronteira (note que um país não pode fazer fronteira com ele mesmo); 
    1. Um método que retorne a lista de países que fazem fronteira; 
    1. Um método que receba um outro país como parâmetro e retorne uma lista de vizinhos comuns aos dois países.

1. Identifique as classes, atributos e métodos necessários para modelar e implementar: 
    1. Uma conta corrente que possui um número, um saldo, um status que informa se ela é especial ou não, um limite e um conjunto de movimentações. 
    1. Uma movimentação que possui uma descrição, um valor e uma informação se ela é uma movimentação de crédito ou débito. 
    1. Um banco que armazene um conjunto de contas e forneça métodos que permitam que sejam feitos:
        1. criações de conta
        1. exclusão de contas
        1. saques
            - uma conta corrente só pode fazer saques desde que o valor não exceda o limite de saque
                -  limite de saque = saldo + limite da conta
        1. depósitos
        1. emissão de saldo 
        1. extrato 
        1. transferência entre contas.

<!--
1. Implemente uma classe que represente polinômios com uma variável. Esta classe deve conter: 
    1. Diferentes construtores; 
    1. Métodos de acesso; 
    1. Operações de adição e multiplicação.  
    1. Um método que faça a avaliação do polinômio, dado um número real x. Escreva, também, uma classe de testes para a classe que representa o polinômio. 
-->

    !!!include(src/ref.md)!!!