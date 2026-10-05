#include <stdio.h>

int main() {
    FILE *f = fopen("numeri.txt", "w");
    //apri il file nell indirizzo f 
    //il file numeri in scrittura (writing)

    if (f == NULL) {
        perror("messaggio di errore");
        return 1;
    }

    for (int i = 1; i <= 5; i++) {
        fprintf(f, "%d\n", i);//scrivi sul file
        //sul file f, scrivi un intero i (%d) e vai a capo
    }

    fclose(f);//chiudi il file

    return 0;
}