public class Principal {
    public static void main(String[] args) {
        String CPF = "000.000.000-00";
        Pessoa pessoa = new Pessoa("Pessoa 1",CPF);
        System.out.println(pessoa);

        String matricula = "2012045123";
        Aluno aluno = new Aluno("Aluno 1", CPF, matricula);
        System.out.println(aluno);
        System.out.println(aluno.equals(pessoa));

        String SIAPE = "1865418";
        Professor professor = new Professor("Professor 1", CPF, SIAPE);
        System.out.println(professor);
        System.out.println(professor.equals(aluno));

        aluno = new Aluno("Aluno", "111.111.111-11", matricula);
        professor = new Professor("Professor 1","222.222.222-22", SIAPE);

        Instituicao instituicao = new Instituicao("IFBA", 5);

        Turma turma = new Turma();
        turma.setProfessor(professor);        
        turma.addAluno(aluno);
        System.out.println(turma.getAlunos()[0]);

        instituicao.addTurma(turma);
        System.out.println(instituicao.obterQuantidadeTurmas());
        System.out.println(instituicao.obterQuantidadeTurmasRestantes());

    }
}
