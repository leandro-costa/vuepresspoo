---
sidebar: false
---

# Sistema Bancário (Polimorfismo)

adapitado de [^Takenami]

1. Criar uma classe abstrata chamada `Operacao` com o atributo valor do tipo double e um método abstrato chamado `operar()` que retornará um valor do tipo double.
1. Crie uma classe `Debito` e outra `Credito` que herda as caraterísticas de `Operacao.` O construtor de `Debito` e `Credito` deve receber o valor da operação e atribuir este valor a variável definida em `Operacao` (superclasse). Estas classes (`Debito` e `Credito`) devem ter um método `operar()` que deve ser programado de acordo com sua finalidade: `operar()` da classe `Debito` retorna o valor negativo pois a operação deve ser um debito enquanto a o método `operar()` de `Credito` retorna o valor positivo.
1. Criar a classe `ContaCorrente` com o atributo saldo do tipo `double` que inicia com 0. Esta classe possui um método `executarOperacao(Operacao opr)` que recebe um parâmetro do tipo `Operacao` que vai operar o saldo da conta correte (se for debito diminui, se for credito soma). Esta classe também possui o método `getSaldo()` que retorna o saldo do saldo atual.
1. Crie a classe `Correntista` com os seguintes atributos: `nome` (do tipo String) e `conta` (do tipo `ContaCorrente`). O construtor de `Correntista` deve receber seu nome. A classe deve ter 2 métodos: `public String getNome()` e `public ContaCorrente getContaCorrente().` Estes métodos retornam o nome e a conta respectivamente.
1. Crie a classe `Banco` como descrito no código abaixo:

    ```java
    public class Banco {
        private Correntista[] correntistas;
        private int qtdCorrentista;


        public Banco() {
            this.correntistas = new Correntista[10];
            this.qtdCorrentista = 0;
        }

        public void addCorrentista(String nome){
            correntistas[qtdCorrentista++] = new Correntista(nome);
        }

        public Correntista getCorrentista(String nome) {

            for (int i = 0; i < qtdCorrentista; i++) {
                if (correntistas[i].getNome().equals(nome)) {
                    return correntistas[i];
                }                
            }
            return null;
        }

        public void debitar(String nomeCorrentista, double valor) {
            Debito d = new Debito(valor);
            getCorrentista(nomeCorrentista).getContaCorrente().executarOperacao(d);
        }

        public void creditar(String nomeCorrentista, double valor) {
            Credito c = new Credito(valor);
            getCorrentista(nomeCorrentista).getContaCorrente().executarOperacao(c);
        }

        public double getSaldo(String nomeCorrentista) {
            return getCorrentista(nomeCorrentista).getContaCorrente().getSaldo();
        }

        public void transferir(String nomeCorrentistaOrigem, String nomeCorrentistaDestino, double valor) {
            debitar(nomeCorrentistaOrigem, valor);
            creditar(nomeCorrentistaDestino, valor);
        }
    }
    ```
1. Modifique o código da classe `Banco` para que ela funcione utilizando Coleção de `Correntista`. 

!!!include(src/ref.md)!!!