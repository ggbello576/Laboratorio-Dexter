#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    char *s = NULL;
    int eta = 25;

    int n = asprintf(&s, "Ho %d anni", eta);

    if (n == -1) {
        return 1;
    }

    printf("%s\n", s);

    free(s);

    return 0;
}