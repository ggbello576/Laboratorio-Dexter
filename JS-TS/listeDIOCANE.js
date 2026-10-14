function duplicaPari(head){
    if(head==undefined){
        return {lista:null,duplicati:0}
    }
    let a=duplicaPari(head.next)
    if(head.val%2==0&&Number.isInteger(head.val)){
        let copia = {val: head.val,next: a.lista};
        head.next=copia
        return {lista:head,duplicati:a.duplicati+1}
    } else {
    head.next = a.lista;
    return { lista: head, duplicati: a.duplicati };
}
    return {lista:head,duplciati:a.duplicati}
}
console.log(duplicaPari({val:2,next:{val:5,next:null}}))