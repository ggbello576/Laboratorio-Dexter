function prodottoRepdigit(a, b) {
    if ((b <= 1) || !(Number.isInteger(b))) {
        return;
    }

    let prodotto = 1;

    for (let i = 0; i < a.length; i++) {
        let pino = a[i];      // numero originale
        let numero = a[i];    // numero da dividere
        let appoggio = [];

        while (numero != 0) {
            let r = numero % b;
            appoggio.push(r);
            numero = Math.floor(numero / b);
        }

        let alfa = true;

        for (let j = 0; j < appoggio.length - 1; j++) {
            if (appoggio[j] != appoggio[j + 1]) {
                alfa = false;
            }
        }

        if (alfa == true) {
            prodotto = prodotto * pino;
        }
    }

    return prodotto;
}