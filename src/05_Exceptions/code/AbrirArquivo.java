import java.io.FileNotFoundException;

public class AbrirArquivo {
    public static void main(String[] args) {
        try {
            metodo();
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo não encontrado, favor selecionar outro arquivo.");            
        }
        System.out.println("FIM MAIN");
    }

    public static void metodo() throws FileNotFoundException {
        new java.io.FileInputStream("arquivo.txt");
    }
}
