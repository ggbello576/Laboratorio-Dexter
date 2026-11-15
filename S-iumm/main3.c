#include <stdio.h>
#include <stdlib.h>

extern int factr(int x);

int main(int argc, char **argv) {
    int x = atoi(argv[1]);
    printf("Risultato: %d\n", factr(x));
    return 0;
}
