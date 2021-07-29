# Herança

- É a capacidade de uma classe definir o seu comportamento e sua estrutura aproveitando definições de outra classe, normalmente conhecida como classe base ou classe pai
    - As subclasses herdam tudo o que a classe pai possui e acrescenta as suas características particulares
    - Através do mecanismo de herança é possível definirmos classes genéricas que agreguem um conjunto de definições comuns a um grande número de objetos(Generalização) 
    - A partir destas especializações genéricas podemos construir novas classes, mais específicas, que acrescentem novas características e comportamentos aos já existentes (Especialização)

- Capacidade que uma classe tem de herdar as características e comportamentos de outra classe
- Classe pai é chamada de superclasse e a filha de subclasse
- Em Java só é permitido herdar de uma única classe, ou seja, não permite herança múltipla
- O objetivo da herança é especializar o entendimento de uma classe criando novas características e comportamentos que vão além da superclasse 
- Ao mesmo tempo que a especialização amplia o entendimento de uma classe, a generalização vai no sentido inverso e define um modelo menos especializado  e  mais genérico


```java
public class Mamifero{
    private int altura;
    private double peso;
    public void mamar(){
        System.out.println("Mamifero mamando");
    }
}
```

```java
public class Morcego extends Mamifero{
    private double tamanhoPresa;
    public void voar(){
        System.out.println("Morcego voando");
    }
}
```
- Classe Morcego
    - Quais as características de morcego?
        - altura
        - peso
        - tamanho_presa
    - Quais ações o morcego pode fazer?
        - mamar
        - voar
- Se usarmos os princípios de lógica podemos dizer que todo morcego é mamífero porém NÃO podemos afirmar que todo mamífero é morcego

```java
Mamifero animalMamifero = new Morcego();
Mamifero batman = new Mamifero();//erro
```

- Com base no que foi dito até aqui podemos deduzir que o item 2 deve causar um erro já que não é possível garantir que todo mamífero seja um morcego
- Já o item 1 pode parecer estranho, pois a variável é do tipo Mamífero e o objeto para o qual a variável se refere é do tipo Morcego
    - Devemos saber que toda variável pode receber um objeto que seja compatível com o seu tipo e neste caso todo Morcego CERTAMENTE é um Mamífero

```java
Mamifero animalMamifero = new Morcego();
animalMamifero.mamar();
animalMamifero.voar();//erro
```
- Todo `Morcego` é um `Mamifero`, porem não pode realizar todas as ações de um `morcego`
- A variável `animalMamifero` que recebe o objeto é do tipo `Mamifero`
- Para o `Morcego` `voar` é necessário criar uma nova variável do tipo `Morcego` e atribuir o objeto que estava na variável `animalMamifero`
```java
Mamifero animalMamifero = new Morcego();
animalMamifero.mamar();
Morcego batman = (Morcego).animalMamifero;
batman.voar();
```
- Este tipo de operação recebe o nome de **TYPE CAST**

@startuml

class Mamifero{
    -int altura
    -double peso
    +void mamar()
}

class Morcego{
    -double tamanhoPresa
    +void voar()
}

Mamifero <|-- Morcego
@enduml
