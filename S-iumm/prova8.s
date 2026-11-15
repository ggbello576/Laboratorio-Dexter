.text
.global creacopia
.type creacopia, %function

creacopia:
    push {r4, r5, r6, lr}       @ Salva i registri protetti e l'indirizzo di ritorno
    mov r4, r0                  @ r4 = puntatore che scorre la stringa originale s
    bl strlen                   @ Calcol\a la lunghezza di s (risultato in r0)
    add r0, r0, #1              @ Aggiunge 1 byte per il terminatore '\0'
    bl malloc                   @ Alloca (len + 1) byte (nuovo indirizzo in r0)
    mov r5, r0                  @ r5 = indirizzo iniziale della copia (da restituire)
    mov r6, r0                  @ r6 = puntatore mobile per scrivere nella copia

loop:
    ldrb r1, [r4], #1           @ Legge 1 byte dalla stringa originale e avanza r4
    strb r1, [r6], #1           @ Scrive quel byte nella copia e avanza r6
    cmp r1, #0                  @ Ha appena copiato il terminatore '\0'?
    bne loop                    @ Se no, continua a copiare il carattere successivo

fine:
    mov r0, r5                  @ Imposta l'indirizzo iniziale della copia in r0
    pop {r4, r5, r6, lr}        @ Ripristina i registri originali dallo stack
    mov pc, lr                  @ Ritorna al chiamante