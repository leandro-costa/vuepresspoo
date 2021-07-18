# Loops

## O While
O while é um comando usado para fazer um laço (loop), isto é, repetir um trecho de código algumas vezes. A ideia é que esse trecho de código seja repetido enquanto uma determinada condição permanecer verdadeira.
```java
int idade = 15;
while (idade < 18) {
    System.out.println(idade);
    idade = idade + 1;
}
```

O trecho dentro do bloco do while será executado até o momento em que a condição `idade < 18` passe a ser `falsa`. E isso ocorrerá exatamente no momento em que `idade == 18`, o que não o fará imprimir `18`.

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
    i = i + 1;
}
```

Já o while acima imprime de 0 a 9.

## O For
Outro comando de loop extremamente utilizado é o for. A ideia é a mesma do while: fazer um trecho de código ser repetido enquanto uma condição continuar verdadeira. Mas além disso, o for isola também um espaço para inicialização de variáveis e o modificador dessas variáveis. Isso faz com que quem mais legíveis,
as variáveis que são relacionadas ao loop:

```java
for (inicializacao; condicao; incremento) {
    codigo;
}
```

Um exemplo é o a seguir:

```java
for (int i = 0; i < 10; i = i + 1) {
    System.out.println("olá!");
}
```

Repare que esse for poderia ser trocado por:

```java
while (i < 10) {
int i = 0;
    System.out.println("olá!");
    i = i + 1;
}
```


Porém, o código do for indica claramente que a variável `i` serve, em especial, para controlar a quantidade de laços executados. Quando usar o for? Quando usar o while? Depende do gosto e da ocasião.

## Controlando loops

Apesar de termos condições booleanas nos nossos laços, em algum momento, podemos decidir parar o loop por algum motivo especial sem que o resto do laço seja executado.
```java
for (int i = x; i < y; i++) {
    if (i % 19 == 0) {
        System.out.println("Achei um número divisível por 19 entre x e y");
        break;
    }
}
```
O código acima vai percorrer os números de `x` a `y` e parar quando encontrar um número divisível por `19`, uma vez que foi utilizada a palavra chave **break.**

Da mesma maneira, é possível obrigar o loop a executar o próximo laço. Para isso usamos a palavra chave **continue.**
```java
for (int i = 0; i < 100; i++) {
    if (i > 50 && i < 60) {
        continue;
    }
    System.out.println(i);
}
```
O código acima não vai imprimir alguns números. (Quais exatamente?)