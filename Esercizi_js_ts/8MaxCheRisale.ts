interface TNode<T>{
    val:T 
    children:TNode<T>[]
}

function biggest<T>(root:TNode<T>,bigger:(x:T,y:T)=>boolean):T|undefined{
    if(!root)return undefined
    let grande:T=root.val
    for(let a of root.children){
        let max=biggest(a,bigger)
    if(max!=undefined && bigger(max,grande)){
        grande=max
    }
    
    }
    return grande
}