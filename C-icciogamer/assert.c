#include <stdio.h>
#include <assert.h>

int dividi(int a, int b);

int main(int argc, char *argv[]) {
    int risultato = dividi(10, 3);

    printf("%d\n", risultato);

    return 0;
}

int dividi(int a, int b) {
    assert(b != 0);

    return a / b;
}

//se b diventasse zero(impossibile)
//il programma si bloccherebbe 