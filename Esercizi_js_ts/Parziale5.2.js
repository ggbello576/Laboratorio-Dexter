// creo la classe
class Elemento{
  constructor(val){
    if(typeof val!=="number") throw new Error//deve essere un numero
    this.val=val
    this.next=null//setto null come dice nel comando il nodo successivo
  }
}

// ogni volta applico la funzione agli elementi della lista poi li sommo e li prendo nel momento che voglio con lo yield
function* calcola(testa,f){
  let somma=0 //variabile somma per tenere conto della somma
  let a=testa//prendo al testa 

  while(a!==null){//scorro tutto fino all ultimo valore 
    somma += f(a.val)//sommo il valore applicandogli f
    yield somma //prendo la somma alla n iterazione (quando voglio)
    a=a.next//passo al nodo successivo
  }
}