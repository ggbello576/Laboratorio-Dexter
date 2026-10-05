function contaParole(a){
    if(!(a instanceof Array))return
    let b ={}
    for(let i=0;i<a.length;i++){

        let parola=a[i]

        if(b[parola]){
            b[parola]++
        } else b[parola]=1

    }
return b
}