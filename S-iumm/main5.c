#include <stdio.h>

extern int conv(char c);
extern int convstring(char *s);

int main(void) {
    printf("conv('a') = %d (atteso: 10)\n", conv('a'));
    printf("conv('8') = %d (atteso: 8)\n", conv('8'));
    printf("conv('0') = %d (atteso: 0)\n", conv('0'));
    printf("conv('9') = %d (atteso: 9)\n", conv('9'));
    printf("conv('f') = %d (atteso: 15)\n", conv('f'));

    printf("convstring(\"28\") = %d (atteso: 40)\n", convstring("28"));
    printf("convstring(\"1000f\") = %d (atteso: 65551)\n", convstring("1000f"));
    printf("convstring(\"af\") = %d (atteso: 175)\n", convstring("af"));

    return 0;
}