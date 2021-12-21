public class Conta {

    private double saldo;

    public double getSaldo() {
        return saldo;
    }

    public void deposita(double valor) {
        if (valor <= 0) {
            throw new IllegalArgumentException("Valor de deposito invalido. Apenas valores positivos são aceitos");
        }
        this.saldo += valor;
    }

    public void saca(double valor) throws SaldoInsufucienteException  {
        if (this.saldo < valor) {
            throw new SaldoInsufucienteException(this.saldo, valor);
        } else {
            this.saldo -= valor;
        }
    }

}
