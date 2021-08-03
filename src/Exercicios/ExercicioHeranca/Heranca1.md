# Exercício de Herança 1

1. Considere o código abaixo, que utiliza as classes da UML apresentada, e indique, caso exista algum erro, a linha e qual o erro.

    <figure>

    @startuml

    class Animal{
        +void mover()
    }

    class Mamifero{
        +void mamar()
    }

    Animal <|-- Mamifero
    Mamifero <|-- Morcego
    Mamifero <|-- Cachorro
    @enduml

    <figcaption>Relação entre Animal, Mamímero, Morcegoe Cachorro.</figcaption>
    </figure>

    
    <<< src/Exercicios/ExercicioHeranca/code/code1.java
    
    <<< src/Exercicios/ExercicioHeranca/code/code2.java

1. Verdadeiro ou Falso, se falso justifique.
    - Em orientação a objetos herança é a capacidade de uma classe definir o seu comportamento e sua estrutura aproveitando definições de outra classe, normalmente conhecida como classe base ou classe pai.
    - O objetivo da herança é generalizar o entendimento de uma classe criando novas características e comportamentos que vão além da superclasse.
    - Classes concretas são classes que não produzem instâncias. Elas agrupam características e comportamentos que serão herdados por outras classes.
    - Classes abstratas precisam ter métodos com implementação definida.
    - Os métodos abstratos são obrigatoriamente implementados pelas classes filhas.
    - Polimorfismo só pode ser utilizando com herança, não podendo ser aplicado a interface.
    - As interfaces são estritamente modelos de comportamento.
    - As interfaces não podem ser instanciadas pois não produzem objetos.
    - As interfaces podem ter atributos de instância.
    - Classes abstratas podem ter atributos de instância.
    - As interfaces não podem ter métodos com corpo definido.
    - Classes abstratas não podem ter métodos com corpo definido.
                


                
            