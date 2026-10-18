#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]){
    int n = atoi(argv[1]);
    
    int *a = malloc(n/3 * sizeof(int));
    int *b = malloc(n/5 * sizeof(int));
    int j=0;
    int k=0;
    int alfa=0;
    int beta=0;
    for(int i=3 ;i<=n;i++){
        if((i%3==0)&&(i%5==0)){
            continue;
        }
        else if(i%3==0){
            a[j]=i;
            j++;
            beta=beta+i;

        }else if(i%5==0){
            b[k]=i;
            k++;
            alfa=alfa+i;
        }

    }
    printf("lunghezza a[] = %d      somma a[] = %d\n      ",j,beta);

    printf("lunghezza b[] = %d      somma b[] = %d\n      ",k,alfa);
    return 0;
}