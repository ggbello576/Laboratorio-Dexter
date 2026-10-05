function differenzaCoppie(A,k){
    let contatore=0
    for(let i=0;i<A.length;i++){
        for(let j=i+1;j<A.length;j++){
            if(typeof A[i]=="number"&&typeof A[j]=="number"){
                if(Math.abs(A[i]-A[j])%k==0){
                contatore++
                }
            }
            
        }
    }
    return contatore
}