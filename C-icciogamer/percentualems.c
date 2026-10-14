//Con %ms, invece, scanf può allocare da solo la memoria necessaria.
//invece con %19s devi avere gia un array di 20 locazioni
//dinamicamente
#define _GNU_SOURCE
//%ms RICHIEDE GNU SOURCE 
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    char *nome = NULL;

    printf("Inserisci una parola: ");

    if (scanf("%ms", &nome) == 1) {
        //modifica il puntatore nome mettendo il nuovo indirizzo
        printf("Hai scritto: %s\n", nome);

        free(nome);
    }

    return 0;
}
