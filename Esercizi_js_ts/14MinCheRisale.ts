interface nodi{
    sx?:nodi|undefined
    dx?:nodi|undefined
    val:number
    piccolo:number
}
function calcola(T: nodi | undefined): number {
    if(!T)return Infinity
    let a=T.val

    let minSx=calcola(T.sx)
    let minDx=calcola(T.dx)
    if(minSx<a) a=minSx
    if(minDx<a) a=minDx
    return a
}

function contaMin(T:nodi|undefined):void{
    if(!T)return undefined
    T.piccolo=calcola(T)
    contaMin(T.sx)
    contaMin(T.dx)
}
