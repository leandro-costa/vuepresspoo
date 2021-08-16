# Classes Abstratas


- Classes abstratas são classes que não produzem instâncias. Elas agrupam características e comportamentos que serão herdados por outras classes
- Fornecem padrões de comportamento que serão implementados nas suas subclasses
- Podem ter métodos com implementação definida
- Não pode ser instanciada diretamente (`new`).
- Uma classe abstrata possui características que devem ser implementadas por classes filhas
- Os métodos abstratos são obrigatoriamente implementados pelas classes filhas concretas, quando a mesma herda de uma classe abstrata. 

```java
public abstract class Pessoa { 
    int matricula; 
    String nome; 
    public abstract void estacionar(); 
    public void entrar(){ 
        System.out.println("Entrando na Faculdade"); 
    } 
}
```

```java
public class Aluno extends Pessoa { 
    double media; 

    public void estacionar(){ 
        System.out.println("Estacionando na área para estudante..."); 
    } 
} 
```

```java
public class Professor extends Pessoa { 
    double salario;
    public void estacionar(){ 
        System.out.println("Estacionando nas vagas de professor"); 
    } 
}
```

<figure>


@startuml

 abstract class Pessoa { 
    -int matricula; 
    -String nome; 
    +{abstract} void estacionar(); 
    +void entrar();
}

 class Aluno extends Pessoa { 
    -double media; 
    +void estacionar();
} 

 class Professor extends Pessoa { 
    -double salario;
    +void estacionar();
}

@enduml


<figcaption>UML Classe abstrata Pessoa e classes concretas Aluno e Professor.</figcaption>
</figure>

## Outros Exemplos

### Caelum 

[^caelumoo]

Vamos recordar em como pode estar nossa classe `Funcionario`:

```java
class Funcionario {
    protected String nome;
    protected String cpf;
    protected double salario;
    public double getBonificacao() {
        return this.salario * 1.2;
    }
    // outros métodos aqui
}
```

Considere o nosso `ControleDeBonificacao`:

```java
class ControleDeBonificacoes {
    private double totalDeBonificacoes = 0;
    public void registra(Funcionario f) {
        System.out.println("Adicionando bonificação do funcionario: " + f);
        this.totalDeBonificacoes += f.getBonificacao();
    }
    public double getTotalDeBonificacoes() {
        return this.totalDeBonificacoes;
    }
}
```

Nosso método `registra` recebe qualquer referência do tipo `Funcionario`, isto é, podem ser objetos do tipo `Funcionario` e qualquer de seus subtipos: `Gerente`, `Diretor` e, eventualmente, alguma nova subclasse que venha ser escrita, sem prévio conhecimento do autor da `ControleDeBonificacao`.

Estamos utilizando aqui a classe `Funcionario` para o polimorfismo. Se não fosse ela, teríamos um grande prejuízo: precisaríamos criar um método `registra` para receber cada um dos tipos de `Funcionario`, um para `Gerente`, um para `Diretor`, etc. Repare que perder esse poder é muito pior do que a pequena vantagem que a herança traz em herdar código.

Porém, em alguns sistemas, como é o nosso caso, usamos uma classe com apenas esses intuitos: de economizar um pouco código e ganhar polimorsmo para criar métodos mais genéricos, que se encaixem a diversos objetos.

Faz sentido ter uma referência do tipo `Funcionario`? Essa pergunta é diferente de saber se faz sentido ter um objeto do tipo `Funcionario:` nesse caso, faz sim e é muito útil.

Referenciando `Funcionario` temos o polimorfismo de referência, já que podemos receber qualquer objeto que seja um `Funcionario`. Porém, dar `new` em `Funcionario` pode não fazer sentido, isto é, não queremos receber um objeto do tipo `Funcionario`, mas sim que aquela referência seja ou um `Gerente`, ou um `Diretor`, etc. Algo mais **concreto** que um `Funcionario`.

```java
ControleDeBonificacoes cdb = new ControleDeBonificacoes();
Funcionario f = new Funcionario();
cdb.adiciona(f); // faz sentido?
```

Vejamos um outro caso em que não faz sentido ter um objeto daquele tipo, apesar da classe existir: imagine a classe `Pessoa` e duas filhas, `PessoaFisica` e `PessoaJuridica`. Quando puxamos um relatório de nossos clientes (uma `array` de `Pessoa` por exemplo), queremos que cada um deles seja ou uma `PessoaFisica`, ou uma `PessoaJuridica`. A classe `Pessoa`, nesse caso, estaria sendo usada apenas para ganhar o polimorfismo e herdar algumas coisas: não faz sentido permitir instanciá-la.

Para resolver esses problemas, temos as *classes abstratas*.


#### Classe abstrata

O que, exatamente, vem a ser a nossa classe `Funcionario`? Nossa empresa tem apenas Diretores, Gerentes, Secretárias, etc. Ela é uma classe que apenas idealiza um tipo, define apenas um rascunho.

Para o nosso sistema, é inadmissível que um objeto seja apenas do tipo `Funcionario` (pode existir um sistema em que faça sentido ter objetos do tipo Funcionario ou apenas `Pessoa`, mas, no nosso caso, não).

Usamos a palavra chave *abstract* para impedir que ela possa ser instanciada. Esse é o efeito direto de se usar o modificador `abstract` na declaração de uma classe:

```java
abstract class Funcionario {
    protected double salario;
    public double getBonificacao() {
        return this.salario * 1.2;
    }
    // outros atributos e métodos comuns a todos Funcionarios
}
```

E, no meio de um código:

```java
Funcionario f = new Funcionario(); // não compila!!!
```

O código acima não compila. O problema é instanciar a classe - criar referência, você pode. Se ela não pode ser instanciada, para que serve? Serve para o polimorfismo e herança dos atributos e métodos, que são recursos muito poderosos, como já vimos.

Vamos então herdar dessa classe, reescrevendo o método `getBonificacao`

```java
class Gerente extends Funcionario {
    public double getBonificacao() {
        return this.salario * 1.4 + 1000;
    }
}
```

<figure>


@startuml

abstract class Funcionario
class Gerente extends Funcionario
class Presidente extends Funcionario
class Diretor extends Gerente

@enduml


<figcaption>UML da classe abstrata Funcionario e das classes concretas Gerente, Presidente e Diretor.</figcaption>

</figure>

Mas qual é a real vantagem de uma classe abstrata? Poderíamos ter feito isto com uma herança comum. Por enquanto, a única diferença é que não podemos instanciar um objeto do tipo `Funcionario`, que já é de grande valia, dando mais consistência ao sistema.

Fique claro que a nossa decisão de transformar `Funcionario` em uma classe abstrata dependeu do nosso domínio. Pode ser que, em um sistema com classes similares, faça sentido que uma classe análoga a `Funcionario` seja concreta.

#### Métodos abstratos
Se o método `getBonificacao` não fosse reescrito, ele seria herdado da classe mãe, fazendo com que devolvesse o salário mais 20%.

Levando em consideração que cada funcionário em nosso sistema tem uma regra totalmente diferente para
ser bonificado, faz algum sentido ter esse método na classe `Funcionario`? Será que existe uma bonificação
padrão para todo tipo de `Funcionario`? Parece que não, cada classe filha terá um método diferente de bonificação pois, de acordo com nosso sistema, não existe uma regra geral: queremos que cada pessoa que escreve
a classe de um `Funcionario` diferente (subclasses de `Funcionario`) reescreva o método `getBonificacao` de
acordo com as suas regras.

Poderíamos, então, jogar fora esse método da classe `Funcionario`? O problema é que, se ele não existisse,
não poderíamos chamar o método apenas com uma referência a um `Funcionario`, pois ninguém garante
que essa referência aponta para um objeto que possui esse método. Será que então devemos retornar um
código, como um número negativo? Isso não resolve o problema: se esquecermos de reescrever esse método,
teremos dados errados sendo utilizados como bônus.

Existe um recurso em Java que, em uma classe abstrata, podemos escrever que determinado método será
sempre escrito pelas classes filhas. Isto é, um **método abstrato**.

Ele indica que todas as classes filhas (concretas, isto é, que não forem abstratas) devem reescrever esse método
ou não compilarão. É como se você herdasse a responsabilidade de ter aquele método.

::: tip Como declarar um método abstrato
Às vezes, não fica claro como declarar um método abstrato.

Basta escrever a palavra chave *abstract* na assinatura do mesmo e colocar um ponto e vírgula
em vez de abre e fecha chaves!
:::

```java
abstract class Funcionario {
    abstract double getBonificacao();
    // outros atributos e métodos
}
```


### K19

[^k19oo]

Classes abstratas
Classes abstratas
Classes abstratas
Sobrecarga de Métodos
É a capacidade de definir métodos com o mesmo nome
Assinatura seja diferente. 
A mudança na assinatura ocorre alterando a quantidade e/ou tipo de parâmetros que um método recebe
Sobrecarga de Métodos
Sobrecarga é a capacidade de um objeto responder à mesma mensagem, com comportamentos (métodos) distintos, a depender dos tipos dos parâmetros recebidos
aplicarInjecao()
aplicarInjecao(String)
Sobrecarga de Métodos

Interface
O objetivo de uma interface em Orientação a Objetos é definir um conjunto de comportamentos (métodos) que devem obrigatoriamente ser implementados pelas classes que utilizam a interface. 
Diferente da herança uma classe Java pode implementar n interfaces.
Interface
Padronização
Diversas empresa fabricam aparelhos elétricos.
Interface
Padronização no desenvolvimento
Contratos
Num sistema orientado a objetos, os objetos interagem entre si através de chamadas de métodos (troca de mensagens). 
Podemos dizer que os objetos se "encaixam" através dos métodos públicos assim como um plugue se encaixa em uma tomada através dos pinos.
Interface
Um padrão é definido através de especificações ou contratos. Nas aplicações orientadas a objetos, podemos criar um "contrato" para definir um determinado conjunto de métodos que deve ser implementado pelas classes que "assinarem" este contrato. 
Em orientação a objetos, um contrato é chamado de interface.
Interface
As interfaces são estritamente modelos de comportamento
As interfaces não podem ser instanciadas pois não produzem objetos
A relação existente entre as classes que implementam uma interface é uma relação do tipo “implementa os métodos de”
Interface
Se uma classe é definida por apenas métodos abstratos é melhor defini-lá como uma interface
Nenhum método de interface pode ter um corpo, ou seja, não tem um algoritmo definido para executar o comportamento.
São as classes que implementam a Interface que fornecerão os métodos
Interface
No sistema do banco, podemos definir uma interface (contrato) para padronizar as assinaturas dos métodos oferecidos pelos objetos que representam as contas do banco.
Interface
Interface
Interface
Interface
Caso novos tipos de contas sejam criados (ContaSalario, ContaInvestimento...) todas devem segui o mesmo contrato.
Interface
Interface
Interface
Interface
Assim como uma pessoa pode assinar vários contratos, na Orientação à Objetos, uma classe pode implementar varias interfaces
No java não é permitida herança múltipla, mas é possível implementar varias interfaces
Interface
Se uma classe implementa uma interface, podemos aplicar a ideia do polimorfismo assim como quando aplicamos herança.

Em Java, como não há herança múltipla, muitas vezes, interfaces são apresentadas como uma alternativa para obter um grau maior de polimorfismo.
Interface
Digamos que os gerentes e as empresas possam acessar o sistema do banco com um nome de usuário e uma senha.
Interface
Interface
Empresa não é um funcionário e o gerente não é cliente. Neste caso, a solução é utilizar interfaces para obter o polimorfismo desejado.
Interface
Agora, conseguimos definir oque o método autentica()


!!!include(src/ref.md)!!!
