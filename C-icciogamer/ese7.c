#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

void maiuscole(char *s);

int main(int argc, char *argv[]) {

    for(int d=1;d<argc;d++){
        maiuscole(argv[d]);
        printf("%s  ",argv[d]);
    }

}

void maiuscole(char *s){
    int a;
    a=strlen(s);
    for(int i=0;i<a;i++){
        s[i]=toupper(s[i]);
    }
}
