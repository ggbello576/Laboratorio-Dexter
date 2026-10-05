interface ogg<T>{
    val:T
    pin:number
}
interface oggP<T>{
    [k:string]:ogg<T>
}
class SecretError extends Error{}


class SecretBox<T>{
    #box:oggP<T>
    constructor() {
        this.#box={}
    }
    putS(k:string,pin:number,val:T):void{
        if(!(k in this.#box)){
            this.#box[k]={val:val,pin:pin}
        }
        if((k in this.#box)&&(this.#box[k].pin==pin)){
            this.#box[k].val=val
        }
        if((this.#box[k].pin!=pin)&&(k in this.#box)){
            throw new SecretError()
        }
    }
    getS(k:string,pin:number):T{
        if((k in this.#box)&&(this.#box[k].pin==pin)){
            return this.#box[k].val
        }else throw new SecretError()
    }
    delS(k:string,pin:number){
        if((k in this.#box)&&(this.#box[k].pin==pin)){
            delete this.#box[k]
        }else throw new SecretError()
    }
    get size():number{
        let s=0
        for(let a in this.#box){
            s++
        }
        return s 
    }
}