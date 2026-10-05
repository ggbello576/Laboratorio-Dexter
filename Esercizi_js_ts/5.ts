class SecretError extends Error{
    constructor(){
        super()
        this.name="ciao"
    }
}
interface coppie<T>{
    pin:number
    val:T
}

interface box<T>{
    [k:string]:coppie<T>
}

class SecretBox<T>{
    #box:box<T>
    constructor(){
        this.#box={}
    }
    putS(k:string,pin:number,val:T):void{
        if(!(k in this.#box)){
            this.#box[k]={pin:pin,val:val}
        }
        if((k in this.#box)&&(this.#box[k].pin==pin)){
            this.#box[k].val=val
        }
        if((k in this.#box)&&(this.#box[k].pin!=pin)){
            throw new SecretError()
        }
    }
    getS(k:string,pin:number):T{
        if((k in this.#box)&&(this.#box[k].pin==pin)){
            return this.#box[k].val
        }else throw new SecretError()
    }
    delS(k:string,pin:number):void{
        if((k in this.#box)&&(this.#box[k].pin==pin)){
            delete this.#box[k]
        }else throw new SecretError()
    }
    get size():number{
        let contatore:number=0
        for(let a in this.#box){
            contatore++
        }
        return contatore

    }

}