public class Professor extends Pessoa {
    private String SIAPE;

    public Professor(String CPF, String SIAPE) {
        super(CPF);
        this.SIAPE = SIAPE;
    }

    public String getSIAPE() {
        return SIAPE;
    }
    @Override
    public String toString() {
        return super.toString() + "[" + getSIAPE() + "]";
    }

}
