#include <stdio.h>

int main(int argc, char *argv[]){
    
    FILE *f = fopen("numeri.txt","r");
//apri numeri.txt in r=lettura/w=write/a=tutti e due 
//*f riferimeto al file aperto   
if(f==NULL){
        perror("succhiamelo");
        return 1;
    }

    int x;
    while (fscanf(f,"%d",&x)==1 ){
        //legge da file al posto che da tastiera, tipo scanf
        //%d leggi un intero/%s string/%f float
        //&x salvalo nel indirizzo di memoria di x
        printf("letto: %d\n",x);
    }
    fclose(f);
    return 0;

}
