#include <stdio.h>
#include <stdlib.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    int k=0;
    int lun;
    int a=strlen(argv[1]);
    char *bossetti;
    bossetti= malloc(a *sizeof(int));

    for(int i=1;i<argc;i++){

        a=strlen(argv[i]);
        bossetti=realloc(bossetti,a*sizeof(int));

        for(int j=0; j<a;j++){
            bossetti[k]=argv[i][j];
            k++;
        }
        bossetti[k++]=' ';//spazio didattico
    }
lun=strlen(bossetti);

printf("Stringa libera====> %s ,,,per anni: %d",bossetti,lun);
free(bossetti);

}