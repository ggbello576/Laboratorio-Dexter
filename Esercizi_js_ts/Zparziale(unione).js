function unioneParziale(A,n) {
    let pippo={} //crei due insiemi, uno per inserire i conteggi(pippo) e risultato per il risultato
    let risultato={}
    // quante volte appaiono elementi comuni egli insiemi
    for(let i=0;i<A.length;i++) {
        let elemento=A[i]
        for(let chiave in elemento) {
            pippo[chiave]=(pippo[chiave] || 0)+1//aumenti il tuo contatore(pippo)
        }
    }
//se appare n volte mettila nel risultato
    for(let chiave in pippo){
        if (pippo[chiave]>=n) {//guardi se l'elementi di pippo hanno lo stesso valore di n
            risultato[chiave]=1 //qui inserisci in risultato i tuoi risultati 
        }
    }
    return risultato
}