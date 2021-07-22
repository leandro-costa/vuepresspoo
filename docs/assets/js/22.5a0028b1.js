(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{393:function(s,a,t){"use strict";t.r(a);var e=t(29),o=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"encapsulamento"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encapsulamento"}},[s._v("#")]),s._v(" Encapsulamento")]),s._v(" "),t("ul",[t("li",[s._v("Separar o programa em partes, tornando cada parte mais isolada possível uma da outra")]),s._v(" "),t("li",[s._v("A idéia é tornar o software mais flexível, fácil de modificar e de criar novas implementações")]),s._v(" "),t("li",[s._v("Permite utilizar o objeto de uma classe sem necessariamente conhecer sua implementação")]),s._v(" "),t("li",[s._v("Protege o acesso direto aos atributos de uma instância fora da classe onde estes foram criados")]),s._v(" "),t("li",[s._v("Uma grande vantagem do encapsulamento é que toda parte encapsulada pode ser modificada sem que os usuários da classe em questão sejam afetados")])]),s._v(" "),t("h2",{attrs:{id:"modificadores-de-acesso"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modificadores-de-acesso"}},[s._v("#")]),s._v(" Modificadores de acesso")]),s._v(" "),t("ul",[t("li",[s._v("private")]),s._v(" "),t("li",[s._v("protected")]),s._v(" "),t("li",[s._v("public")]),s._v(" "),t("li",[s._v("<padrão> (package, quando não é especificado nenhum dos 3 acima)")])]),s._v(" "),t("figure",[t("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/ZP513e8m403l-ufDl6Y87-142nyffM1ZeQPikHXvkyLg82BghPFEDhDfrfDmv5i3qeY-HuPNEEgEK93JfIVBOBT43kCISqYMMCJPLf6jBDiVucn47d2SCG-Op5W4l05qbXGQLHFQ6bcQpXM85wS7GGfKL-7aRShy8OTBIQhwhUUJBkHPD7-yNKooBusMRwxJpUabF_VVR5wxtvBNzdRnslqKd8LJ-F8x",alt:"uml diagram"}}),s._v(" "),t("figcaption",[s._v("Modificadores de acesso.")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("São aplicados a atributos, métodos, construtores e classes")])]),s._v(" "),t("li",[t("p",[s._v("As classes só podem ser declaradas como public ou padrão")]),s._v(" "),t("ul",[t("li",[s._v("Uma classe com acesso padrão só pode ser detectada por classes do mesmo pacote")]),s._v(" "),t("li",[s._v("Uma classe com acesso público pode ser detectada por classes de todos os pacotes")])])]),s._v(" "),t("li",[t("p",[s._v("Private")]),s._v(" "),t("ul",[t("li",[s._v("Os membros privados só podem ser acessados por um código da mesma classe")])])]),s._v(" "),t("li",[t("p",[s._v("Protected")]),s._v(" "),t("ul",[t("li",[s._v("Os membros protegidos podem ser acessados por outras classes do mesmo pacote, além de subclasses independente do pacote")])])]),s._v(" "),t("li",[t("p",[s._v("Public")]),s._v(" "),t("ul",[t("li",[s._v("Os membros públicos podem ser acessados por todas as outras classes, mesmo de pacotes diferentes")])])]),s._v(" "),t("li",[t("p",[s._v("Padrão")]),s._v(" "),t("ul",[t("li",[s._v("Os membros padrão só podem ser acessados por outras classes do mesmo pacote")])])])]),s._v(" "),t("h2",{attrs:{id:"metodos-de-acesso-get-e-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metodos-de-acesso-get-e-set"}},[s._v("#")]),s._v(" Métodos de acesso (get e set)")]),s._v(" "),t("p",[s._v("Como os atributos/métodos privados ​​só podem ser acessadas dentro da mesma classe (uma classe externa não tem acesso a ela) é possível acessá-los se fornecermos métodos públicos "),t("em",[s._v("get")]),s._v(" e "),t("em",[s._v("set")]),s._v(".")]),s._v(" "),t("p",[s._v("O "),t("em",[s._v("get")]),s._v(" retorna o valor da variável e o "),t("em",[s._v("set")]),s._v(" define o valor.")]),s._v(" "),t("p",[s._v("A sintaxe para ambos é que eles começam com "),t("em",[s._v("get")]),s._v(" ou "),t("em",[s._v("set")]),s._v(" seguido pelo nome do atributo com a primeira letra em maiúscula:")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pessoa")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" nome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// private = acesso restrito")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Get")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Setset")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setNome")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" novoNome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nome "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" novoNome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("O método "),t("em",[s._v("get")]),s._v(" retorna o valor da variável name.")]),s._v(" "),t("p",[s._v("O método "),t("em",[s._v("set")]),s._v(" pega um parâmetro ( novoNome) e o atribui ao atributo "),t("em",[s._v("nome")]),s._v(".")]),s._v(" "),t("p",[s._v("A palavra-chave "),t("em",[s._v("this")]),s._v(" é usada para se referir ao objeto atual.")]),s._v(" "),t("p",[s._v("No entanto, como o atribui "),t("em",[s._v("name")]),s._v(" é declarada como private, não podemos acessá-la de fora desta classe:")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Main")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pessoa")]),s._v(" pessoa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pessoa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    pessoa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nome "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"João"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pessoa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Se o atributo foi declarada como "),t("em",[s._v("public,")]),s._v(" esperaríamos a seguinte saída:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("João\n")])])]),t("p",[s._v("No entanto, ao tentar acessar um atributo "),t("em",[s._v("private,")]),s._v(" obtemos um erro:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('Main.java:4: error: nome has private access in Pessoa\n    pessoa.nome = "João";\n          ^\nMain.java:5: error: nome has private access in Pessoa\n    System.out.println(pessoa.nome);\n                             ^\n2 errors\n')])])]),t("p",[s._v("Em vez disso, usamos os métodos getNome()e setNome()para acessar e atualizar a variável:")]),s._v(" "),t("p",[s._v("Exemplo")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Main")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pessoa")]),s._v(" pessoa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pessoa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    pessoa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setNome")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"João"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Seta o valor do atributo nome variable para "João"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pessoa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getNome")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("saida")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('"João"\n')])])]),t("h2",{attrs:{id:"por-que-encapsulamento"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#por-que-encapsulamento"}},[s._v("#")]),s._v(" Por que encapsulamento?")]),s._v(" "),t("ul",[t("li",[s._v("Melhor controle dos atributos e métodos da classe")]),s._v(" "),t("li",[s._v("Os atributos de classe podem ser somente leitura (se você usar apenas o método "),t("em",[s._v("get")]),s._v(") ou somente gravação (se você usar apenas o método "),t("em",[s._v("set")]),s._v(")")]),s._v(" "),t("li",[s._v("Flexível: o programador pode alterar uma parte do código sem afetar outras partes")]),s._v(" "),t("li",[s._v("Maior segurança de dados")])])])}),[],!1,null,null,null);a.default=o.exports}}]);