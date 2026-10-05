function sottoalbero(T){
    let contatore=1
    for(let a of T.children){
        contatore+=sottoalbero(a)
    }
    return contatore
}

function piega(T){
    let eliminati=0
    if(T.val==null)return 0
    if(T.children.length>0){
        if(T.children[0]!=null){
            eliminati+=sottoalbero(T.children[0])
            T.children.shift()
        }
        for (let c of T.children) {
            eliminati += piega(c)
        }
    }
    return eliminati
}