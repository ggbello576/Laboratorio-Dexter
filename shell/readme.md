per compilare usa:

gcc -Wall -Wextra -Wpedantic -std=c11 -g nome -o nome nuovo

wall= mostra warning importanti
wextra= aggiunge altri warning
wpedantic= segnala codice poco conforme
std=c11 usi standard c11
-g= informazioni utili per il debuger
-o= nuovo nome


comandi shell:
r = read    = lettura
w = write   = scrittura
x = execute = esecuzione
chmod: change mod

DIRECTORY PATH:

echo $PATH = tipo /usr/local/bin:/usr/bin:/bin
quando scrivo un comando, cercalo in /usr/local/bin, poi /usr/bin, poi /bin.
serve per programmi importanti, tipo gcc non serve scrivere .gcc

Aggiungere una cartella al PATH:
export PATH="$PATH:/home/gabriele/miei_programmi"

.bashrc= è un file di configurazione della shell Bash. Dentro puoi mettere configurazioni che vuoi vengano applicate alla shell.

cat x per leggere il file x da terminale
less x per leggere completamente e navigarci



SPIEGAZIONE MAIN

int main(int argc, char *argv[]) {
    arc=>argument count 
        quanti argomenti sono stati passati al programma?
        ./programma ciao 25
        ./programma
        ciao
        25
        quindi 3 
    argv:argument vector
        Puoi immaginarlo come un array di stringhe.
        argv[0] = "./programma"
        argv[1] = "ciao"
        argv[2] = "25"

FILE NEL CODICE (scrivi piu cose a modo)
fopen
fprintf
fclose
"r" = read
"w" = write
"a" = append

PUNTATORI:
a[i] = *(a + i)

Valgrind
Il programma cita anche valgrind per controllare il corretto uso e la deallocazione degli array dinamici.    Testo incollato
valgrind è uno strumento usato soprattutto su Linux.
Serve a trovare problemi come:
- memoria allocata e mai liberata
- accessi fuori dai limiti
- uso di memoria non valida

valgrind ./programma

#include <stdio.h>
aggiungi funzioni come:
printf
scanf
fopen
fprintf
fclose

per memoria dinamica: 
#include <stdlib.h>
malloc
realloc
free

per stringe
#include <string.h>
strlen
strcpy
strcmp