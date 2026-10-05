class Nodo<T>{
    value:T
    next:Nodo<T>| undefined;
    prec: Nodo<T>| undefined;

    constructor(value:T){
        this.value=value
        this.next=undefined
        this.prec=undefined
    }
}

class DrunkenList<T>{
    testa:Nodo<T>|undefined
    coda:Nodo<T>|undefined
    length:number = 0;
    constructor(){
        this.testa = undefined;
        this.coda = undefined;
    }
    push(x:T){
            let n = new Nodo<T>(x);
        if(this.testa === undefined || this.coda===undefined){
            this.testa = n;
            this.coda = n;
            this.length++;

        }else if(this.length % 2 == 0){
            n.next = this.testa;
            this.testa!.prec = n;
            this.testa = n;
            this.length++;
        }else{
            n.next = this.testa;
            this.testa!.prec = n;
            this.testa = n;
            let b= new Nodo<T>(x)
            b.next=undefined
            b.prec=this.coda
            this.coda!.next=b;
            this.coda=b
            this.length+=2
        }
        
    }
    pop():Nodo<T>{
        if(this.testa===undefined||this.coda===undefined){
            throw new ReferenceError()
        }
        if(this.length==1){
            let a:Nodo<T>=this.testa
            this.testa=undefined
            this.coda=undefined
            this.testa!.next=undefined
            this.coda!.prec=undefined
            this.length--
            return a 
        }
        if(this.length%2==1){
            let a:Nodo<T>=this.testa
            this.testa=this.testa.next
            this.testa!.prec=undefined
            a.next=undefined
            a.prec=undefined
            this.length--
            return a
        }else{
            let a:Nodo<T>=this.coda
            this.coda=this.coda.prec
            this.coda!.next=undefined
            a.next=undefined
            a.prec=undefined
            this.length--
            return a
        }

    }
    as_array():T[]{
        function argay(testa:Nodo<T>|undefined):T[]{
            if(testa==undefined)return []
        return [testa.value,...argay(testa.next)]
        }
    return argay(this.testa)
    }



    

}