#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 3;

    int *a = malloc(n * sizeof(int));

    if (a == NULL) {
        return 1;
    }

    a[0] = 10;
    a[1] = 20;
    a[2] = 30;

    int nuovo_n = 5;

    int *tmp = realloc(a, nuovo_n * sizeof(int));
    //usi un altra variabile perche rischi di perdere 
    //l indirizzo di quella vecchia se da null

    if (tmp == NULL) {
        free(a); //pulisco la memoria 
        return 1;//termini il programma con errore
    }

    a = tmp;

    a[3] = 40;
    a[4] = 50;

    for (int i = 0; i < nuovo_n; i++) {
        printf("%d\n", a[i]);
    }

    free(a);

    return 0;
}