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
  

