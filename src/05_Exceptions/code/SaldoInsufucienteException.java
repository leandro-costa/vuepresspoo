public class SaldoInsufucienteException extends Exception {
    private double saldo;
    private double valor;

    public SaldoInsufucienteException(double saldo, double valor) {
        this.saldo = saldo;
        this.valor = valor;
    }

    public double getSaldo() {
        return saldo;
    }

    public double getValor() {
        return valor;
    }

}
