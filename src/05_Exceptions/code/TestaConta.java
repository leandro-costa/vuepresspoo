public class TestaConta {
    public static void main(String[] args) {
        Conta minhaConta = new Conta();// ...
        
        minhaConta.deposita(100);
        System.out.println("Saldo:"+minhaConta.getSaldo());

        try {
            minhaConta.saca(200);
            System.out.println("Consegui sacar");
        } catch (SaldoInsufucienteException e) {
            System.out.println("Não consegui sacar");
            System.out.println("O saldo era: "+e.getSaldo());
            System.out.println("O valor de saque era: "+e.getValor());
        }
        System.out.println("Saldo:"+minhaConta.getSaldo());
        try {            
            minhaConta.deposita(-200);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
        System.out.println("Saldo:"+minhaConta.getSaldo());

        System.out.println(50/0);

        
    }

}
