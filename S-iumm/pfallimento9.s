.text
.global cercabin
.type cercabin, %function

cercabin:
    mov r3,#1 @appoggio
    lsl r1,r1,#2    @dimezzo la grandezza
    mul r3,r3,r1    @setto il salto
    push {r3,lr}
    add r3,r3,#1
    ldr r4,r0,r3
    cmp r4,r2
    beq equal
    cmp r4,r2
    bge left
    ble right


left:


right:

equal: