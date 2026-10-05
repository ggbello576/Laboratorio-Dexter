function piega(T){
    let eliminati=0
    if (!T) return 0
    if(T.children.length>0){
        if(T.children[0]!=null||T.children[0]!=undefined){
            eliminati=sottoalbero(T.children[0])
            T.children.shift()
        }
    for (let c of T.children) {
            eliminati += piega(c)
        }
    }
    return eliminati
}


function sottoalbero(T){
    if(!T)return 0
    let contatore=1
    for(let a of T.children){
        contatore+=sottoalbero(a)
    }
    return contatore
}
let T = {
    val: 2,
    children: [
        {
            val: 4,
            children: [
                { val: 6, children: [] },
                {
                    val: 6,
                    children: [
                        { val: 8, children: [] }
                    ]
                }
            ]
        },
        {
            val: 7,
            children: [
                { val: 8, children: [] }
            ]
        }
    ]
}

console.log(piega(T))