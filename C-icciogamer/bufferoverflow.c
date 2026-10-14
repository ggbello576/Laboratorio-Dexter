//char nome[10];
//scanf("%s", nome);
//se uno inserisce abcdefghijklm sono piu caratteri di quelli che puo metter
//ricordo stringa finale \0

//scanf("%9s", nome); //piu sicuro
//%9s = massimo 9 caratteri, il decimo \0

#include <stdio.h>

int main(int argc, char *argv[]) {
    char nome[10];

    printf("Inserisci una parola: ");
    scanf("%9s", nome);

    printf("Hai scritto: %s\n", nome);

    return 0;
}
