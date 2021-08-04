

public class Instituicao {
    private String nome;
    private int qtdTurmasCadastradas;
    private Turma[] turmas;

    public Instituicao(String nome, int qtdTurmas) {
        this.nome = nome;
        turmas = new Turma[qtdTurmas];
    }

    public void addTurma(Turma turma) {
        if(qtdTurmasCadastradas<turmas.length){
            turmas[qtdTurmasCadastradas] = turma;
            qtdTurmasCadastradas++;
        }
    }

    public int obterQuantidadeTurmas() {
        return qtdTurmasCadastradas;
    }

    public int obterQuantidadeTurmasRestantes() {
        return turmas.length - qtdTurmasCadastradas;
    }

    public String getNome() {
        return nome;
    }

}
