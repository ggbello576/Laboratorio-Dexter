function comparatoreTask(criterio,ascendente){
    return function(a,b){

        if (criterio == undefined) criterio = "priorita"
        if (ascendente == undefined) ascendente = false

        if(criterio=="dipendenze"&&ascendente==true){
            if(a[criterio].length>b[criterio].length)return 1
            if(a[criterio].length==b[criterio].length)return 0
            if(a[criterio].length<b[criterio].length)return -1
        }
        if(criterio=="dipendenze"&&ascendente==false){
            if(a[criterio].length>b[criterio].length)return -1
            if(a[criterio].length==b[criterio].length)return 0
            if(a[criterio].length<b[criterio].length)return 1

        }
        if(criterio=="priorita"&&ascendente==true){
            if(a[criterio]>b[criterio])return 1
            if(a[criterio]==b[criterio])return 0
            if(a[criterio]<b[criterio])return -1

        }
        if(criterio=="priorita"&&ascendente==false){
            if(a[criterio]>b[criterio])return -1
            if(a[criterio]==b[criterio])return 0
            if(a[criterio]<b[criterio])return 1

        }
        if(criterio=="id"&&ascendente==true){
            if(a[criterio]>b[criterio])return 1
            if(a[criterio]==b[criterio])return 0
            if(a[criterio]<b[criterio])return -1
        }
        if(criterio=="id"&&ascendente==false){
            if(a[criterio]>b[criterio])return -1
            if(a[criterio]==b[criterio])return 0
            if(a[criterio]<b[criterio])return 1
        }
        
    }
    
}