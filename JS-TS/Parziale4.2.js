class FinestraLab extends Array{
    #pmaxc=10//capacità massima di base
    constructor(){
        super()//senno non chiama il costruttore del padre
    }

    get maxc(){
        return this.#pmaxc
    }
    set maxc(m){
        this.#pmaxc=m// aggiorno la capacità massima
        if(this.length>this.maxc){//se l'array supera la capacità massima
            while(this.length>this.maxc){
                this.shift()//elimina elementi dalla testa(i piu vecchi) finche non finisce
            }
        }

    }
    push(e){
        super.push(e)//metto in coda il nuovo elemento
        this.maxc=this.maxc; //setMaxc(getMaxc()) una sorta di controlla se devo togliere la testa o no
    }
    pop(){ }
    splice(){ }



}