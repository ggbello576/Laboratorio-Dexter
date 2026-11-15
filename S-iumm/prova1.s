.text
.global zero
.type zero, %function

zero:
    cmp r0,#0
    beq fine
    b brutta

fine: mov r0,#1
      mov pc,lr

brutta: mov r0,#0    
    mov pc,lr