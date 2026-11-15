.text
.global fib
.type fib, %function

fib:  
    cmp r0,#0
    beq caso1 @casi base
    cmp r0,#1
    beq caso2

    push {r0,lr}    @salvo il valore di r0,il mio (n)
    sub r0,r0,#1    @decremento il valore di ritorno (n-1)
    bl fib          @calcola fibo di n-1
    pop {r1,lr}     @r1 vecchio n, lr indirizzo originale
    push {r0, lr}   @ Salva fibo(n - 1) e lr 
    sub r0, r1, #2  @r0 =n-2
    bl fib          @calcoli n-2
    pop {r1, lr}    @r1=fibo(n-1),lr=indirizzo di ritorno originale
    add r0,r1,r0    @0=fibo(n-1)+fibo(n-2)
    mov pc, lr

caso1:
    mov r0,#0
    mov pc,lr
caso2:
    mov r0,#1
    mov pc,lr