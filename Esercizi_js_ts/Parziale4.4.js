class MapStation {
  size //stazioni(nodi)
  grafo//lista di adiacenza
  constructor() {
    this.size = 0
    this.grafo = {}
  }

  binario(u, v) {//crei un arco(letteralmente un binario)
//se non esiste si crea
    if (this.grafo[u] == null) {
      this.grafo[u] = []//adiacenza vuota per ora
      this.size++   // obv aumentano i nodi
    }
//idem per v
    if (this.grafo[v] == null) {
      this.grafo[v] = []
      this.size++
    }
//controlli i vicini e in caso inserisci
    if (!this.grafo[u].includes(v)) {
      this.grafo[u].push(v)
    }
//idem er v,il grafo non orientato è simmetrico
    if (!this.grafo[v].includes(u)) {
      this.grafo[v].push(u)
    }
  }

  diretto(u,v) {//collegamento diretto
    if(this.grafo[u]==null || this.grafo[v]==null) return false//guardi se uno dei due esiste, senno non colleghi a nulla ovviamente
    if(this.grafo[u].includes(v) && this.grafo[v].includes(u)){//da qui controlli la presenza nelle liste di adiacenza
      return true
    }else{
      return false
    }
  }
  
  raggiungibile(u, v) {//volevo stabilire che esistesse un collegamento non diretto, ho cercato sul web e ho trovato bfs(breadth-first search), ho implementato questo algoritmo e riutilizzato da ora in poi
    //controllo se sorgente o stesso nodo
    if (this.grafo[u] == null || this.grafo[v] == null) {
      return false
    }
    if (u==v) return true
    
    let array =[u]//coda del bfs
    let visto ={}
    visto[u] =true//segni la sorgente come vista(per evitare loop)
    //finche ci sono nodi da esplorare
    while (array.length >0) {
      let a =array.shift()//prendo il nodo dalla coda
      let vicini =this.grafo[a]//prendo i suoi vicini

      for (let i=0; i<vicini.length;i++) {//li scorro tutti
        let x=vicini[i];

        if (x==v) return true//se lo trovi ti fermi altrimenti

        if (visto[x] !==true) {//controlli se avevi gia visto il vicino o no
          visto[x] =true//se lo hai visto lo marchi visitato
          array.push(x)//altrimenti lo guardi nel giro successivo
        }
      }
   }
    return false;//se non trova v non è raggiungibile
  }

  percorso(u, v) {//anche qui ho sfruttato il bfs
    //soliti controlli
    if (u == v) return [u]
    if (this.grafo[u] == null || this.grafo[v] == null) return null
    let array = [u]//bfs modificato per evitare di verificare solo di arrivare a v, ma anche per ricordarci da dove siamo partiti, aggiungendo appenavisto[x]=a (letterlametne ho visto x partendo da a), trovo il minimo perche la bfs lavora in coda first in first out segnandomi ogni volta chi vedo , controllando prima i nodi a distanza minore(0,1,2,3,n archi)
    let visto = {}
    let appenavisto = {}
    visto[u] = true
    appenavisto[u] = null
    while (array.length > 0) {
      let a=array.shift()
      let vicini = this.grafo[a];
      for (let i = 0; i < vicini.length; i++) {
      let x = vicini[i];

        if (visto[x] !==true) {
          visto[x] =true
          appenavisto[x] =a

          if (x ===v) {
            let babbo =[v]
            while (appenavisto[babbo[0]] !=null) {
              babbo.unshift(appenavisto[babbo[0]])
            }
            return babbo;
          }

          array.push(x);
        }
      }

   }
   return null
  } 
}