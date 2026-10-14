type cbool=1|true|0|false

interface ogg<T>{
    yes:T[]
    no:T[]
}

function setaccio<T>(a:T[],f:(x:T)=>cbool):ogg<T>{
    let alfa:ogg<T>={yes:[],no:[]}
    for(let e of a){
        if(f(e)){
            alfa.yes.push(e)
        }
        if(!(f(e))){
            alfa.no.push(e)
        }
    }
    return alfa
}