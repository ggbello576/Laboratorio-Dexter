.text
.global factr
.type factr, %function

factr:
    cmp r0, #1          @ Caso base: se n <= 1
    ble caso_base       @ ritorna 1 senza toccare lo stack

    push {r0, lr}       @ Salvo il mio n (r0) e l'indirizzo del chiamante (lr)
    sub r0, r0, #1      @ Preparo il parametro per la chiamata: r0 = n - 1
    bl factr            @ CHIAMATA RICORSIVA: factr(n - 1). Al ritorno r0 = (n - 1)!

    pop {r1, lr}        @ Recupero il vecchio n in r1 e l'indirizzo del chiamante in lr
    mul r0, r1, r0      @ Calcolo n * (n - 1)!
    mov pc, lr          @ Torno al chiamante
    
caso_base:
    mov r0, #1
    mov pc, lr