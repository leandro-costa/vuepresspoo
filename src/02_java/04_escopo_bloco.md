---
next: /03_conceitos_OO/
---

# Escopos e Blocos

## Escopo das variáveis
No Java, podemos declarar variáveis a qualquer momento. Porém, dependendo de onde você as declarou, ela vai valer de um determinado ponto a outro.

```java
// aqui a variável i não existe
int i = 5;
// a partir daqui ela existe
``` 

O **escopo da variável** é o nome dado ao trecho de código em que aquela variável existe e onde é possível acessá-la.

Quando abrimos um novo bloco com as chaves, as variáveis declaradas ali dentro **só valem até o fim daquele bloco**.

```java
// aqui a variável i não existe
int i = 5;
// a partir daqui ela existe
while (condicao) {
    // o i ainda vale aqui
    int j = 7;
    // o j passa a existir
}
// aqui o j não existe mais, mas o i continua dentro do escopo
```

No bloco acima, a variável `j` pára de existir quando termina o bloco onde ela foi declarada. Se você tentar acessar uma variável fora de seu escopo, ocorrerá um erro de compilação.

O mesmo vale para um if:
```java
if (algumBooleano) {
    int i = 5;
} else {
    int i = 10;
}
System.out.println(i); // cuidado!
```

Aqui a variável `i` não existe fora do `if` e do `else`! Se você declarar a variável antes do `if`, vai haver outro erro
de compilação: dentro do `if` e do `else` a variável está sendo redeclarada! Então o código para compilar e fazer sentido fica:

```java
int i;
if (algumBooleano) {
    i = 5;
} else {
    i = 10;
}
System.out.println(i);
```

Uma situação parecida pode ocorrer com o for:
```java 
for (int i = 0; i < 10; i++) {
    System.out.println("olá!");
}
System.out.println(i); // cuidado!
```
Neste for, a variável i morre ao seu término, não podendo ser acessada de fora do for, gerando um erro de
compilação. Se você realmente quer acessar o contador depois do loop terminar, precisa de algo como:
```java 
int i;
for (i = 0; i < 10; i++) {
    System.out.println("olá!");
}
System.out.println(i);
```

## Um bloco dentro do outro

Um bloco também pode ser declarado dentro de outro. Isto é, um `if` dentro de um `for`, ou um `for` dentro de um `for`, algo como:

```java 
while (condicao) {
    for (int i = 0; i < 10; i++) {
    // código
    }
}
```