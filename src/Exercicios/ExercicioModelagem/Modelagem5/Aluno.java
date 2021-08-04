public class Aluno extends Pessoa {
    // private String CPF; veio do pai
    private String matricula;

    public Aluno(String CPF, String matricula) {
        super(CPF);
        // this.CPF = CPF;
        this.matricula = matricula;
    }

    public String getMatricula() {
        return matricula;
    }

    @Override
    public String toString() {
        return super.toString() + "[" + getMatricula() + "]";
    }

}