---
sidebar: false
---

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


<figure>


@startuml 

label "new Cachorro()"

rectangle "Cachorro" #palegreen;line:green;text:green{
    rectangle "Mamifero" #aliceblue;line:blue;text:blue{
        label "mamar" #aliceblue;text:blue   
        rectangle "Animal" #aliceblue;line:red;text:red{
            label "mover" #aliceblue;text:red   
        }
    }
} 

@enduml

<figcaption>Criando um objeto Cachorro.</figcaption>
</figure>

<figure>

@startuml 

label "new Morcego()"

rectangle "Morcego" #palegreen;line:green;text:green{
    rectangle "Mamifero" #aliceblue;line:blue;text:blue{
        label "mamar" #aliceblue;text:blue   
        rectangle "Animal" #aliceblue;line:red;text:red{
            label "mover" #aliceblue;text:red   
        }
    }
} 

@enduml

<figcaption>Criando um objeto Morcego.</figcaption>
</figure>

