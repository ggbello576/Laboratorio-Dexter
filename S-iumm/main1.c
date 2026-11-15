#include <stdio.h>
#include <stdlib.h>

extern int zero(int x);

int main(int argc, char **argv) {
    int x = atoi(argv[1]);
    printf("Risultato: %d\n", zero(x));
    return 0;
}
