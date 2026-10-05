class Libro{
    titolo
    autore
    numPagine
    constructor(titolo,autore,numpagine){
        this.titolo=titolo
        this.autore=autore
        this.numPagine=numpagine
    }
}

class Romanzo extends Libro{
    protagonista
    constructor(titolo, autore, numPagine, protagonista){
        super(titolo,autore,numPagine)
        this.protagonista=protagonista
    }
}
class Giallo extends Romanzo{
    colpevole
    constructor(titolo, autore, numPagine,protagonista, colpevole){
        super(titolo,autore,numPagine,protagonista)
        this.colpevole=colpevole
    }
}
class SaggioDivulgativo extends Libro{
    constructor(titolo,autore,numPagine){
        super(titolo,autore,numPagine)
    }
    get scienziato(){
        return this.autore
    }
    set scienziato(x){
        this.autore=x
    }
}

function ilRomanzoCheVorrei(libri){
    let b=undefined
    if( libri instanceof Array){
        for(let a of libri){
            if(a instanceof Romanzo){
                if(b===undefined||a.numPagine>b.numPagine)b=a
            }
        }
    }
    return b
}