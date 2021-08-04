public class Pessoa{
    private String CPF;
    private String nome;

    public Pessoa(String CPF){
        //formata, valida.....
        this.CPF = CPF;
    }
    
    public String getCPF(){
        return CPF;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    @Override
    public String toString() {
        return nome + " ["+getCPF()+"]";
    }

    @Override
    public boolean equals(Object obj) {
        return CPF.equals(((Pessoa)obj).getCPF());
    }
}

