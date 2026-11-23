.text
.global cercabin
.type cercabin, %function

cercabin:
    push {r4}                   @ Salvo r4 per tenerci l'indice mid senza perderlo
    mov r3, #0                  @ r3 = sx = 0 (indice sinistro)
    sub r1, r1, #1              @ r1 = dx = n - 1 (indice destro)

loop:
    cmp r3, r1                  @ Confronto sx (r3) con dx (r1)
    bgt bad                     @ Se sx > dx, l'elemento non c'è -> esco con -1

    add r4, r3, r1              @ r4 = sx + dx
    lsr r4, r4, #1              @ r4 = mid = (sx + dx) / 2

    ldr r12, [r0, r4, lsl #2]   @ r12 = vec[mid] (accedo a vec + mid * 4)

    cmp r12, r2                 @ Confronto vec[mid] (r12) con x (r2)
    beq equal                   @ Se vec[mid] == x -> trovato!
    blt right                   @ Se vec[mid] < x -> cerco nella metà destra

left:                           @ Altrimenti vec[mid] > x -> cerco a sinistra
    sub r1, r4, #1              @ dx = mid - 1
    b loop

right:
    add r3, r4, #1              @ sx = mid + 1
    b loop

equal:
    mov r0, r4                  @ Metto l'indice mid in r0 come valore di ritorno
    pop {r4}                    @ Ripristino r4
    mov pc, lr                  @ Ritorno al chiamante

bad:
    mov r0, #-1                 @ Metto -1 in r0 (elemento non trovato)
    pop {r4}                    @ Ripristino r4
    mov pc, lr                  @ Ritorno al chiamante
    