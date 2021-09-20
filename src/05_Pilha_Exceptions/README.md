
# Pilha de Execução
Pilha de Execução
O método main chama metodo1
O método metodo1 chama o metodo2
Cada um desses métodos pode ter suas próprias variáveis locais, sendo que, por exemplo, o metodo1 não enxerga as variáveis declaradas dentro do main
Pilha de Execução
Toda invocação de método é empilhada em uma estrutura de dados que isola a área de memória de cada um
Quando um método termina (retorna), ele volta para o método que o invocou. Ele descobre isso através da pilha de execução (stack )
Pilha de Execução
Pilha de Execução
Executando o código uma exceção é lançada


Essa é o conhecido rastro da pilha (stacktrace)
Pilha de Execução
Quando um erro (exceção) ocorre, o JVM entra em estado de alerta e procura dento do metodo se existe algum tratamento especial para o problema
Como o metodo2 não tem nenhum tratamento a JVM interrompo sua execução e volta um nível na pilha e verifica novamente
Como o metodo1 também não faz nenhum tratamento a JVM sobe mais um nivel até chegar no main
Como o main também não faz nenhum trabamento a Thread morre
Exception
O tratamento de erros em Java é feito em tempo de execução através do tratamento de exceção. 
Exceções são classes que seguem o modelo O.O. e são lançadas quando o sistema encontra um problema. 
Utilizadas também para validar regras de negócio. 
Exception
Exception(exceção) significa "condição excepcional", e é uma ocorrência que altera o fluxo normal do programa.
Quando um evento excepcional ocorre em java, diz-se que uma exceção será lançada.
Exception
Métodos podem capturar ou deixar passar exceções que ocorrerem em seu corpo, mas para isto é obrigatório que o método declare a sua decisão. 
Para repassar o tratamento de erro para quem chama o método utilizamos o throws. 
throws declara que o método pode provocar exceções do tipo declarado (ou de qualquer subtipo).
public void validar() throws Excecao1, Excecao2 {…}
Exception
Para tratar a exceção no método utilizamos o try/catch.
Exception
Executando o código novamente
Exception
Modificando o try para dentro do for qual será o comportamento?
E na chamada do metodo2?
E na chamada do metodo1?
Divisão por 0
Referência Nula

Exception
A partir do momento que uma exception foi catched (pega, tratada, capturada , handled), a execução volta ao normal a partir daquele ponto.
ArrayIndexOutOfBoundsException ou um NullPointerException poderia ser facilmente evitado com o for corretamente escrito ou com ifs que checariam os limites da array.
tais problemas provavelmente poderiam ser evitados pelo programador
Exception
Existem dois tipos de exception
Checadas (Verificadas) –> o compilador verifica e obriga os usuários que chamam o método ou construtor a tratar a exceção
Não – checadas –> o compilador não verifica, são os subtipos de Error e RuntimeException
Exception
Exception
Abrir um arquivo para leitura



O código acima não compila e o compilador avisa que é necessário tratar o FileNotFoundException que pode ocorrer:
Exception
Para compilar e fazer o programa funcionar, temos duas maneiras que podemos tratar o problema. A primeira é tratá-lo com o try e catch e a segunda forma de tratar esse erro, é delegar ele para quem chamou o nosso método, isto é, passar para a frente.
Exception
Exception
Para tratar a exceção no método utilizamos o try/catch.
Exception
Não há uma regra para decidir em que momento do seu programa deve-se tratar a exceção. Isso vai depender de em que ponto se tem condições de tomar uma decisão em relação a aquele erro. Enquanto não for o momento, provavelmente será melhor delegar a responsabilidade para o método que invocou
Exception
Exception
Exception
Para lançar a Exceção utilizamos o throw e criamos o objeto Exception
Exception
Exercício
Modificar o sistema de controle de contas correntes para lançar uma exceção de SaldoInsufucienteException caso o valor de saque seja maior que o saldo disponível
Exception
Os blocos try e catch podem conter uma terceira cláusula chamada finally que indica o que deve ser feito após o término do bloco try ou de um catch
O bloco try deve ser precedido por um catch ou finalliy
O finally quer dizer que dando erro ou não o trecho de código compreendido nele será executado
O catch será executa somente se naquele trecho dentro do try resultar em algum erro

Exception
Exception
RuntimeException é a exception mãe de todas as exceptions não verificadas
IllegalArgumentException é uma exceção do pacote do java que podemos utilizar para tratar valores indevidos para chamadas de métodos


Collections framework

## Caelum 

[^caelumoo]


- Arrays são trabalhosos, utilizar estrutura de dados

Manipulá arrays é bastante trabalhoso. Essa dificuldade aparece em diversos momentos:
- não podemos redimensionar um array em Java;
- é impossível buscar diretamente por um determinado elemento cujo índice não se sabe;
- não conseguimos saber quantas posições do array já foram populadas sem criar, para isso, métodos auxiliares.


## Referências

!!!include(src/ref.md)!!!
