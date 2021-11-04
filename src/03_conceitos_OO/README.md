# Paradigma de Programação OO

- Paradigma que mais reflete os problemas atuais
- Importante ferramenta para solucionar através da simulação
- Trocas de mensagens
- Objetos no programa corresponde à objetos reais
  - Pessoas
  - Maquinas
  - Departamentos
- Paradigma de análise, projeto e programação de sistemas
  - Composição de unidades de software (objetos)

## Linguagens  OO

- Simula 67
- Smalltalk 80 (Modelos OO)
- Adicionada às linguagens imperativas (C++)
- Varias outras
  - C++, C♯, VB.NET, Object Pascal, Objective-C, Python, Ruby, Smalltalk, PHP5, **Java**
 

## Funcional x OO

<figure>

@startuml

skinparam roundcorner 25

rectangle "Paradigma funcional"{
    rectangle "Dados"  as dados 
    rectangle "Funções"  as funcoes

    dados -> funcoes
    funcoes -> dados

}

rectangle "Paradigma OO" {
    storage Classe {
        rectangle "Atributos"  as atributos 
        rectangle "Métodos"  as metodos
        atributos <-> metodos
    }
}

@enduml  

<figcaption> Comparação entre o paradigma funcional e OO.</figcaption>
</figure>

### Objeto

- Objeto
  - Recebe e envia mensagem 
  - Executa processamento
  - Possui estado local que pode ser modificado
  - Tratamento de erros são feito por troca de mensagem entre objetos


- Base do paradigma OO
  - Objeto
  - Mensagem
  - Método
  - Classe
  
##  Abstração

- É o princípio de ignorar os aspectos de um assunto não relevantes para o propósito em questão, tornando possível uma concentração maior nos assuntos principais
- Em termos de desenvolvimento de sistemas, isto significa concentrar-se no que um objeto é e faz antes de se decidir como ele será implementado
- Uma abstração é qualquer modelo que inclui os aspectos relevantes de alguma coisa, ao mesmo tempo em que ignora os menos importantes
- Representa as características que devem conter em uma classe para atender a um determinado problema
- Somente as características necessárias para atender a um determinado problema
- Representação de um determinado ponto de vista ou abstração do problema

::: warning Atenção
Para desenvolver aplicações O.O. é necessário identificar os objetos na vida real, extrair a classe que aquele objeto pertence e selecionar os atributos e métodos que serão necessários levando em consideração o modelo computacional que está sendo desenvolvido
:::

- O modelo O.O. é o conjunto de classes que visam resolver um problema computacional levando em consideração como este problema é abordado no mundo real
  

