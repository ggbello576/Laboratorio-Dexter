#include <stdio.h>

extern int my_strlen(char *s);

int main(int argc, char **argv) {
    printf("Lunghezza: %d\n", my_strlen(argv[1]));
    return 0;
}