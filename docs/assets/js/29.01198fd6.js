(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{400:function(e,o,a){"use strict";a.r(o);var r=a(29),t=Object(r.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pilha-de-execucao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pilha-de-execucao"}},[e._v("#")]),e._v(" Pilha de Execução")]),e._v(" "),a("p",[e._v("Pilha de Execução\nO método main chama metodo1\nO método metodo1 chama o metodo2\nCada um desses métodos pode ter suas próprias variáveis locais, sendo que, por exemplo, o metodo1 não enxerga as variáveis declaradas dentro do main\nPilha de Execução\nToda invocação de método é empilhada em uma estrutura de dados que isola a área de memória de cada um\nQuando um método termina (retorna), ele volta para o método que o invocou. Ele descobre isso através da pilha de execução (stack )\nPilha de Execução\nPilha de Execução\nExecutando o código uma exceção é lançada")]),e._v(" "),a("p",[e._v('Essa é o conhecido rastro da pilha (stacktrace)\nPilha de Execução\nQuando um erro (exceção) ocorre, o JVM entra em estado de alerta e procura dento do metodo se existe algum tratamento especial para o problema\nComo o metodo2 não tem nenhum tratamento a JVM interrompo sua execução e volta um nível na pilha e verifica novamente\nComo o metodo1 também não faz nenhum tratamento a JVM sobe mais um nivel até chegar no main\nComo o main também não faz nenhum trabamento a Thread morre\nException\nO tratamento de erros em Java é feito em tempo de execução através do tratamento de exceção.\nExceções são classes que seguem o modelo O.O. e são lançadas quando o sistema encontra um problema.\nUtilizadas também para validar regras de negócio.\nException\nException(exceção) significa "condição excepcional", e é uma ocorrência que altera o fluxo normal do programa.\nQuando um evento excepcional ocorre em java, diz-se que uma exceção será lançada.\nException\nMétodos podem capturar ou deixar passar exceções que ocorrerem em seu corpo, mas para isto é obrigatório que o método declare a sua decisão.\nPara repassar o tratamento de erro para quem chama o método utilizamos o throws.\nthrows declara que o método pode provocar exceções do tipo declarado (ou de qualquer subtipo).\npublic void validar() throws Excecao1, Excecao2 {…}\nException\nPara tratar a exceção no método utilizamos o try/catch.\nException\nExecutando o código novamente\nException\nModificando o try para dentro do for qual será o comportamento?\nE na chamada do metodo2?\nE na chamada do metodo1?\nDivisão por 0\nReferência Nula')]),e._v(" "),a("p",[e._v("Exception\nA partir do momento que uma exception foi catched (pega, tratada, capturada , handled), a execução volta ao normal a partir daquele ponto.\nArrayIndexOutOfBoundsException ou um NullPointerException poderia ser facilmente evitado com o for corretamente escrito ou com ifs que checariam os limites da array.\ntais problemas provavelmente poderiam ser evitados pelo programador\nException\nExistem dois tipos de exception\nChecadas (Verificadas) –> o compilador verifica e obriga os usuários que chamam o método ou construtor a tratar a exceção\nNão – checadas –> o compilador não verifica, são os subtipos de Error e RuntimeException\nException\nException\nAbrir um arquivo para leitura")]),e._v(" "),a("p",[e._v("O código acima não compila e o compilador avisa que é necessário tratar o FileNotFoundException que pode ocorrer:\nException\nPara compilar e fazer o programa funcionar, temos duas maneiras que podemos tratar o problema. A primeira é tratá-lo com o try e catch e a segunda forma de tratar esse erro, é delegar ele para quem chamou o nosso método, isto é, passar para a frente.\nException\nException\nPara tratar a exceção no método utilizamos o try/catch.\nException\nNão há uma regra para decidir em que momento do seu programa deve-se tratar a exceção. Isso vai depender de em que ponto se tem condições de tomar uma decisão em relação a aquele erro. Enquanto não for o momento, provavelmente será melhor delegar a responsabilidade para o método que invocou\nException\nException\nException\nPara lançar a Exceção utilizamos o throw e criamos o objeto Exception\nException\nExercício\nModificar o sistema de controle de contas correntes para lançar uma exceção de SaldoInsufucienteException caso o valor de saque seja maior que o saldo disponível\nException\nOs blocos try e catch podem conter uma terceira cláusula chamada finally que indica o que deve ser feito após o término do bloco try ou de um catch\nO bloco try deve ser precedido por um catch ou finalliy\nO finally quer dizer que dando erro ou não o trecho de código compreendido nele será executado\nO catch será executa somente se naquele trecho dentro do try resultar em algum erro")]),e._v(" "),a("p",[e._v("Exception\nException\nRuntimeException é a exception mãe de todas as exceptions não verificadas\nIllegalArgumentException é uma exceção do pacote do java que podemos utilizar para tratar valores indevidos para chamadas de métodos")]),e._v(" "),a("p",[e._v("Collections framework")]),e._v(" "),a("h2",{attrs:{id:"caelum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caelum"}},[e._v("#")]),e._v(" Caelum")]),e._v(" "),a("p",[a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])])]),e._v(" "),a("ul",[a("li",[e._v("Arrays são trabalhosos, utilizar estrutura de dados")])]),e._v(" "),a("p",[e._v("Manipulá arrays é bastante trabalhoso. Essa dificuldade aparece em diversos momentos:")]),e._v(" "),a("ul",[a("li",[e._v("não podemos redimensionar um array em Java;")]),e._v(" "),a("li",[e._v("é impossível buscar diretamente por um determinado elemento cujo índice não se sabe;")]),e._v(" "),a("li",[e._v("não conseguimos saber quantas posições do array já foram populadas sem criar, para isso, métodos auxiliares.")])]),e._v(" "),a("h2",{attrs:{id:"referencias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referencias"}},[e._v("#")]),e._v(" Referências")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Caelum. Java e Orientação a Objetos - Curso fj-11. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);o.default=t.exports}}]);