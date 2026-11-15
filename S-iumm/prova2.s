.text
.global fact
.type fact, %function

fact:
    mov r2,r0      @r2 contatore
c:  sub r2,r2,#1
    mul r0,r0,r2 @calcoli il risultato
    cmp r2,#1
    beq fine
    b c

fine:
    mov pc,lr
    

