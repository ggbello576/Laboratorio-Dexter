function sumNestedArray(a){
    if(a.length==0)return 0
    let contatore=0
    for(let b of a){
        if(typeof(b)=="number"){
            contatore+=b
        }else contatore+=sumNestedArray(b)
    }
    return contatore
}


let arr=[[1,2,[3]],4,[],[[5,6],7]]
console.log(sumNestedArray(arr))