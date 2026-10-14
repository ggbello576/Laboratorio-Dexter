function prodottoMigliore(a,p){
    let b=0
    for(let i=0;i<a.length;i++){
        if(!(a[i][p]==null || a[i][p]==undefined)){
            b=1
        }
    }
    if(b==0)return undefined

    let max=-Infinity
    let best=a[0].nome
    for(let i=0;i<a.length;i++){
        if(a[i][p]==undefined)continue
        let somma=0
        let f=0
        while(a[i][p][f]!=null){
            
            somma+=a[i][p][f]
            f++
        }
        let media=somma/a[i][p].length
        if(media>max){
            max=media
            best=a[i].nome
        }
            if (media == max && a[i].nome < best) {
            best = a[i].nome;
        }
        
    }
        return best
}