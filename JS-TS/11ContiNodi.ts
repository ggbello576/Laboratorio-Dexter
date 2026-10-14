interface Nodo{
    sx?:Nodo,
    dx?:Nodo,
    val:number,
    conta:number,
}
function cont(T:Nodo|undefined):number{
        if(!T)return 0
        return cont(T.sx)+cont(T.dx)+1
    }
function contaAlbero(T:Nodo|undefined):void{
    if(!T)return undefined
    T.conta=cont(T.sx)
    contaAlbero(T.sx)
    contaAlbero(T.dx)
}
export{}