import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;

public class TesteUnitario {
    @Test
    public void pessoaToString() {
        String CPF = "000.000.000-00";
        Pessoa pessoa = new Pessoa(CPF);
        pessoa.setNome("Pessoa 1");
        assertEquals(pessoa.toString(), "Pessoa 1 [000.000.000-00]");
    }
    
    @Test
    public void alunoToString() {
        String CPF = "000.000.000-00";
        String matricula = "2012045123";
        Aluno aluno = new Aluno(CPF, matricula);
        aluno.setNome("Aluno 1");
        assertEquals(aluno.toString(), "Aluno 1 [000.000.000-00][2012045123]");
    }
    
    @Test
    public void alunoEqualsPessoa() {
        String CPF = "000.000.000-00";
        Pessoa pessoa = new Pessoa(CPF);
        pessoa.setNome("Pessoa 1");

        String matricula = "2012045123";
        Aluno aluno = new Aluno(CPF, matricula);
        aluno.setNome("Aluno 1");

        assertEquals(aluno, pessoa);
    }

    //TODO outros testes
    @Test
    public void professorEqualsPessoa() {
        
        assertEquals(1, 2);
    }

}
