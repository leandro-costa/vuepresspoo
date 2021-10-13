---
sidebar: false
---

# 2021.1 POO Final 

1. [65%] Implementar uma estrutura de classes que permita armazenar e manipular dados de um sistema para gerar orçamentos. Você deve se preocupar APENAS com a implementação orientada a objetos que envolve cada entidade do problema. 

    Nesse sistema deve ser possível selecionar um cliente, a data e o vendedor que está realizando o orçamento.

    Para identificar se um produto pode ou não ser inserido no orcamento ele deve exitir no estoque com no mínimo a quantidade de itens que está sendo solicitado
    
    Vários produtos podem ser inseridos no orçamento e o valor total do orçamento deve ser calculado pela soma dos preços de todos os produtos.
    
    Para clientes do tipo Pessoa Física deve ser aplicado um desconto de 3% e para Pessoa Juridica 7% ( isso deve ser pensado para que novos descontos para novos tipos de clientes não seja necessário alterar código. Use polimorfismo para resolver isso).

    Vendedores podem se comportar como clientes e para eles serão aplicados 10% de desconto

    Ao finalizar o orcamento e realizar o pagamento os itens que estavam em estoque podem ter sido vendidos por outros vendedores. Nesse caso deve ser entidido como uma situação excepsional e impedir que o pagamento seja feito, informando qual produto não se encontra mais no estoque.

1. [15%] Explique quais conceitos de Orientação à Objetos você utilizou na sua modelagem.
1. [10%] Identifique relacionamentos do tipo **Agragação** no seu código. Caso não tenha utilizado esse tipo se associação crie um exemplo.
1. [10%]Identifique relacionamentos do tipo **Composição** no seu código. Caso não tenha utilizado esse tipo se associação crie um exemplo.
