# Referência ao Objeto

```java
class Programa{
  public static void main(String[] args){
    Conta c1;
    c1 = new Conta();
    Conta c2;
    c2 = new Conta();
  }
}
```

- c1 uma variável que "aponta" para o objeto(referência).

<figure>
@startuml

rectangle "Memoria"{
    rectangle "Conta" as c1m
    rectangle "Conta" as c2m
    rectangle "c1" as c1
    rectangle "c2" as c2
    c1m<--c1
    c2m<--c2
}

@enduml  

<figcaption> Representação da memória com duas instancias de Conta.</figcaption>
</figure>


```java
class Programa{
  public static void main(String[] args){
    Conta c1;
    c1 = new Conta();
    Conta c2 = c1;    
  }
}
```

<figure>
@startuml

rectangle "Memoria"{
    rectangle "Conta" as c1m
    rectangle "c1" as c1
    rectangle "c2" as c2
    c1m<--c1
    c1m<--c2
}

@enduml

<figcaption> Representação da memória com apenas uma instancia de Conta.</figcaption>
</figure>


```java
public static void main(String args[]) {
  Conta c1 = new Conta();
  c1.cliente = "Leandro";    
  c1.saldo = 100.0;    
  Conta c2 = new Conta();    
  c2.cliente = "Leandro";    
  c2.saldo = 100.0;    
  if (c1 == c2) {
    System.out.println("Contas iguais");    
  }
}
```

- O operador `==` compara o conteúdo das variáveis
  - variáveis não guardam o objeto, e sim o endereço em que ele se encontra (referência)
  - As contas podem ser equivalentes no nosso critério de igualdade, porém elas não são o mesmo objeto.



