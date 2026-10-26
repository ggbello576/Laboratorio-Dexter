#include <stdio.h>
#include <stdlib.h>

int *somme_distinte(int a[], int n, int *size);

int main (int argc,char * argv[]){
    int size;
    int somma=0;
    int s=0;
    int n=argc-1;
    int *alfa= malloc(n *sizeof (int));

    for(int i=0;i<n;i++){
        s=atoi(argv[i+1]);
        alfa[i]=s;
    } 

    int *bossetti=somme_distinte(alfa,n,&size);
    
    for(int i=0;i<size;i++){

        fprintf(stderr,"%d ",bossetti[i]);
        somma=somma+bossetti[i];
    }

    printf("e il totale è : %d",somma);
    
    free(bossetti);
    free(alfa);
}

int *somme_distinte(int a[], int n, int *size){

    if (n <= 0 || size == NULL) {
    return NULL;
    }   

    int *b=NULL;
    int count=0;
    int somma=0;
    int presenza=0;
    for(int i=0;i<n;i++){

        for(int j=0; j<n;j++){

            somma=a[i]+a[j];

            for(int k=0;k<count;k++){
                if(somma==b[k]){
                    presenza++;
                    break;
                }
            }
            if (presenza==0){

                int *tmp=realloc(b, (count + 1) * sizeof(int));

                if (tmp == NULL) {
                     free(b);
                     return NULL;
                 }

                  b = tmp;
                  b[count] = somma;
                  count++;
            }
            presenza=0;

        }
    }
    *size=count;
    return b;

}
