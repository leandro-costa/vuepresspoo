Analisando o processo de conversão de um numero inteiro para o seu correspondente texto por extenso percebemos que existe muita coisa em comum quando são adicionados novos dígitos.

1. Crie uma família de classes (utilize herança) para transformar um número inteiro em seu correspondente texto por extenso sendo possível executar o código abaixo.

    ```java
    ConverterExtenso ce = null;
    ce = new ConverterExtenso4Digitos(9999);
    System.out.println(ce.toString());
    // -> Nove Mil Novecentos e Noventa e Nove
    ce = new ConverterExtenso3Digitos(999);
    System.out.println(ce.toString());
    // -> Novecentos e Noventa e Nove
    ce = new ConverterExtenso2Digitos(99);
    System.out.println(ce.toString());
    // -> Noventa e Nove
    ce = new ConverterExtenso1Digito(9);
    System.out.println(ce.toString());
    // -> Nove
    ```
    Segue exemplo:

    ```java

    package br.edu.ifba.saj.ads.poo.extenso;


    ... class ConverterExtenso1Digito {
        ... int numero;
        ... String[] porExtenso =  { "Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez" };

        ... ConverterExtenso1Digito ...

        ...

        @Override
        ... String toString() {
            return porExtenso[this.numero%10];
        }

    }

    ```

    ```java

    ... class ConverterExtenso2Digitos ... {
        String[] dezenasBaixas = { "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito",
                "Dezenove" };
        String[] porExtenso =  { "", "", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta",
                    "Oitenta", "Noventa" };

        ... ConverterExtenso2Digitos ...

        ...

        @Override
        ... String toString() {
            if(... < 10 ){
                return ...(passa a bola para ConverterExtenso1Digito);
            }else{
                if( ... < 20 ){
                    return dezenasBaixas[this.numero%10];    
                }
                String retorno = porExtenso[... / 10];
                
                if (... % 10 != 0) {
                    retorno+=" e " ...(passa a bola para ConverterExtenso1Digito);
                }
                return retorno;
            }
        }
    }

    ```

1. Utilizou Polimorfismo? Onde, e porque?
1. É possivel utilizar o `super` para resolver o problema?
1. Utilizou Encapsulamento (métodos de acesso e modificadores de acesso)? Onde, e porque?
1. Utilizou (Poderia ter utilizado) Métodos/Atributos de Classe? Caso sim, de que forma?



