    //gcc -Wall -Wextra -Wpedantic -std=c11 -g nome.c -o nome
    #include <stdio.h>
    #include <stdlib.h>

    int main(int argc, char *argv[]){
        int c;
        int d;
        FILE *f = fopen("pari.txt","w");
        FILE *g = fopen("dispari.txt","w");
        if (f == NULL){
            return 1;
        }
        if (g == NULL){
            return 1;
        }
        int a;
        for(int i=1;i<argc;i++){
            a = atoi(argv[i]);
            if(a%2==0){
                fprintf(f,"%d\n",a);
                c=c+a;
            }else {
                fprintf(g,"%d\n",a);
                d=d+a;
            }
        }
    printf("questa è la somma dei numeri presi per pari dal programma che prende i pari: %d\n",c);
    printf("questa è la somma dei numeri presi per dispari dal programma che prende i dispari: %d\n",d);

    return 0;
    }

