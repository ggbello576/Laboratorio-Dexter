# Legenda Markdown

Markdown è un linguaggio semplice per formattare testo in file `.md`.

---

## Titoli

```md
# Titolo 1
## Titolo 2
### Titolo 3
#### Titolo 4
```

Risultato:

# Titolo 1
## Titolo 2
### Titolo 3
#### Titolo 4

---

## Grassetto

```md
**testo**
```

Risultato:

**testo**

---

## Corsivo

```md
*testo*
```

Risultato:

*testo*

---

## Grassetto + corsivo

```md
***testo***
```

Risultato:

***testo***

---

## Codice inline

Usa un backtick:

```md
`printf`
```

Risultato:

`printf`

---

## Blocco di codice

Usa tre backtick:

````md
```c
int x = 10;
printf("%d\n", x);
```
````

Puoi specificare il linguaggio:

```text
c
bash
powershell
python
java
text
```

Questo permette all'editor di colorare meglio il codice.

---

## Liste puntate

```md
- uno
- due
- tre
```

Risultato:

- uno
- due
- tre

---

## Liste numerate

```md
1. primo
2. secondo
3. terzo
```

---

## Citazioni

```md
> Questo è un testo citato
```

Risultato:

> Questo è un testo citato

---

## Linea orizzontale

```md
---
```

Produce una linea di separazione.

---

## Link

```md
[Google](https://www.google.com)
```

---

## Immagini

```md
![testo alternativo](immagine.png)
```

---

## Tabelle

```md
| Comando | Significato |
|---|---|
| `ls` | lista file |
| `cd` | cambia directory |
```

---

## Checkbox

```md
- [ ] da fare
- [x] completato
```

---

## Escape dei caratteri

Se vuoi mostrare un carattere Markdown senza usarlo come formattazione:

```md
\*
\#
\_
```

---

## Combinazione utile per gli appunti

Esempio:

````md
# Puntatori

## Definizione

Un puntatore contiene un **indirizzo di memoria**.

```c
int x = 10;
int *p = &x;
```

- `x` → valore
- `&x` → indirizzo
- `p` → indirizzo
- `*p` → valore puntato
````

---

## Anteprima Markdown in VS Code

Per vedere il file `.md` formattato in VS Code:

```text
Ctrl + Shift + V
```

Oppure:

```text
tasto destro sul file → Open Preview
```

Per vedere editor e anteprima affiancati:

```text
Ctrl + K
poi
V
```
