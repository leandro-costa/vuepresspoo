

public class AlunoMatriculado {
    private Aluno aluno;
    private int faltas;
    private float nota1, nota2,nota3;

    public AlunoMatriculado(Aluno aluno) {
        this.aluno=aluno;
    }

    @Override
    public String toString() {
        return aluno.toString()+ "[Faltas :"+faltas+"][Nota1:"+nota1+", Nota2:"+nota2+", Nota3:"+nota3+"]";
    }

}
