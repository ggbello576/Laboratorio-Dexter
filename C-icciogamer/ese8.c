#include <stdio.h>

int confrontas(const char *s, const char *q);

int main(int argc, char *argv[]) {
    if (argc < 2) {
        fprintf(stderr, "non ci sono abbastanza stringhe");
        return 1;
    }

    const char *s = argv[1];

    for (int i = 2; i < argc; i++) {
        if (confrontas(s, argv[i]) > 0) {
            s = argv[i];
        }
    }

    printf("la stringa piu piccola è %s\n", s);
    return 0;
}

int confrontas(const char *s, const char *q) {
    int i = 0;

    while (s[i] != '\0' && q[i] != '\0') {
        if (s[i] < q[i]) {
            return -1;
        }
        if (s[i] > q[i]) {
            return 1;
        }
        i++;
    }

    if (s[i] == '\0' && q[i] == '\0') {
        return 0;
    }

    if (s[i] == '\0') {
        return -1;
    } else {
        return 1;
}
}
