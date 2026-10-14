#include <stdio.h>

void stampa(int a[], int n);

int main(int argc, char *argv[]) {
    int numeri[6] = {10, 20, 30, 40, 50, 60};

    stampa(&numeri[3], 3);

    return 0;
}

void stampa(int a[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d\n", a[i]);
    }
}

//&a[i] può essere usato come nuovo punto di partenza per una f che riceve un array 
