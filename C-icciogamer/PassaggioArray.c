//gcc -Wall -Wextra -Wpedantic -std=c11 -g nome.c -o nome
#include <stdio.h>

void stampa_array(int a[],int c);

int main(int argc, char *argv[]){
    int n[4]={1,2,3,4};

    stampa_array(n,4);

    return 0;
}
void stampa_array(int a[], int c){
    for(int i=0; i<c; i++){
        printf("%d\n", a[i]);
    }
}