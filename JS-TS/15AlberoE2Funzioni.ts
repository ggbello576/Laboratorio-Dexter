interface Nodo<T>{
    val:T,
    children:Nodo<T>[]
}

function trova<T>(root:Nodo<T>,
controlla:(x:Nodo<T>)=>boolean,
confronta:(x:Nodo<T>,y:Nodo<T>)=>number):T[]{
    function visita(nodo: Nodo<T>|undefined):Nodo<T>[]{
        if(!nodo)return []

        let ris:Nodo<T>[]=[]

        if (controlla(nodo)) {
            ris.push(nodo)
        }

        for (let figlio of nodo.children) {
            ris.push(...visita(figlio))
        }

        return ris
    }
    let nodi=visita(root)

    nodi.sort(confronta)
     let valori:T[]=[] 
     for(let n of nodi){ 
        valori.push(n.val)
     } 
     return valori
}