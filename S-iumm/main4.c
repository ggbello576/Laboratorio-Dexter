#include <stdio.h>
#include <stdlib.h>

extern int fib(int x);

int main(int argc, char **argv) {
    int x = atoi(argv[1]);
    printf("Risultato: %d\n", fib(x));
    return 0;
}
