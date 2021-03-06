<ul>
    <li><a href="https://www.w3schools.blog/thread-life-cycle-in-java">Thread life cycle</a></li>
    <li><a href="https://www.w3schools.blog/way-of-creating-thread-in-java">Way of creating thread</a></li>
    <li><a href="https://www.w3schools.blog/better-way-to-create-a-thread-in-java">Which is a better way to create a
            thread?</a></li>
    <li><a href="https://www.w3schools.blog/methods-of-thread-class">Methods of Thread class</a></li>
    <li><a href="https://www.w3schools.blog/thread-start-vs-run-method">Difference between thread start and run
            method</a></li>
    <li><a href="https://www.w3schools.blog/why-we-call-start-method-in-thread">Why we call start method in thread?</a>
    </li>
    <li><a href="https://www.w3schools.blog/override-start-method-in-thread">Can we override start method?</a></li>
    <li><a href="https://www.w3schools.blog/override-run-method-in-thread">Can we override run method?</a></li>
    <li><a href="https://www.w3schools.blog/start-a-thread-twice">Is it possible to start a thread twice?</a></li>
    <li><a href="https://www.w3schools.blog/thread-scheduling-in-java">Thread scheduling</a></li>
    <li><a href="https://www.w3schools.blog/thread-priority-in-java">Thread priority</a></li>
    <li><a href="https://www.w3schools.blog/naming-a-thread-in-java">Naming a thread</a></li>
    <li><a href="https://www.w3schools.blog/joining-a-thread-in-java">What is join method?</a></li>
    <li><a href="https://www.w3schools.blog/get-current-thread-in-java">How to get current thread?</a></li>
    <li><a href="https://www.w3schools.blog/daemon-thread-in-java">Daemon thread</a></li>
    <li><a href="https://www.w3schools.blog/call-run-method-directly">Can we call run method directly?</a></li>
    <li><a href="https://www.w3schools.blog/yield-sleep-thread-methods">What is the difference between sleep and yield
            method?</a></li>
    <li><a href="https://www.w3schools.blog/deadlock-in-java">Deadlock</a></li>
    <li><a href="https://www.w3schools.blog/starvation-in-java">Starvation</a></li>
    <li><a href="https://www.w3schools.blog/inter-thread-communication-in-java">Inter-thread communication</a></li>
    <li><a href="https://www.w3schools.blog/synchronization-in-java">Synchronization</a></li>
    <li><a href="https://www.w3schools.blog/synchronized-method-in-java">Synchronized method</a></li>
    <li><a href="https://www.w3schools.blog/static-synchronization-in-java">Static synchronization</a></li>
    <li><a href="https://www.w3schools.blog/synchronized-block-in-java">Synchronized block</a></li>
</ul>

# Threads
- Threads s??o linhas de execu????es que realizam tarefas simult??neas (caso tenhamos mais de 1 processador) ou de forma a compartilhar o processamento. 
- Cada thread ?? como um programa individual que tem total poder sobre a CPU.
- Java suporta explicitamente como parte da linguagem.
- Com o uso de Threads ?? poss??vel dividir o programa em dois ou mais processos que podem rodar de forma paralela.
- Multithreading implica em duas ou mais tarefas rodando de forma concorrente (aparentemente em paralelo) dentro de um mesmo programa.
- Alguns programas necessitam fazer v??rias tarefas que requerem recursos computacionais diversos. Se estas tarefas podem ser feitas independentemente, ent??o ?? poss??vel usar threads para que o programa n??o fique limitado a performance dos recursos lentos (I/O).

<figure>

@startuml
[T1] lasts 5 days
[T2] lasts 3 days
[T2] starts at [T1]'s end
[T3] lasts 5 days
[T3] starts at [T2]'s end


[T1.1] as [T4] lasts 6 days
[T4] displays on same row as [T1]
[T4] starts at [T3]'s end

[T3.1] as [T5] lasts 4 days
[T5] displays on same row as [T3]
[T5] starts at [T4]'s end

	
[T2.1] as [T6] lasts 3 days
[T6] displays on same row as [T2]
[T6] starts at [T5]'s end

@enduml

<figcaption>Exemplo de uso de tempo do processador pelas Threads.</figcaption>
</figure>
<br>

<figure>

@startuml
state nascimento
state pronta
state executando
state bloqueada
state esperando
state dormindo
state morta #brown

nascimento --> pronta : start()
pronta --> executando: run()
executando --> esperando : wait()
executando --> dormindo : sleep()
executando --> morta : fim do run()
executando --> bloqueada : I/O
bloqueada --> pronta : fim I/O
esperando --> pronta : notify()
dormindo --> pronta : fim tempo 

@enduml

<figcaption>Diagrama de estado de uma Thread.</figcaption>
</figure>

- Existem duas formas para criar um thread: 
    - Estendendo a classe Thread
    - Implementando a interface Runnable. 
- Nos dois casos ?? necess??rio sobrescrever o m??todo `run()` que ?? o " main()" do thread. 
- O m??todo run deve conter a execu????o que ir?? rodar pelo tempo de vida do thread. Quando o m??todo terminar, o thread morre. 

- Para iniciar o thread ?? necess??rio chamar o m??todo `start()` . 
- ?? a maquina virtual quem controla a execu????o e o ciclo de vida do thread. 

## Herdando a classe Thread

```java
public class ThreadA extends Thread { 
    public void run(){ 
        for(int x=0;x<1000000;x++){ 
            System.out.println("A: "+x); 
        } 
    }
}
```

## Implementando a interface Runnable
```java
public class ThreadB implements Runnable { 
    public void run(){ 
        for(int x=0;x<1000000;x++){ 
            System.out.println("B: "+x); 
        } 
    } 
}
```

```java
public class TesteThread{ 
    public static void main(String[] args){ 
        ThreadA ta = new ThreadA(); 
        Thread tb = new Thread(new ThreadB()); 
        ta.start(); 
        tb.start(); 
    } 
}

```
- Estendendo a classe Thread significa que a subclasse n??o pode estender qualquer outra classe, enquanto que a classe que implementa a interface Runnable tem essa op????o.

## Synchronized
- Permite que blocos sens??veis ao acesso simult??neo sejam protegidos de corrup????o
- Impede que objetos os utilizem ao mesmo tempo. 
    - Se um recurso cr??tico est?? sendo usado, s?? um thread tem acesso. 
    - ?? preciso que os outros esperem at?? que o recurso esteja livre. 
- M??todos sincronizados s??o m??todos que s??o usados para controlar o acesso a um objeto. 
- Uma thread apenas executa um m??todo sincronizado depois que adquiriu o bloqueio para o objeto do m??todo ou classe. 
- Se o bloqueio j?? est?? em poder de outra thread, a thread chamada aguarda. 
- Uma thread abandona o bloqueio simplesmente ao finalizar do m??todo sincronizado, permitindo que a pr??xima thread esperando por este bloqueio possa prosseguir. 
- M??todos sincronizados s??o ??teis em situa????es em que os m??todos podem manipular o estado de um objeto de formas que podem corromper o estado, se executados simultaneamente. 

```java
//...
public void metodo() {
 synchronized (this) {
 // conteudo do metodo
 }
}
//...

public synchronized void metodo() {
 // conteudo do metodo
}

//...
```

## Estados de uma Thread

- Nova Thread
    - Quando uma Thread ?? criada mas n??o foi chamado o start()
- Rodando
    - Quando o m??todo start() ?? chamado em uma nova thread ela altera o seu estado para em execu????o ?? chamando o m??todo run()
- N??o Execu????o
    - Uma thread interrompe sua execu????o quando um quatro seguintes eventos ocorrem:
        - Quando o m??todo sleep() ?? chamado e ele dorme por um per??odo de tempo especificado
        - Quando o m??todo suspend() ?? invocado
        - Quando o m??todo wait() ?? chamado e a thread espera para a notifica????o de um recurso livre ou aguarda a conclus??o de outra thread ou espera para adquirir um bloqueio de um objeto.
        - A thread est?? bloqueado em I / O e aguarda a sua conclus??o

## Acessando informa????es da Threads
Thread.currentThread() pode retornar uma sa??da como Thread [threadA, 5, main]
- Sendo
    - nome da Thread
    - prioridade da thread 
    - nome do grupo a que pertence
## Prioridade de Execu????o
- Nas threads a prioridade pode ser setada a qualquer momento
    - setPriority()
    - getPriority()
- Thread 
    - MIN_PRIORITY (0)
    - NORM_PRIORITY (5)
    - MAX_PRIORITY (10)

## Gerenciando as Threads
- Dormir e acordar
    - A classe thread cont??m um m??todo est??tico chamado sleep() que faz a thread em execu????o no momento pause sua execu????o e mude para o estado de sono. A thread vai dormir por pelo menos o tempo especificado em seu par??metro, antes de entrar no estado execut??vel. 
- Waiting and Notifying
    - Esperando e notificando fornecer os meios de comunica????o entre as thread que sincroniza sobre o mesmo objeto. 
    - As threads executam os m??todos wait() e notify() (ou notifyAll()) no objeto compartilhado para esta finalidade. 
    - O notifyAll (), notify() e wait() s??o m??todos da classe Object. Estes m??todos podem ser chamados apenas a partir de dentro de um contexto sincronizado (m??todo sincronizado ou bloco sincronizado), caso contr??rio, a chamada ir?? resultar em um IllegalMonitorStateException. 
    - O notifyAll() m??todo acorda todas as threads em espera no recurso. Nesta situa????o, as threads despertadas competem para o recurso. Uma threads recebe o recurso e os outros v??o voltar a esperar.
