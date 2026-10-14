# Riassunto compatto di C

## 1. Struttura del programma

```c
int main(int argc, char *argv[]) {
    return 0;
}
```

- `argc` = numero di argomenti passati da terminale, compreso il nome del programma.
- `argv` = array di stringhe contenente gli argomenti.

Esempio:

```bash
./programma ciao 25
```

```text
argc = 3
argv[0] = "./programma"
argv[1] = "ciao"
argv[2] = "25"
```

---

## 2. Librerie principali

```c
#include <stdio.h>
```

Input/output e file: `printf`, `scanf`, `fopen`, `fprintf`, `fscanf`, `fclose`.

```c
#include <stdlib.h>
```

Memoria dinamica: `malloc`, `realloc`, `free`.

```c
#include <string.h>
```

Stringhe: `strlen`, `strcpy`, `strcmp`, `strdup`.

```c
#include <assert.h>
```

Serve per `assert`.

---

## 3. Array

```c
int a[12];
```

Crea un array di 12 interi, con indici da `0` a `11`.

```c
int a[3] = {10, 20, 30};
```

---

## 4. Puntatori

Un puntatore contiene un indirizzo di memoria.

```c
int x = 10;
int *p = &x;
```

```text
x   = valore 10
&x  = indirizzo di x
p   = indirizzo di x
*p  = valore presente all'indirizzo puntato da p
```

Equivalenze:

```c
p == &x
*p == x
```

---

## 5. Puntatori e array

Con:

```c
int a[3] = {10, 20, 30};
```

nelle normali espressioni il nome `a` rappresenta l'indirizzo del primo elemento.

```c
a == &a[0]
*a == a[0]
a + i == &a[i]
*(a + i) == a[i]
```

Quindi:

```text
a          → indirizzo del primo elemento
*a         → valore del primo elemento
a + i      → indirizzo dell'elemento i
*(a + i)   → valore dell'elemento i
```

Attenzione:

```c
*a + i
```

significa:

```c
(*a) + i
```

e NON `a[i]`.

---

## 6. Array e puntatore sono diversi

```c
int b[12];
int *a = b;
```

- `b` è un vero array.
- `a` è un puntatore al primo elemento di `b`.

```c
a == &b[0]
```

Il puntatore può essere riassegnato:

```c
int x = 5;
a = &x;
```

L'array no:

```c
b = &x;   // errore
```

---

## 7. Memoria dinamica: `malloc`

```c
int *a = malloc(n * sizeof(int));
```

Alloca memoria per `n` interi.

```c
if (a == NULL) {
    return 1;
}
```

Quando non serve più:

```c
free(a);
```

---

## 8. `realloc`

Ridimensiona memoria già allocata.

```c
int *tmp = realloc(a, nuovo_n * sizeof(int));

if (tmp == NULL) {
    free(a);
    return 1;
}

a = tmp;
```

Si usa `tmp` perché, se `realloc` fallisce, restituisce `NULL` ma il vecchio `a` rimane valido.

---

## 9. Input con `scanf`

```c
int x;
scanf("%d", &x);
```

- `%d` = leggi un intero.
- `&x` = indirizzo di `x`, cioè dove `scanf` deve scrivere.

---

## 10. File in C

Apertura:

```c
FILE *f = fopen("numeri.txt", "w");
```

Modalità:

```text
"r" → lettura
"w" → scrittura, sovrascrive
"a" → aggiunge in fondo
```

Controllo:

```c
if (f == NULL) {
    return 1;
}
```

Scrittura:

```c
fprintf(f, "%d\n", i);
```

Lettura:

```c
fscanf(f, "%d", &x);
```

Chiusura:

```c
fclose(f);
```

Schema:

```text
fopen → uso del file → fclose
```

---

## 11. `perror`

Stampa il motivo di un errore di sistema.

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

Esempio:

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

chiamata:

```c
cambia(&x);
```

---

## 14. Stringhe

Una stringa è un array di `char` terminato da:

```c
'\0'
```

Esempio:

```c
char s[] = "ciao";
```

in memoria:

```text
'c' 'i' 'a' 'o' '\0'
```

Tipi:

```c
char c = 'A';              // singolo carattere
char s[] = "ciao";         // stringa modificabile
const char *s = "ciao";    // stringa letterale da non modificare
```

Stampa:

```c
printf("%s\n", s);
```

---

## 15. `strlen`

```c
strlen(s)
```

Restituisce la lunghezza senza contare `\0`.

```c
strlen("ciao")   // 4
```

---

## 16. Copia del puntatore e copia dei dati

```c
char s1[] = "ciao";
char *s2 = s1;
```

Non crea una seconda stringa: `s1` e `s2` fanno riferimento agli stessi caratteri.

```c
s2[0] = 'C';
```

modifica anche ciò che viene letto tramite `s1`.

---

## 17. `strcpy`

Copia una stringa dentro memoria già disponibile.

```c
char s1[] = "ciao";
char s2[10];

strcpy(s2, s1);
```

Sintassi:

```c
strcpy(destinazione, sorgente);
```

La destinazione deve essere abbastanza grande.

---

## 18. `strdup`

Crea una nuova copia dinamica della stringa.

```c
char *copia = strdup(originale);
```

Concettualmente:

```c
char *copia = malloc(strlen(originale) + 1);
strcpy(copia, originale);
```

Alla fine:

```c
free(copia);
```

---

## 19. Passaggio di array a funzioni

Nei parametri:

```c
void stampa(int a[], int n);
```

e:

```c
void stampa(int *a, int n);
```

sono sostanzialmente equivalenti.

Quando fai:

```c
stampa(numeri, 3);
```

la funzione riceve un riferimento al primo elemento, non una copia completa dell'array.

Per questo si passa anche la dimensione `n`.

---

## 20. `assert`

```c
assert(condizione);
```

Significa: la condizione non dovrebbe mai essere falsa.

```text
assert → condizione che, per logica del programma, non dovrebbe fallire
if     → situazione che può realmente accadere e deve essere gestita
```

---

## 21. `stdin`, `stdout`, `stderr`

Sono stream standard già aperti dal sistema e rappresentati in C tramite `FILE *`.

```text
0 = stdin
1 = stdout
2 = stderr
```

### `stdin`

Ingresso standard, normalmente la tastiera.

```c
scanf("%d", &x);
```

equivale concettualmente a:

```c
fscanf(stdin, "%d", &x);
```

### `stdout`

Uscita normale.

```c
printf("Risultato = %d\n", x);
```

scrive su `stdout`.

### `stderr`

Uscita separata dedicata agli errori.

```c
fprintf(stderr, "Errore: file non trovato\n");
```

Di default `stdout` e `stderr` appaiono entrambi sul terminale, ma sono flussi indipendenti.

Ridirezione:

```bash
./programma > output.txt
./programma 1> output.txt
./programma 2> errori.txt
```

- `>` o `1>` sposta `stdout`.
- `2>` sposta `stderr`.

---

## 22. `printf`, `sprintf`, `asprintf`

### `printf`

Scrive testo formattato su `stdout`.

```c
printf("Ho %d anni\n", 25);
```

### `sprintf`

Scrive testo formattato dentro una stringa già esistente.

```c
char s[100];
sprintf(s, "Ho %d anni", 25);
```

Bisogna avere già abbastanza spazio.

### `asprintf`

Fa una cosa simile a `sprintf`, ma alloca automaticamente la memoria necessaria.

```c
char *s = NULL;
asprintf(&s, "Ho %d anni", eta);
```

- `s` è un `char *`.
- `&s` viene passato perché `asprintf` deve modificare il puntatore.
- La memoria viene allocata dinamicamente.
- Alla fine:

```c
free(s);
```

---

# Schema finale essenziale

```text
&x          → indirizzo di x
*p          → valore puntato da p

a           → indirizzo del primo elemento
*a          → a[0]
a + i       → &a[i]
*(a + i)    → a[i]

malloc      → alloca memoria
realloc     → ridimensiona memoria
free        → libera memoria

fopen       → apre file
fprintf     → scrive
fscanf      → legge
fclose      → chiude

strlen      → lunghezza stringa
strcpy      → copia stringa in memoria già disponibile
strdup      → crea copia dinamica

stdin       → input
stdout      → output normale
stderr      → errori

printf      → scrive su stdout
sprintf     → scrive in una stringa già allocata
asprintf    → crea dinamicamente una stringa formattata
```
