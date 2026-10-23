#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc,char *argv[]){
    int a;
    for(int i=1; i<argc; i++){

        a=strlen(argv[i]);
        

        for(int j=a-1;j>=0;j--){
            printf("%c",argv[i][j]);
        }
         printf("  \n ");
    }
return 0;
}
