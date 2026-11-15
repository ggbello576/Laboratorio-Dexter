#include <stdio.h>
#include <stdlib.h>

extern int fact(int x);

int main(int argc, char **argv) {
    int x = atoi(argv[1]);
    printf("Risultato: %d\n", fact(x));
    return 0;
}
