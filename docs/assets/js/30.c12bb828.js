(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{401:function(a,s,t){"use strict";t.r(s);var e=t(29),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"threads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threads"}},[a._v("#")]),a._v(" Threads")]),a._v(" "),t("ul",[t("li",[a._v("Threads são linhas de execuções que realizam tarefas simultâneas (caso tenhamos mais de 1 processador) ou de forma a compartilhar o processamento.")]),a._v(" "),t("li",[a._v("Cada thread é como um programa individual que tem total poder sobre a CPU.")]),a._v(" "),t("li",[a._v("Java suporta explicitamente como parte da linguagem.")]),a._v(" "),t("li",[a._v("Com o uso de Threads é possível dividir o programa em dois ou mais processos que podem rodar de forma paralela.")]),a._v(" "),t("li",[a._v("Multithreading implica em duas ou mais tarefas rodando de forma concorrente (aparentemente em paralelo) dentro de um mesmo programa.")]),a._v(" "),t("li",[a._v("Alguns programas necessitam fazer várias tarefas que requerem recursos computacionais diversos. Se estas tarefas podem ser feitas independentemente, então é possível usar threads para que o programa não fique limitado a performance dos recursos lentos (I/O).")])]),a._v(" "),t("div",{staticClass:"language-plantuml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@startgantt\n\n[T1] lasts 5 days\n[T2] lasts 3 days\n[T2] starts at [T1]'s end\n[T3] lasts 5 days\n[T3] starts at [T2]'s end\n\n\n[T1.1] as [T4] lasts 6 days\n[T4] displays on same row as [T1]\n[T4] starts at [T3]'s end\n\n[T3.1] as [T5] lasts 4 days\n[T5] displays on same row as [T3]\n[T5] starts at [T4]'s end\n\n\t\n[T2.1] as [T6] lasts 3 days\n[T6] displays on same row as [T2]\n[T6] starts at [T5]'s end\n\n\t\n\n@endgantt\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br")])]),t("br"),a._v(" "),t("div",{staticClass:"language-plantuml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@startuml\n\nstate nascimento\nstate pronta\nstate executando\nstate bloqueada\nstate esperando\nstate dormindo\nstate morta #brown\n\nnascimento --\x3e pronta : start()\npronta --\x3e executando: run()\nexecutando --\x3e esperando : wait()\nexecutando --\x3e dormindo : sleep()\nexecutando --\x3e morta : fim do run()\nexecutando --\x3e bloqueada : I/O\nbloqueada --\x3e pronta : fim I/O\nesperando --\x3e pronta : notify()\ndormindo --\x3e pronta : fim tempo \n\n\n@enduml\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br")])]),t("ul",[t("li",[a._v("Existem duas formas para criar um thread:\n"),t("ul",[t("li",[a._v("Extendendo a classe Thread")]),a._v(" "),t("li",[a._v("Implementando a interface Runnable.")])])]),a._v(" "),t("li",[a._v('Nos dois casos é necessário sobrescrever o método run() que é o " main()" do thread.')]),a._v(" "),t("li",[a._v("O método run deve conter a execução que irá rodar pelo tempo de vida do thread. Quando o método terminar, o thread morre.")]),a._v(" "),t("li",[a._v("Para iniciar o thread é necessário chamar o métod o start() .")]),a._v(" "),t("li",[a._v("É a maquina virtual quem controla a execução e o ciclo de vida do thread.")])]),a._v(" "),t("h2",{attrs:{id:"herdando-a-classe-thread"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#herdando-a-classe-thread"}},[a._v("#")]),a._v(" Herdando a classe Thread")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadA")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A: "')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"implementando-a-interface-runnable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementando-a-interface-runnable"}},[a._v("#")]),a._v(" Implementando a interface Runnable")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadB")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"B: "')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TesteThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadA")]),a._v(" ta "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadA")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" tb "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        ta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        tb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("ul",[t("li",[a._v("Estendendo a classe Thread significa que a subclasse não pode estender qualquer outra classe, enquanto que a classe que implementa a interface Runnable tem essa opção.")])]),a._v(" "),t("h2",{attrs:{id:"synchronized"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized"}},[a._v("#")]),a._v(" Synchronized")]),a._v(" "),t("ul",[t("li",[a._v("Permite que blocos sensíveis ao acesso simultâneo sejam protegidos de corrupção")]),a._v(" "),t("li",[a._v("Impede que objetos os utilizem ao mesmo tempo.\n"),t("ul",[t("li",[a._v("Se um recurso crítico está sendo usado, só um thread tem acesso.")]),a._v(" "),t("li",[a._v("É preciso que os outros esperem até que o recurso esteja livre.")])])]),a._v(" "),t("li",[a._v("Métodos sincronizados são métodos que são usados para controlar o acesso a um objeto.")]),a._v(" "),t("li",[a._v("Uma thread apenas executa um método sincronizado depois que adquiriu o bloqueio para o objeto do método ou classe.")]),a._v(" "),t("li",[a._v("Se o bloqueio já está em poder de outra thread, a thread chamada aguarda.")]),a._v(" "),t("li",[a._v("Uma thread abandona o bloqueio simplesmente ao finalizar do método sincronizado, permitindo que a próxima thread esperando por este bloqueio possa prosseguir.")]),a._v(" "),t("li",[a._v("Métodos sincronizados são úteis em situações em que os métodos podem manipular o estado de um objeto de formas que podem corromper o estado, se executados simultaneamente.")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("metodo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// conteudo do metodo")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("metodo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// conteudo do metodo")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("Estados de uma Thread\nNova Thread\nRodando\nNão Rodando\nMorta\nThread")]),a._v(" "),t("p",[a._v("Nova Thread\nQuando uma Thread é criada mas não foi chamado o start()\nRodando\nQuando o método start() é chamado em uma nova thread ela altera o seu estado para em execução é chamando o método run()")]),a._v(" "),t("p",[a._v("Threads\nNão Execução\nUma thread interrompe sua execução quando um quatro seguintes eventos ocorrem:\nQuando o método sleep() é chamado e ele dorme por um período de tempo especificado\nQuando o método suspend() é invocado\nQuando o método wait () é chamado e a thread espera para a notificação de um recurso livre ou aguarda a conclusão de outra thread ou espera para adquirir um bloqueio de um objeto.\nA thread está bloqueado em I / O e aguarda a sua conclusão\nThreads\nThread.currentThread() pode retornar uma saída como Thread [threadA, 5, main]\nSendo\nnome da Thread\nprioridade da thread\nnome do grupo a que pertence\nThreads\nPrioridade de Execução\nNas threads a prioridade pode ser setada a qualquer momento\nsetPriority()\ngetPriority()\nThread\nMIN_PRIORITY (0)\nNORM_PRIORITY (5)\nMAX_PRIORITY (10)")]),a._v(" "),t("p",[a._v("Threads\nDormir e acordar\nA classe thread contém um método estático chamado sleep () que faz a thread em execução no momento pause sua execução e mude para o estado de sono. A thread vai dormir por pelo menos o tempo especificado em seu parâmetro, antes de entrar no estado executável.")]),a._v(" "),t("p",[a._v("Threads\nWaiting and Notifying\nEsperando e notificando fornecer os meios de comunicação entre as thread que sincroniza sobre o mesmo objeto.\nAs threads executam os métodos wait() e notify() (ou notifyAll()) no objeto compartilhado para esta finalidade.\nThreads\nWaiting and Notifying\nO notifyAll (), notify () e wait () são métodos da classe Object. Estes métodos podem ser chamados apenas a partir de dentro de um contexto sincronizado (método sincronizado ou bloco sincronizado), caso contrário, a chamada irá resultar em um IllegalMonitorStateException.\nO notifyAll () método acorda todas as threads em espera no recurso. Nesta situação, as threads despertadas competem para o recurso. Uma threads recebe o recurso e os outros vão voltar a esperar.")])])}),[],!1,null,null,null);s.default=n.exports}}]);