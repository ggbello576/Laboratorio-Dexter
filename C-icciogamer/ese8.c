#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int confrontas(const char *s, const char *q);

int main(int argc, char *argv[]){
    char *s=argv[1];
    for(int i=1;i<argc;i++){
        confrontas(s,argv[i+1]);
        if(confrontas==-1){
            s = argv[i];
        }else if(confrontas==1){
            s=argv[i+1];
        }else continue;
    }
printf("la parola piu corta è %s",s);
}

int confrontas(const char *s, const char *q){
    int a;
    a=strlen(s);
    int b;
    b=strlen(q);

    if(a>b){
        return -1;
    } else if(b<a){
        return 1;
    } else return 0;
}