# Classe

## Origem do termo
- A palavra classe vem da taxonomia da biologia. 
  - Todos os seres vivos de uma mesma classe biológica têm uma série de atributos e comportamentos em comum, mas não são iguais, podem variar nos valores desses atributos e como realizam esses comportamentos.
- Homo Sapiens define um grupo de seres que possuem características em comum
  - Homo Sapiens é um ser humano?
  - Tudo está especificado na classe Homo Sapiens, mas se quisermos mandar alguém correr, comer, pular, precisaremos de uma instância de Homo Sapiens, ou então de um objeto do tipo Homo Sapiens.
## Analogias
- Uma receita de bolo. 
  - Você come uma receita de bolo? 
    - Precisamos instaciá-la, criar um objeto bolo a partir dessa especificação (a classe) para utilizá-la. 
    - Podemos criar centenas de bolos a partir dessa classe (a receita, no caso), eles podem ser bem semelhantes, alguns até idênticos, mas são objetos diferentes.
- A planta de uma casa é uma casa?...
## Conceito
- Uma classe é uma descrição de um conjunto que compartilham os mesmos atributos(características), operações, relacionamentos e semântica
- Todos os objetos são instâncias de classes, onde a classe descreve as propriedades e comportamentos daquele objeto
- **Atributos** são propriedades de uma classe, que descreve um intervalo de valores que as instâncias podem apresentar. Uma Classe pode ter qualquer número de atributos ou nenhum
- **Operações** correspondem aos processos que a classe pode realizar
  
<figure>

@startuml

rectangle "Especificação \nde uma conta" as conta

rectangle Obj1[
    |numero|              |
|cliente| |
|saldo| |
|limite| |
] 

rectangle Obj2[
    |numero|              |
|cliente| |
|saldo| |
|limite| |
]

rectangle Obj3[
    |numero|              |
|cliente| |
|saldo| |
|limite| |
]

conta -> Obj1
conta -> Obj2
conta -> Obj3

Obj1 --[hidden]> Obj2
Obj2 --[hidden]> Obj3

@endtuml

<figcaption> Representação de vários objetos de uma mesma estrutura.</figcaption>
</figure>


 - Estrutura (molde) que define os atributos e/ou estados de um conjunto de objetos com características similares.
 - Define o comportamento de seus objetos (ações que o objeto pode fazer) através de métodos. 
 - Descreve os serviços (ações) providos por seus objetos 
 - Quais informações eles podem armazenar

```java
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;
}
```

- Usando a classe

```java
class Programa{
  public static void main(String[] args){
    new Conta();
  }
}
```

- Objeto criado, mas como acessar?


```java
class Programa{
  public static void main(String[] args){
    Conta minhaConta;
    minhaConta = new Conta();
  }
}
```
- Através da variável minhaConta, podemos acessar o objeto recém criado para alterar seu cliente, seu saldo, etc

```java
class Programa{
  public static void main(String[] args){
    Conta minhaConta;
    minhaConta = new Conta();

    minhaConta.cliente = "Leandro";
    minhaConta.saldo = 10.0;

    System.out.println("Saldo atual: "+minhaConta.saldo);
  }
}
```


## Atributos de uma Classe


- Caraterísticas e/ou estado de uma classe
- Após a classe ser instanciada em um objeto os atributos vão receber valores (caraterísticas e/ou estados) que definem o objeto

```java{2-5}
class Conta{
  int numero;//atributo
  String cliente;//atributo
  double saldo;//atributo
  double limite;//atributo
}
```


## Métodos de uma Classe


- Conjunto de ações que um determinado objeto pode executar
- Definem o que um objeto pode fazer
- São acionados por outros objetos
  - Os objetos se comunicam através de métodos
  - Troca de mensagens

- Um método que saca uma determinada quantidade e não devolve nenhuma informação para quem acionar esse método

```java{7-10}
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;

  void saca(double quantidade){//método
    double novoSaldo = this.saldo - quantidade;
    this.saldo = novoSaldo;
  }
}
```

 - Fazer um depósito
```java{7-10,12-14}
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;

  void saca(double quantidade){//método
    double novoSaldo = this.saldo - quantidade;
    this.saldo = novoSaldo;
  }

  void deposita(double quantidade){//método
    this.saldo += quantidade;
  }
}
```


```java
class Programa{
  public static void main(String[] args){
    Conta minhaConta;
    minhaConta = new Conta();

    minhaConta.cliente = "Leandro";
    minhaConta.saldo = 100.0;

    //saca 20
    minhaConta.saca(20)
    //deposita 50
    minhaConta.deposita(50)

    System.out.println("Saldo atual: "+minhaConta.saldo);
  }
}
```


- Método com retorno
  - No caso do nosso método saca, podemos devolver um valor booleano indicando se a operação foi bem sucedida.


```java
class Conta{
  //...

  boolean saca(double valor){
    if(this.saldo<valor){
      return false;
    }else{
      this.saldo -= valor;
      return true;
    }
  }

}
```

```java
class Programa{
  public static void main(String[] args){
    //... 
    minhaConta.saldo = 100.0;

    boolean consegui=minhaConta.saca(20);
    if(consegui){
      System.out.println("Consegui sacar");
    }else{
      System.out.println("Não consegui sacar");
    }
  }
}
```
## Construtor

- Método especial definido na classe e executado no momento que o objeto é instanciado
- Diferente de outro método pois não possui retorno
- Deve ter o mesmo nome da classe.
- Pode receber parâmetros
  - Normalmente utilizados para inicializar os valores dos atributos do objeto

### O que o new faz?

- A classe chamada é instanciada
- Memória é alocada
- Os passos definidos dentro do método construtor da classe são executados
  - Construtor é um método especial para criar e inicializar novas instâncias da classe. Construtores podem ser sobrecarregados


## Estereótipo de uma Classe em UML

<figure>

@startuml
class NomeDaClasse{
    atributos
    metodos()
}
@enduml
<figcaption>Modelo de uma classe em UML.</figcaption>
</figure>


## Estrutura básica de uma classe

```java{3-5,7-11,13-18}
public class Carro {

    private String cor;
    private String marca;
    private int velocidade;

    public Carro(String cor, String marca){
        this.cor = cor;
        this.marca = marca;
        velocidade = 0;
    }

    public void acelerar(){
        velocidade++;
    }
    public void parar(){
        velocidade = 0; 
    }
}

```

## Representação UML

<figure>

@startuml
class Carro {

    -String cor
    -String marca
    -int velocidade

    +Carro(String cor, String marca)
    +void acelerar()
    +void parar()
}
@enduml
<figcaption> UML da classe carro.</figcaption>
</figure>

- A UML é uma notação que podemos utilizar para representar classes e objetos em modelos computacionais

- Linguagem para representação de modelos visuais com um significado especifico e padronizado

- UML não é uma linguagem de programação

- Os modelos são representados através de diagramas que possuem semântica própria
O diagrama que representa a descrição das classes é o **Diagrama de Classes**


## Domínio de Aplicação

- Um domínio é composto pelas entidades, informações e processos relacionados a um determinado contexto.
- Uma aplicação pode ser desenvolvida para automatizar ou tornar factível as tarefas de um domínio. 
- Portanto, uma aplicação é basicamente o "reflexo" de um domínio.
- Para exemplificar, suponha que estamos interessados em desenvolver uma aplicação para facilitar as tarefas do cotidiano de um banco. Podemos identificar clientes, funcionários, agências e contas como entidades desse domínio. Assim como podemos identificar as informações e os processos relacionados a essas entidades.

### Outras classes do domínio de um sistema bancário

<figure>

@startuml

class  Cliente {
  String  nome
  int  codigo
}

class  CartaoDeCredito {
  int  numero
  String  dataDeValidade
}

class Agencia{
  int numero
}

class Conta{
  int numero
  String cliente
  double saldo
  double limite
}
@enduml  

<figcaption> UML de classes do domínio bancários.</figcaption>
</figure>
