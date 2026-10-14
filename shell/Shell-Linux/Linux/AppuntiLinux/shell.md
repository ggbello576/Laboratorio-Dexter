# Riassunto compatto Shell e Linux

## 1. Permessi dei file: `rwx`

Nei sistemi Unix/Linux:

```text
r = read    → lettura
w = write   → scrittura
x = execute → esecuzione
```

Esempio:

```text
-rwxr-xr--
```

Si divide in tre gruppi:

```text
rwx   r-x   r--
│     │     │
│     │     └── altri utenti
│     └──────── gruppo
└────────────── proprietario
```

### `chmod`

Serve a cambiare i permessi.

```bash
chmod +x programma
```

rende il file eseguibile.

Poi:

```bash
./programma
```

Permessi numerici:

```text
r = 4
w = 2
x = 1
```

Esempio:

```bash
chmod 755 programma
```

equivale a:

```text
rwxr-xr-x
```

---

## 2. `.` e `..`

```text
.  = directory corrente
.. = directory padre
```

Esempio:

```bash
cd ..
```

sale di una directory.

---

## 3. Percorsi assoluti e relativi

Percorso assoluto: parte dalla radice `/`.

```text
/home/gabriele/laboratorio/main.c
```

Percorso relativo: parte dalla directory corrente.

```text
laboratorio/main.c
../main.c
```

---

## 4. `PATH`

`PATH` è una variabile d'ambiente che contiene le directory in cui la shell cerca i programmi.

Visualizzazione:

```bash
echo $PATH
```

Esempio:

```text
/usr/local/bin:/usr/bin:/bin
```

Quando scrivi:

```bash
gcc
```

la shell cerca `gcc` nelle directory del `PATH`.

Per un programma nella directory corrente si usa spesso:

```bash
./programma
```

perché `.` normalmente non è nel `PATH`.

Aggiungere una directory:

```bash
export PATH="$PATH:/home/gabriele/miei_programmi"
```

---

## 5. `.bashrc`

`.bashrc` è un file di configurazione della shell Bash.

Si trova normalmente in:

```bash
~/.bashrc
```

Per modificarlo:

```bash
nano ~/.bashrc
```

Per ricaricarlo:

```bash
source ~/.bashrc
```

È utile, per esempio, per rendere permanenti modifiche al `PATH`.

---

## 6. Visualizzare file

### `cat`

Mostra tutto il contenuto:

```bash
cat file.txt
```

Comodo per file piccoli.

### `less`

Apre il file in modo navigabile:

```bash
less file.txt
```

Comandi utili:

```text
q     → esci
/xyz  → cerca "xyz"
n     → risultato successivo
```

Più adatto di `cat` per file lunghi.

---

## 7. `od`

Serve a vedere il contenuto reale di un file, anche byte o caratteri non facilmente visibili.

```bash
od -c file.txt
```

mostra anche caratteri come:

```text


```

Per vedere i byte in esadecimale:

```bash
od -t x1 file.txt
```

---

## 8. Valgrind

`valgrind` controlla errori di gestione della memoria.

Può trovare:

```text
memory leak
accessi fuori dai limiti
uso di memoria non valida
memoria allocata e non liberata
```

Uso base:

```bash
valgrind ./programma
```

Controllo più dettagliato:

```bash
valgrind --leak-check=full ./programma
```

---

## 9. Compilazione C con GCC

Comando consigliato:

```bash
gcc -Wall -Wextra -Wpedantic -std=c11 -g nome.c -o nome
```

Significato:

```text
gcc        → compilatore
-Wall      → molti warning importanti
-Wextra    → warning aggiuntivi
-Wpedantic → controlli più rigorosi sullo standard
-std=c11   → usa C11
-g         → informazioni per il debugger
-o nome    → nome dell'eseguibile
```

Esempio Linux:

```bash
gcc -Wall -Wextra -Wpedantic -std=c11 -g main.c -o programma
./programma
```

Su PowerShell/Windows:

```powershell
gcc -Wall -Wextra -Wpedantic -std=c11 -g main.c -o programma.exe
.\programma.exe
```

---

## 10. Preprocessore e `#define _GNU_SOURCE`

Le direttive che iniziano con `#`, come:

```c
#define
#include
```

vengono gestite dal preprocessore prima della compilazione vera.

```c
#define _GNU_SOURCE
```

va scritto prima degli `#include`.

Serve ad abilitare estensioni e API aggiuntive offerte in ambiente GNU/glibc, per esempio funzioni come:

```text
asprintf()
getline()
```

Concetti collegati:

```text
GNU   → progetto software libero; include GCC, Bash, glibc, make, gdb, ecc.
Linux → kernel; gestisce processi, memoria, filesystem, hardware, rete, driver.
Unix  → famiglia/storia di sistemi operativi da cui derivano molti concetti moderni.
POSIX → standard di API e comportamenti comuni nei sistemi Unix-like.
glibc → GNU C Library; implementa funzioni C standard, POSIX e GNU.
```

Schema concettuale:

```text
C standard < POSIX < estensioni GNU
```

`_GNU_SOURCE` è una feature-test macro: rende disponibili varie estensioni GNU e altre API offerte da glibc.

---

## 11. Makefile e `make`

Un `Makefile` è un file di testo, normalmente senza estensione, che dice a `make`:

```text
quali file dipendono da quali altri file
e quali comandi usare per crearli
```

Esempio semplice:

```makefile
programma: main.c
	gcc -Wall -Wextra -Wpedantic -std=c11 -g main.c -o programma
```

Importante: prima di `gcc` deve esserci normalmente un **TAB**.

Per compilare:

```bash
make
```

`make` legge il `Makefile` ed esegue i comandi necessari.

---

# Schema finale essenziale

```text
r w x        → lettura, scrittura, esecuzione
chmod        → cambia permessi

.            → directory corrente
..           → directory padre

PATH         → directory in cui la shell cerca i programmi
.bashrc      → configurazione di Bash

cat          → mostra tutto il file
less         → visualizzazione navigabile
od           → mostra byte/caratteri reali del file

valgrind     → controlla errori di memoria

gcc          → compila programmi C
-Wall        → warning
-Wextra      → warning aggiuntivi
-Wpedantic   → controlli rigorosi
-std=c11     → standard C11
-g           → dati per debugger
-o           → nome dell'eseguibile

GNU          → progetto e strumenti software
Linux        → kernel
POSIX        → standard Unix-like
glibc        → libreria C GNU
_GNU_SOURCE  → abilita estensioni GNU/glibc

Makefile     → descrive dipendenze e comandi
make         → esegue la compilazione secondo il Makefile
```
