.text
.global my_strlen
.type my_strlen, %function

my_strlen: 
    mov r3,r0 @passiamo l'indirizzo del primo valore a r3
    mov r0,#0 @contatore
l:  ldrb r1,[r3],#1
    cmp r1,#0
    beq fine
    add r0,r0,#1
    b l


fine:
    mov pc,lr