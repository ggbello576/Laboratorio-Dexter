#include <stdio.h>

extern int cercabin(int *vec, int n, int x);

int main(void) {
    int vec[] = {3, 7, 12, 19, 24, 31, 45, 58, 70, 88};
    int n = sizeof(vec) / sizeof(vec[0]);
    int x;

    printf("Array: [3, 7, 12, 19, 24, 31, 45, 58, 70, 88]\n");
    printf("Inserisci il numero da cercare: ");
    scanf("%d", &x);

    int idx = cercabin(vec, n, x);

    if (idx != -1) {
        printf("Trovato %d all'indice %d\n", x, idx);
    } else {
        printf("%d non trovato (-1)\n", x);
    }

    return 0;
}