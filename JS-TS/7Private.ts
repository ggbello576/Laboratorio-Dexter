class VeicoloError extends Error{}

class Veicolo{
private targa:string
private colore:string
private n_ruote:number

    constructor(targa:string,colore:string,n_ruote:number){
        if(targa.length!=7)throw new VeicoloError()
        if(!Number.isInteger(n_ruote)||n_ruote<1)throw new VeicoloError()
        this.targa=targa
        this.colore=colore
        this.n_ruote=n_ruote
    }
    get targa_():string{
        return this.targa
    }
    get colore_():string{
        return this.colore
    }
    get n_ruote_():number{
        return this.n_ruote
    }
    set targa_(x:string){
        if(x.length!=7)throw new VeicoloError()
        this.targa=x
    }
    set colore_(x:string){
        this.colore=x
    }
    set n_ruote_(x:number){
        if(!Number.isInteger(x)||x<1)throw new VeicoloError()
        this.n_ruote=x
    }
    toString(){
        return this.targa+this.n_ruote+this.colore
    }

}


class Autobus extends Veicolo{
    private n_porte:number
    constructor(targa:string,colore:string,n_ruote:number,n_porte:number){
        super(targa,colore,4)
        if(!Number.isInteger(n_porte)||n_porte<1)throw new VeicoloError()
        this.n_porte=n_porte
    }
    get n_porte_():number{
        return this.n_porte
    }
    set n_porte_(x:number){
        if(!Number.isInteger(x)||x<1)throw new VeicoloError()
        this.n_porte=x
    }
    toString(): string {
        return super.toString()+this.n_porte
    }
}