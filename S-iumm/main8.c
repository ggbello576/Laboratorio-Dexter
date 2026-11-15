#include <stdio.h>

extern char *creacopia(char *s);

int main(int argc, char **argv) {
    printf("%s\n", creacopia(argv[1]));
    return 0;
}
