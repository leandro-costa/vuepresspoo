---
sidebar: false
---

# Exercício de Modelagem 5

1. Forneça o modelo de classes em Java para um programa funcional que atenda a seguinte situação: 

Uma `Instituicao` de ensino está desenvolvendo um sistema acadêmico onde cada `Pessoa` possue `nome` e `CPF`. Caso a pessoa seja um `Aluno` deverá ter também o número da `matricula` mas, se for um `Professor` deverá ter número do `SIAPE`. A manipulação do `CPF` deve ser exclusivo de `Pessoa`. 

Além disso, na `Instituicao` deverá existir `Turma` com no máximo 40 `AlunoMatriculado` e apenas um professor. Cada `AlunoMatriculado` deverá conter um `Aluno`, a quantidade de faltas e 3 notas. 

A quantidade de `Turma` deve ser definida no momento em que a `Instituicao` for construída bem como seu nome. Seu modelo de classe deve ser possível rodar a simulação abaixo e exibir o mesmo resultado.

Seu modelo de classe deve ser possível rodar a simulação abaixo e exibir o mesmo resultado.

<<< src/Exercicios/ExercicioModelagem/Modelagem5/Principal.java

Saída:

```shell
Pessoa 1 [000.000.000-00]
Aluno 1 [000.000.000-00][2012045123]
true
Professor 1 [000.000.000-00][1865418]
true
Aluno [111.111.111-11][2012045123][Faltas :0][Nota1:0.0, Nota2:0.0, Nota3:0.0]
1
4
```