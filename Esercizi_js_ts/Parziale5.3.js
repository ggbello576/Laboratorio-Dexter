// Eccezione richiesta
class FondiInsufficienti extends Error{
    constructor(){
        super("sei al verde non puoi prelevare")
        this.name="FondiInsufficienti"
    }
}

class Caveau{
    #owner          
    #saldo          
    #movimenti=[]   // uso una lista 
    static #transazioniGlobali=new Set() // insieme delle transazioni statico cosi mi passa il primo test case:D

    constructor(owner,saldoIniziale=0){
        // controllo tutte le proprieta come da richiesta
        if(typeof owner!="string"||owner.length==0) throw new TypeError
        if(typeof saldoIniziale!="number"||saldoIniziale<0) throw new TypeError
        this.#owner=owner
        this.#saldo=saldoIniziale
    }
    get saldo(){
        return this.#saldo
    }

    // creo oggetto movimento 
    creaMovimento(tipo,importo,causale){
        let m={tipo:tipo,importo:importo,causale:causale}
        Object.freeze(m)//ho cercato come non far cambiare i campi ad un oggetto e mida questa cosa(lo rende immutabile)
        return m
    }

    //versare
    versa(n,causale){
        if(typeof n!="number"||n<=0||typeof causale!="string") throw new TypeError
        this.#saldo+=n
        let m=this.creaMovimento("V",n,causale)
        this.#movimenti.push(m) //salvo il movimento 
        Caveau.#transazioniGlobali.add([this,m]) //salvo la transazione 
    }

    //metodo per prelevare denaro
    preleva(n,causale){
        if(typeof n!="number"||n<=0 ||typeof causale!="string") throw new TypeError
        if(n>this.#saldo) throw new FondiInsufficienti()
        this.#saldo-=n
        let m=this.creaMovimento("P",n,causale)
        this.#movimenti.push(m)
        Caveau.#transazioniGlobali.add([this,m])
    }

    // ritorno gli ultimi k movimenti
    estratto(k=10){
        if(typeof k!="number"||k<0) throw new TypeError
        return this.#movimenti.slice(-k).reverse()
    }

    // ritorno tutte le transazioni 
    static transazioni(){
        return Caveau.#transazioniGlobali
    }
}