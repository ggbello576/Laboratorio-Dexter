#include <stdio.h>
#include <stdlib.h> // per malloc

int main(int argc, char *argv[]) {
    int n;

    printf("quanti numeri vuoi");
    scanf("%d", &n); //%d prende un intero &n metti nell'
    //indirizzo di memoria di n

    int *a = malloc(n *sizeof(int));
    //sizeof dice quanti bit servono per int
    //malloc() riservami n bit in memoria 
    //*a una variabile che contiene l'indirizzo di un int, si usa perche malloc restituisce un indirizzo di memoria 
    
    if (a == NULL) {
        printf("Errore di allocazione\n");
        return 1;
    }
    free (a); //liberi memoria array a 
    return 0;
}
