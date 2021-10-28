# Encapsulamento
- Separar o programa em partes, tornando cada parte mais isolada possível uma da outra
- A idéia é tornar o software mais flexível, fácil de modificar e de criar novas implementações
- Permite utilizar o objeto de uma classe sem necessariamente conhecer sua implementação
- Protege o acesso direto aos atributos de uma instância fora da classe onde estes foram criados
- Uma grande vantagem do encapsulamento é que toda parte encapsulada pode ser modificada sem que os usuários da classe em questão sejam afetados

## Modificadores de acesso
- private
- protected
- public
- <padrão> (package, quando não é especificado nenhum dos 3 acima)

<figure>

@startuml
class A {
-int atributoA
#int atributoB
~int atributoC
+int atributoD
-int metodoA()
#int metodoB()
~int metodoC()
+int metodoD()
}

note left of A::atributoA
  private
end note
note left of A::atributoB
  protected
end note
note left of A::atributoC
  package
end note
note left of A::atributoD
  public
end note
note right of A::metodoA
  private
end note
note right of A::metodoB
  protected
end note
note right of A::metodoC
  package
end note
note right of A::metodoD
  public
end note
@enduml

<figcaption>Modificadores de acesso.</figcaption>
</figure>

- São aplicados a atributos, métodos, construtores e classes
- As classes só podem ser declaradas como public ou padrão
    - Uma classe com acesso padrão só pode ser detectada por classes do mesmo pacote
    - Uma classe com acesso público pode ser detectada por classes de todos os pacotes

- Private
    - Os membros privados só podem ser acessados por um código da mesma classe 
- Protected
    - Os membros protegidos podem ser acessados por outras classes do mesmo pacote, além de subclasses independente do pacote 
- Public
    - Os membros públicos podem ser acessados por todas as outras classes, mesmo de pacotes diferentes
- Padrão
    - Os membros padrão só podem ser acessados por outras classes do mesmo pacote

## Métodos de acesso (get e set)

Como os atributos/métodos privados ​​só podem ser acessadas dentro da mesma classe (uma classe externa não tem acesso a ela) é possível acessá-los se fornecermos métodos públicos *get* e *set*.

O *get* retorna o valor da variável e o *set* define o valor.

A sintaxe para ambos é que eles começam com *get* ou *set* seguido pelo nome do atributo com a primeira letra em maiúscula:

```java
public class Pessoa {
  private String nome; // private = acesso restrito
  // Get
  public String getName() {
    return nome;
  }
  // Set
  public void setNome(String novoNome) {
    this.nome = novoNome;
  }
}
```
O método *get* retorna o valor da variável name.

O método *set* pega um parâmetro ( novoNome) e o atribui ao atributo *nome*. 

A palavra-chave *this* é usada para se referir ao objeto atual.

No entanto, como o atributo *name* é declarada como private, não podemos acessá-la de fora desta classe:

```java
public class Main {
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa();
    pessoa.nome = "João";  // error
    System.out.println(pessoa.nome); // error 
  }
}
```

Se o atributo foi declarada como *public,* esperaríamos a seguinte saída:

    João

No entanto, ao tentar acessar um atributo *private,* obtemos um erro:

    Main.java:4: error: nome has private access in Pessoa
        pessoa.nome = "João";
              ^
    Main.java:5: error: nome has private access in Pessoa
        System.out.println(pessoa.nome);
                                 ^
    2 errors
    
Em vez disso, usamos os métodos getNome()e setNome()para acessar e atualizar a variável:

Exemplo
```java
public class Main {
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa();
    pessoa.setNome("João"); // Seta o valor do atributo nome para "João"
    System.out.println(pessoa.getNome());
  }
}
```
saida 

    "João"
 
 
## Por que encapsulamento?

- Melhor controle dos atributos e métodos da classe
- Os atributos de classe podem ser somente leitura (se você usar apenas o método *get*) ou somente gravação (se você usar apenas o método *set*)
- Flexível: o programador pode alterar uma parte do código sem afetar outras partes
- Maior segurança de dados


