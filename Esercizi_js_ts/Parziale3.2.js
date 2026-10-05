class FinestraLab extends Array{
    #pmaxc
    constructor(){
        super()
        this.#pmaxc=10
    }
    get maxc(){
        return this.#pmaxc
    }
    set maxc(m){
        this.#pmaxc=m
        if(this.length>this.maxc){
            while(this.length>this.maxc){
                this.shift()
            }
        }
    }
    push(...e){
        super.push(...e)
        while(this.length>this.maxc){
            this.shift()
        }
        return this.length
    }
    pop(){ }
    splice(){ }
}