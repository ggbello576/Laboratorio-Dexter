function prodottoFLista(head,f){
    let prodotto
    if(!head)return 1

    if(!Number.isInteger(head.val))return 1

    if(f(head)){

        return head.val*prodottoFLista(head.next,f)

    }
    return prodottoFLista(head.next,f)

}
