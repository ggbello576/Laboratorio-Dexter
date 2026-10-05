#include <stdio.h>

int main() {
    int a[4] = {2, 5, 1, 7};
    int x = 0;

    for (int i = 0; i < 4; i++) {
        x = x + a[i];
    }

    printf("%d\n", x); //%d prende una var int, x e stampa

    return 0;
}