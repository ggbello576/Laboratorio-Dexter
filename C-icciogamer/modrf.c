#include <stdio.h>

void modifica_array(int a[], int n);

int main(int argc, char *argv[]) {
    int numeri[4] = {1, 2, 3, 4};

    modifica_array(numeri, 4);

    for (int i = 0; i < 4; i++) {
        printf("%d\n", numeri[i]);
    }

    return 0;
}

void modifica_array(int a[], int n) {
    for (int i = 0; i < n; i++) {
        a[i] = a[i] * 10;
    }
}

//non sta lavorando su una copia , gli stai passando
//direttamente lgi indirizzi di memoria broski