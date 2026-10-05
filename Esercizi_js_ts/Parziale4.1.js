class MediaMobile{
    #k
    #i
    constructor(k,...i){
        this.#k=k
        this.#i=i
    }
    *succ(){
        let ciao=[...this.#i]//copio l'array iniziale
        for(let j=0;true;j++){//ciclo infinito(successione tende a piu infinito)
            let a=0//contatore della somma degli ultimi k elementi
            for(let s=ciao.length-this.#k;s<ciao.length;s++) {

                a=a+ciao[s]//sommi gli ultimi k valori
            }
            a=Math.floor(a/this.#k)//media per prendere solo interi
            ciao.push(a)//aggiungi il valore in coda all array di prima
            
            yield ciao[j]//ritorni il j esimo elemento che ti interessa 
        }
    }
}