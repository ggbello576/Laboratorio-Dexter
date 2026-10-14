class INode {
    a;//estremo sinistro
    b;//e. destro
    right;//figlio destro
    left;//f.sinistro

    constructor(arr) {//inizializzazioni 
        this.a = arr[0];
        this.b = arr[1];
        this.left = null;
        this.right = null;
    }

    add(n) {//ordinamento come da comando
        if (n[0] > this.a || (n[0] == this.a && n[1] >= this.b)){
            if (this.right == null) {// Se il figlio destro non esiste
                this.right = new INode(n);//inserimento a destra 
            } else {
                this.right.add(n);//discesa ricorsiva a derecha
            }
        } else {
             if (this.left == null) {// Se il figlio s. non esiste
                this.left = new INode(n);//ins. a sinistra
            }   else {
                    this.left.add(n);//discesa ricorsiva a sinistra
                }
            }
    }
    findValue(x) {//se x appartiene all intervallo ti rida il nodo 
        if (this.a <= x && x <= this.b) {
            return this;
        }
        //qui cerco nel sottoalbero sinistro
        if (this.left != null) {
            let risleft = this.left.findValue(x);
            if (risleft != null) {
                return risleft;//trovato 
            }
        }
        //qui cerco nel sottoalbero destro
        if (this.right != null) {
            let risright = this.right.findValue(x);
            if (risright != null) {
                return risright;//trovato
            }
        }

        return null;//se non trova in nessun if, allora ritorna null
    }

    get maxd() {//profondità massima del sottoalbero
        if (this.left == null && this.right == null) {
            return 1;//siamo in una foglia 
        }
        //variabili per tenere la profondità
        let risright = 0;
        let risleft = 0;
        //ricorsivo profondità sinistra
        if (this.left != null) {
            risleft = this.left.maxd;
        }
        //ricorsivo profondità destra
        if (this.right != null) {
            risright = this.right.maxd;
        }

        return Math.max(risleft, risright) + 1;//nodo attuale piu max dei figli
    }

    get mind() {
        if (this.left == null && this.right == null) {
            return 1;//foglia
        }
        //setto cosi per ignorare i rami mancanti nel calcolo
        let risright = Infinity;
        let risleft = Infinity;
        //ric.sinistro
        if (this.left != null) {
            risleft = this.left.mind;
        }//ric destro
        if (this.right != null) {
            risright = this.right.mind;
        }
        //Risultato = livello attuale(1)+minimo tra i rami
        return Math.min(risleft, risright) + 1;
    }
}

class YetAnotherAlbero {
    root;
    size;

    constructor() {
        this.root = null;//albero vuoto
        this.size = 0;//no nodi inseriti
    }

    addInterval(a) {
        if (!Array.isArray(a)||a.length != 2) {
            return null//verificare che inserisci un arrray
        }
        if (typeof a[0]!="number" || typeof a[1]!= "number") {
            return null//estremi devono essere numeri
        }
        if (a[0] > a[1]) {
            return null//rispettare l intervallo
        }  //inserimento   
        if (this.root == null) {
            this.root = new INode(a);//se non hai la radice, la crei
        } else {//altrimenti ci pensa il metodo add definito da noi prima nella classe precedente a creare la struttura successiva 
            this.root.add(a);
        }
        this.size++;//aggiorni la size
    }
}