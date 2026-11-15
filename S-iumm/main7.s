.data
saluto:
    .string "ciao\n"

.text
.global main
.type main, %function

main:
    push {lr}               @ Salva l'indirizzo di ritorno del chiamante nello stack
    ldr r0, =saluto         @ Carica in r0 l'indirizzo della stringa "ciao\n"
    bl printf               @ Chiama la printf della libreria standard C
    mov r0, #0              @ Imposta il valore di ritorno del main (return 0)
    pop {lr}                @ Ripristina l'indirizzo di ritorno originale
    mov pc, lr              @ Ritorna al chiamante e termina il programma
        