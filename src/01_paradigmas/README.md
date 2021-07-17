
# Linguagens e paradigmas de programação


As informações desse capítulo foram retiradas basicamente de [^Pires] e [^Tedesco].


## Introdução

No passado escrevia-se programas utilizando apenas linguagens de baixo nível. A escrita é engessada, complexa e muito específica, sendo pouco acessível para os desenvolvedores no geral. Esse tipo de linguagem exige muito conhecimento de quem a programa (inclusive relacionado à forma com que o processador opera uma instrução-máquina).

Recentemente foi liberado o [código-conte](https://github.com/chrislgarry/Apollo-11) utilizado no computador que guiou a missão Apollo que teve como principal objetivo levar o homem à lua (na tão famigerada corrida espacial entre a União Soviética e os EUA), o *Apollo Guidance Computer.*

Um programa escrito em uma dessas linguagens, chamadas de baixo nível, é composto por uma série de instruções de máquina que determinam quais operações o processador deve executar. Essas instruções são convertidas para a linguagem que o processador entende, que é a linguagem binária (sequência de bits 0 e 1), que é categorizada como *First-generation programming language* (1GL), em livre tradução: linguagem de programação de primeira geração. 


## Linguagens de alto nível

Com a popularidade dos computadores criou-se um "problema" de alta demanda por software e, consequentemente, por programadores. Talvez você esteja pensando que isso não é exatamente um problema, e sim uma coisa boa, uma tendência, um novo mercado. Faz sentido, até certo ponto. O problema era encontrar mão de obra qualificada para codificar àquelas instruções tão complicadas.

Com isso, novas linguagens surgiram e, cada vez mais, aproximavam-se da linguagem humana. Isso abriu "fronteiras" para que uma enorme gama de novos desenvolvedores se especializassem. Tais linguagens são denominadas como sendo de alto nível. As linguagens modernas que hoje conhecemos e usamos são de alto nível: C, PHP, Java, Rust, C\#, Python, Ruby etc.

::: tip Dica
Quanto mais próxima da linguagem da máquina, mais baixo nível é a linguagem. Quanto mais próxima da linguagem humana, mais alto nível ela é.
:::



## Paradigmas das linguagens de programação
Quando uma linguagem de programação é criada, a partir das suas características, ela é categorizada em um ou mais paradigmas.

A definição do dicionário Aurélio para "paradigma":

- Algo que serve de exemplo geral ou de modelo.
- Conjunto das formas que servem de modelo de derivação ou de flexão.
- Conjunto dos termos ou elementos que podem ocorrer na mesma posição ou contexto de uma estrutura.

O paradigma de uma linguagem de programação é a sua identidade. Corresponde a um conjunto de características que, juntas, definem como ela opera e resolve os problemas. Algumas linguagens, inclusive, possuem mais de um paradigma, são as chamadas multi paradigmas.


## Paradigmas das linguagens de programação

Alguns dos principais paradigmas utilizados hoje no mercado:

- Funcional
- Lógico
- Declarativo
- Imperativo
- Orientado a objetos
- Orientado a eventos


### Paradigma funcional
O foco desse paradigma está na avaliação de funções. Como na matemática quando temos, por exemplo, uma função $f(x)$:

$$f(x) = x + 2$$

$x$ é um parâmetro (o valor de entrada) e, após a expressão ser avaliada, obtêm-se o resultado.

Se o valor de entrada for 2, o resultado da avaliação da nossa função será 4.

Algumas das linguagens que atendem a esse paradigma: F\# (da Microsoft), Lisp, Heskell, Erlang, Elixir, Mathematica.

É possível desenvolver de forma "funcional" mesmo em linguagens não estritamente funcionais. Por exemplo, no PHP, que é uma linguagem multi paradigma, teríamos:

```php
<?php

$sum = function($value) {
    return $value + 2;
};

echo $sum(2); // 4

```


### Paradigma lógico
Também é conhecido como "restritivo". Muito utilizado em aplicações de inteligência artificial. Esse paradigma chega no resultado esperado a partir de avaliações lógico-matemáticas. Se você já estudou lógica de predicados ficará confortável em entender como uma linguagem nesse paradigma opera.

Principais elementos desse paradigma:

- **Proposições:** base de fatos concretos e conhecidos.
- **Regras de inferência:** definem como deduzir proposições.
- **Busca:** estratégias para controle das inferências.


Exemplo:

**Proposição** 
: Chico é um gato.

**Regra de inferência**
: Todo gato é um felino.

**Busca**
: Chico é um felino?

A resposta para a **Busca** acima precisa ser **verdadeira**. A conclusão lógica é:


::: tip
Se Chico é um gato e todo gato é felino, então Chico é um felino.
:::

A ideia básica da programação em lógica é:

::: tip Prof. Dr. Sílvio do Lago Pereira – DTI / FATEC-SP.
Oferecer um arcabouço que permita inferir conclusões desejadas, a partir de premissas, representando o conhecimento disponível, de uma forma que seja computacionalmente viável.
:::

A linguagem mais conhecida que utiliza esse paradigma é a **Prolog.** Esse paradigma é pouco utilizado em aplicações comerciais, seu uso se dá mais na área acadêmica.


### Paradigma declarativo
O paradigma declarativo é baseado no lógico e funcional. Linguagens declarativas descrevem o que fazem e não exatamente como suas instruções funcionam.

Linguagens de marcação são o melhor exemplo: HTML, XML, XSLT, XAML etc. Não obstante, o próprio Prolog – reconhecido primariamente pelo paradigma lógico – também é uma linguagem declarativa. Abaixo alguns exemplos dessas linguagens.

HTML:
```html
<article>
  <header>
    <h1>Linguagens e paradigmas de programação</h1>
  </header>
</article>
```

SQL:
```sql
SELECT nome FROM usuario WHERE id = 10
```

### Paradigma imperativo

Você já ouviu falar em "programação procedural" ou em "programação modular"? De modo geral, são imperativas.

Linguagens clássicas como C, C++, PHP, Perl, C\#, Ruby etc, "suportam" esse paradigma. Ele é focado na mudança de estados de variáveis (ao contrário dos anteriores).

Exemplo:
```c
if(option == 'A') {
    print("Opção 'A' selecionada.");
}
```

A impressão só será realizada se o valor da variável $option$ for igual a $A$.


### Paradigma orientado a objetos

Esse é, entre todos, talvez o mais difundido. Nesse paradigma, ao invés de construirmos nossos sistemas com um conjunto estrito de procedimentos, assim como se faz em linguagens "fortemente" imperativas como o Cobol, Pascal etc, na orientação a objetos utilizamos uma lógica bem próxima do mundo real, lidando com objetos, estruturas que já conhecemos e sobre as quais possuímos uma grande compreensão.

::: tip Dica
OO é sigla para orientação a objetos
:::

O paradigma orientado a objetos tem uma grande preocupação em esconder o que não é importante e em realçar o que é importante. Nele, implementa-se um conjunto de classes que definem objetos. Cada classe determina o comportamento (definido nos métodos) e estados possíveis (atributos) de seus objetos, assim como o relacionamento entre eles.

Esse é o paradigma mais utilizado em aplicações comerciais e as principais linguagens o implementam: C\#, Java, PHP, Ruby, C++, Python etc.


### Paradigma orientado a eventos

Toda linguagem que faz uso de interface gráfica é baseada nesse paradigma. Nele, o fluxo de execução do software é baseado na ocorrência de eventos externos, normalmente disparados pelo usuário.

O usuário, ao interagir, decidirá em qual momento digitar, clicar no botão de "salvar" etc. Essas decisões dispararão eventos. O usuário é, então, o responsável por quando os eventos acontecerão, de tal forma que fluxo do programa fica sensivelmente atrelado à ocorrências desses eventos.

Linguagens de programação que fazem uso desse paradigma:
- Delphi
- Visual Basic
- C\#
- Python
- Java etc.

# Referências

[^Pires]:Jackson Pires .O que é Programação Orientada a Objetos e porque você precisa saber!https://becode.com.br/programacao-orientada-a-objetos-poo/. (Acessado em 15/08/2019) 

[^Tedesco]:Kennedy Tedesco. Linguagens e paradigmas de programação - Blog da TreinaWeb.https://www.treinaweb.com.br/blog/linguagens-e-paradigmas-de-programacao/. (Acessado em 07/08/2019).

[^Deitel]:P.D. DEITEL e H. Deitel.JAVA: como programar.Pearson Educación, 2016.ISBN: 9786073238038.

[^Dornelles]:Nemora  Dornelles.As 15 principais linguagens de programação do mundo! | Becode.https://becode.com.br/principais-linguagens-de-programacao/. (Acessado em 15/08/2019).

[^Oracle]:Oracle."Hello World!" for Microsoft Windows (The Java™Tutorials > Getting Started> The "Hello World!" Application).https://docs.oracle.com/javase/tutorial/getStarted/cupojava/win32.html. (Acessado em 07/08/2019).

[^Santos]:R. Santos.Introdução à programação orientada a objetos usando Java. Campus, 2003.ISBN:9788535212068.

[^Forbellone]:Forbellone, A. and Eberspacher, H., 2000. Lógica De Programação. Sao Paulo: Makron Books.

[^Ascencio]: Ascencio, A. and Campos, E., 2008. Fundamentos Da Programação De Computadores. São Paulo: Pearson Prentice Hall.

[^Salvetti]: Salvetti, D. and Barbosa, L., 1998. Algoritmos. São Paulo: Makron Books.

[^Farrer]: Farrer, H., 1999. Algoritmos Estruturados. Rio de Janeiro: LTC Editora.

[^Manzano]: Manzano, J. and Oliveira, J., 2005. Algoritmos. 17th ed. São Paulo (SP): Érica.

