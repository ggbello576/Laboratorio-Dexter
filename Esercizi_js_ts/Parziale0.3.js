function filtraCorso(a,f){
    let studenti=[]
    for(let i=0;i<a.length;i++){
        if((a[i][1]>0)&&(Number.isInteger(a[i][1]))&&(a[i][1].toString().length==6)&&(f(a[i][1]))===true){
            studenti.push(a[i])
        }
    }
    studenti.sort(function(s1,s2){
        if(s1[0]<s2[0])return -1
        else if(s1[0]>s2[0])return 1
        else return s2[1]-s1[1];
    })
}