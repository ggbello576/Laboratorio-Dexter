.text
.global conv,convstring
.type conv, %function
.type convstring, %function

conv:
    cmp r0,#57
    ble minore @branch if less or equal
    sub r0,r0,#87
    mov pc,lr

minore:
    sub r0,r0,#48
    mov pc,lr


convstring:
        push {r4, r5, lr}   @fai una foto alla roba che usavi e la metti nello stack
        mov r4,r0 @metto l'indirizzo dell'inizio dell'array dentro r4
        mov r5,#0 @azzero il contatore 
loop:   ldrb r0,[r4],#1 @legge in r4, mette dentro r0 e manda avanti di 1 r4
        cmp r0,#0
        beq fine
        bl conv
        lsl r5,r5,#4
        add r5,r5,r0
        b loop



fine:
    mov r0,r5
    pop {r4, r5, lr}
    mov pc,lr
