#include <stdio.h>
#include <stdlib.h>

int *crea_array(int n);

int main(int argc, char *argv[]) {

    int *a = crea_array(4);

    if (a == NULL) {
        return 1;
    }

    for (int i = 0; i < 4; i++) {
        printf("%d\n", a[i]);
    }

    free(a);

    return 0;
}

int *crea_array(int n) {

    int *a = malloc(n * sizeof(int));

    if (a == NULL) {
        return NULL;
    }

    for (int i = 0; i < n; i++) {
        a[i] = i * 10;
    }

    return a;
}

//la memoria allocata con malloc NON viene liberata automaticamente quando la funzione termina.
//perche finisce nell heap essendo dinamica, non nello stack-
//finche qualcuno non fa free(a) resta valida