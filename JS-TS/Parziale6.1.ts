type Person={surname:string,name:string}//tipo persona

function merge(a:Array<Person>,b:Array<Person>):Array<Person>{//funzione principale
const r:Person[]=[]

function e(sx:Person[],dx:Person):boolean{//funzione per verificare duplicati
    for(let x of sx){  //scorro e verifico
        if(x.surname==dx.surname&&x.name==dx.name)return true

        }return false
}
for(let p of b){//prima inserisco b come richiesto
    if(!e(r,p)){
        r.push(p)
    }
}
for(let p of a){//inserisco a come richiesto solo se no ngia presetne 
    if(!e(r,p)){
        r.push(p)
    }
}

r.sort(function(x,y){//ordino l'array 
if(x.surname<y.surname)return-1
if(x.surname>y.surname)return 1
if(x.name<y.name)return-1
if(x.name>y.name)return 1
return 0
})

return r
}