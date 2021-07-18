# Domínio de Aplicação

- Um domínio é composto pelas entidades, informações e processos relacionados a um determinado contexto.
- Uma aplicação pode ser desenvolvida para automatizar ou tornar factível as tarefas de um domínio. 
- Portanto, uma aplicação é basicamente o "reflexo" de um domínio.
- Para exemplificar, suponha que estamos interessados em desenvolver uma aplicação para facilitar as tarefas do cotidiano de um banco. Podemos identificar clientes, funcionários, agências e contas como entidades desse domínio. Assim como podemos identificar as informações e os processos relacionados a essas entidades.

## Outras classes do domínio de um sistema bancário

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
