# Appunti Shell e Linux

Questi appunti raccolgono i concetti di shell/Linux separati dagli appunti di C.

---

## 1. Permessi dei file: `rwx`

Nei sistemi Unix/Linux, i permessi principali sono:

- `r` = **read** → lettura
- `w` = **write** → scrittura
- `x` = **execute** → esecuzione

Esempio:

```bash
-rwxr-xr--
```

Si legge a gruppi di tre:

```text
rwx   r-x   r--
│     │     │
│     │     └── altri utenti
│     └──────── gruppo
└────────────── proprietario
```

### `chmod`

`chmod` significa **change mode** e serve a modificare i permessi.

Per rendere un file eseguibile:

```bash
chmod +x programma
```

Poi:

```bash
./programma
```

### Permessi numerici

Valori:

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

## 2. Directory corrente: `.` e directory padre: `..`

```text
.   = directory corrente
..  = directory padre
```

Esempi:

```bash
cd .
cd ..
```

Se sei in:

```text
/home/gabriele/laboratorio/c
```

con:

```bash
cd ..
```

vai in:

```text
/home/gabriele/laboratorio
```

---

## 3. Percorsi assoluti e relativi

### Percorso assoluto

Parte dalla radice del filesystem:

```text
/home/gabriele/laboratorio/main.c
```

### Percorso relativo

Parte dalla directory in cui ti trovi:

```text
laboratorio/main.c
```

oppure:

```text
../main.c
```

---

## 4. `PATH`

`PATH` è una variabile d'ambiente che contiene le directory nelle quali la shell cerca i programmi.

Per visualizzarlo:

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

la shell cerca `gcc` nelle directory presenti nel `PATH`.

Per questo spesso puoi scrivere:

```bash
gcc
```

ma per un programma nella cartella corrente devi usare:

```bash
./programma
```

perché la directory corrente normalmente non è nel `PATH`.

---

## 5. Aggiungere una directory al `PATH`

Esempio:

```bash
export PATH="$PATH:/home/gabriele/miei_programmi"
```

Significa:

> conserva il vecchio `PATH` e aggiungi anche `/home/gabriele/miei_programmi`.

---

## 6. `.bashrc`

`.bashrc` è un file di configurazione della shell Bash.

Si trova normalmente in:

```bash
~/.bashrc
```

Puoi modificarlo, per esempio, con:

```bash
nano ~/.bashrc
```

Se aggiungi modifiche al `PATH`, puoi ricaricare il file con:

```bash
source ~/.bashrc
```

---

## 7. Visualizzare file dal terminale

### `cat`

Mostra tutto il contenuto del file:

```bash
cat file.txt
```

È comodo per file piccoli.

### `less`

Apre il file in una modalità navigabile:

```bash
less file.txt
```

Comandi utili dentro `less`:

```text
q       esci
/xyz    cerca "xyz"
n       vai al risultato successivo
```

È più comodo di `cat` per file lunghi.

---

## 8. `od`

`od` serve a vedere il contenuto reale di un file, byte per byte o carattere per carattere.

Esempio:

```bash
od -c file.txt
```

Se il file contiene:

```text
12
34
```

puoi vedere qualcosa come:

```text
1   2  \n   3   4  \n
```

Quindi `od -c` rende visibili anche caratteri come:

```text
\n
```

che con `cat` normalmente non noti.

Per vedere i byte in esadecimale:

```bash
od -t x1 file.txt
```

---

## 9. Valgrind

`valgrind` è uno strumento molto usato su Linux per trovare errori di gestione della memoria.

Può aiutare a trovare:

- memoria allocata e mai liberata;
- accessi fuori dai limiti;
- uso di memoria non valida;
- memory leak.

Esecuzione base:

```bash
valgrind ./programma
```

Controllo più dettagliato dei leak:

```bash
valgrind --leak-check=full ./programma
```

---

## 10. Compilazione di un programma C da terminale

Comando consigliato:

```bash
gcc -Wall -Wextra -Wpedantic -std=c11 -g nome.c -o nome
```

Significato:

- `gcc` → compilatore
- `-Wall` → abilita molti warning importanti
- `-Wextra` → abilita warning aggiuntivi
- `-Wpedantic` → segnala codice poco conforme allo standard
- `-std=c11` → usa lo standard C11
- `-g` → aggiunge informazioni utili al debugger
- `-o nome` → sceglie il nome dell'eseguibile

Esempio:

```bash
gcc -Wall -Wextra -Wpedantic -std=c11 -g main.c -o programma
./programma
```

Su PowerShell/Windows:

```powershell
gcc -Wall -Wextra -Wpedantic -std=c11 -g main.c -o programma.exe
.\programma.exe
```
