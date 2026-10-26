#include <stdio.h>
#include <stdlib.h>


int main(int argc, char *argv[]){
    FILE *f = fopen(argv[1],"r");
    FILE *g = fopen(argv[2],"w");

    if(f==NULL || g==NULL){
        perror("porcodio");
        return 1;
    }

    fclose(f);
    fclose(g);
    


}