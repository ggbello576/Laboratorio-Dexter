interface nodi{
    sx?:nodi
    dx?:nodi
    val:number 
    conta:number
}
function contatore(T:nodi|undefined):number{
    if(T==null||T==undefined)return 0
    return contatore(T.sx)+contatore(T.dx)+1

}

function contaAlbero(T:nodi|undefined):void{
    if(!T)return undefined

    T.conta=contatore(T.sx)

    contaAlbero(T.sx)
    contaAlbero(T.dx)

    
}
