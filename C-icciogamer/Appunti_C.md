# Appunti di C

Questi appunti raccolgono i concetti di C vamoraga

---

## 1. Struttura del `main`

Usiamo sempre questa forma:

```c
int main(int argc, char *argv[]) {
    return 0;
}
```

### `argc`

`argc` significa **argument count**.

Indica quanti argomenti sono stati passati al programma dalla linea di comando.

Esempio:

```bash
./programma ciao 25
```

produce concettualmente:

```text
argc = 3
```

perché vengono contati:

```text
argv[0] = "./programma"
argv[1] = "ciao"
argv[2] = "25"
```

### `argv`

`argv` significa **argument vector**.

È un array di stringhe:

```c
char *argv[]
```

Ogni elemento è un `char *`.

Esempio:

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    for (int i = 0; i < argc; i++) {
        printf("argv[%d] = %s\n", i, argv[i]);
    }

    return 0;
}
```

---

## 2. `#include`

### `stdio.h`

```c
#include <stdio.h>
```

Fornisce dichiarazioni per funzioni di input/output, per esempio:

```text
printf
scanf
fopen
fprintf
fclose
```

### `stdlib.h`

```c
#include <stdlib.h>
```

Serve, tra le altre cose, per:

```text
malloc
realloc
free
```

### `string.h`

```c
#include <string.h>
```

Serve per funzioni sulle stringhe:

```text
strlen
strcpy
strcmp
```

Su molti sistemi trovi anche:

```text
strdup
```

---

## 3. Array di interi

Dichiarazione:

```c
int a[12];
```

Significa:

> crea un array di 12 interi.

Gli indici vanno da:

```text
0
```

a:

```text
11
```

Esempio:

```c
int a[3] = {10, 20, 30};
```

---

## 4. Puntatori

Un puntatore contiene un indirizzo di memoria.

Esempio:

```c
int x = 10;
int *p = &x;
```

Qui:

```text
x    = valore 10
&x   = indirizzo di x
p    = indirizzo di x
*p   = valore contenuto all'indirizzo puntato da p
```

Quindi:

```c
p == &x
```

e:

```c
*p == x
```

---

## 5. Puntatori e array

Con:

```c
int a[3] = {10, 20, 30};
```

il nome `a`, in molte espressioni, rappresenta l'indirizzo del primo elemento.

Quindi:

```c
a == &a[0]
```

e:

```c
a[i] == *(a + i)
```

Esempio:

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    int a[3] = {10, 20, 30};

    printf("%d\n", a[1]);
    printf("%d\n", *(a + 1));

    return 0;
}
```

Entrambe le stampe producono:

```text
20
```

---

## 6. Array e puntatore separato

```c
int b[12];
int *a = b;
```

Qui:

- `b` è un vero array di 12 interi;
- `a` è un puntatore al primo elemento di `b`.

Quindi:

```c
a == &b[0]
```

Il puntatore può essere riassegnato:

```c
int x = 5;
a = &x;
```

L'array invece non può essere riassegnato:

```c
b = &x;   // errore
```

---

## 7. Memoria dinamica: `malloc`

```c
int *a = malloc(n * sizeof(int));
```

Significa:

> alloca memoria sufficiente per `n` interi.

Va controllato il risultato:

```c
if (a == NULL) {
    return 1;
}
```

Se `malloc` fallisce, restituisce `NULL`.

Quando hai finito:

```c
free(a);
```

---

## 8. `realloc`

Serve a ridimensionare un blocco di memoria dinamica.

Forma consigliata:

```c
int *tmp = realloc(a, nuovo_n * sizeof(int));

if (tmp == NULL) {
    free(a);
    return 1;
}

a = tmp;
```

Perché usare `tmp`?

Se `realloc` fallisce:

```text
tmp = NULL
```

ma il vecchio `a` resta ancora valido.

---

## 9. Input con `scanf`

Esempio:

```c
int x;

scanf("%d", &x);
```

- `%d` → leggi un intero
- `&x` → passa l'indirizzo di `x`

`scanf` deve conoscere dove scrivere il valore.

---

## 10. File in C

### `fopen`

Apre un file:

```c
FILE *f = fopen("numeri.txt", "w");
```

Modalità principali:

```text
"r" = read   → lettura
"w" = write  → scrittura, sovrascrive il contenuto
"a" = append → aggiunge in fondo
```

Controllo:

```c
if (f == NULL) {
    return 1;
}
```

### `fprintf`

Scrive su un file:

```c
fprintf(f, "%d\n", i);
```

Significa:

> scrivi sul file `f` il valore intero di `i`, poi vai a capo.

### `fclose`

Chiude il file:

```c
fclose(f);
```

Schema da ricordare:

```text
fopen
↓
uso del file
↓
fclose
```

---

## 11. `perror`

Serve a stampare il motivo di un errore di sistema.

Esempio:

```c
FILE *f = fopen("dati/numeri.txt", "w");

if (f == NULL) {
    perror("fopen");
    return 1;
}
```

---

## 12. Prototipi di funzione

Un prototipo dichiara una funzione prima della sua definizione.

```c
int somma(int a, int b);
```

Esempio completo:

```c
#include <stdio.h>

int somma(int a, int b);

int main(int argc, char *argv[]) {
    int risultato = somma(3, 4);

    printf("%d\n", risultato);

    return 0;
}

int somma(int a, int b) {
    return a + b;
}
```

---

## 13. Passaggio tramite puntatore

In C i parametri normali vengono passati per valore.

Questo:

```c
void cambia(int x) {
    x = 100;
}
```

non modifica la variabile originale.

Per modificarla:

```c
void cambia(int *p) {
    *p = 100;
}
```

e poi:

```c
cambia(&x);
```

Esempio completo:

```c
#include <stdio.h>

void cambia(int *p);

int main(int argc, char *argv[]) {
    int x = 10;

    cambia(&x);

    printf("%d\n", x);

    return 0;
}

void cambia(int *p) {
    *p = 100;
}
```

---

## 14. Stringhe in C

Una stringa è un array di `char` terminato da:

```c
'\0'
```

Esempio:

```c
char s[] = "ciao";
```

In memoria:

```text
'c' 'i' 'a' 'o' '\0'
```

---

## 15. `char`, `char[]` e `char *`

Singolo carattere:

```c
char c = 'A';
```

Stringa modificabile:

```c
char s[] = "ciao";
```

Stringa letterale non da modificare:

```c
const char *s = "ciao";
```

---

## 16. `%s`

Per stampare una stringa:

```c
printf("%s\n", s);
```

---

## 17. `strlen`

```c
strlen(s)
```

restituisce la lunghezza della stringa senza contare `'\0'`.

Esempio:

```c
strlen("ciao")
```

restituisce:

```text
4
```

---

## 18. Copia del puntatore vs copia dei dati

```c
char s1[] = "ciao";
char *s2 = s1;
```

Non crea una seconda stringa.

`s1` e `s2` fanno riferimento agli stessi caratteri.

Quindi:

```c
s2[0] = 'C';
```

modifica anche ciò che leggi tramite `s1`.

---

## 19. `strcpy`

`strcpy` copia il contenuto di una stringa in una zona di memoria già disponibile.

```c
char s1[] = "ciao";
char s2[10];

strcpy(s2, s1);
```

Sintassi:

```c
strcpy(destinazione, sorgente);
```

Attenzione: la destinazione deve essere abbastanza grande.

---

## 20. `strdup`

`strdup` crea una nuova copia dinamica della stringa.

```c
char *copia = strdup(originale);
```

Concettualmente è simile a:

```c
char *copia = malloc(strlen(originale) + 1);
strcpy(copia, originale);
```

Poiché usa memoria dinamica:

```c
free(copia);
```

alla fine è necessario.

---

## 21. Passaggio di array a funzioni

Esempio:

```c
void stampa(int a[], int n)
```

e:

```c
void stampa(int *a, int n)
```

nei parametri di funzione sono sostanzialmente equivalenti.

Quando passi:

```c
stampa(numeri, 3);
```

la funzione riceve un riferimento al primo elemento, non una copia completa dell'array.

Per questo si passa anche la dimensione:

```c
int n
```

Esempio:

```c
#include <stdio.h>

void stampa(int a[], int n);

int main(int argc, char *argv[]) {
    int numeri[3] = {10, 20, 30};

    stampa(numeri, 3);

    return 0;
}

void stampa(int a[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d\n", a[i]);
    }
}
```
