function contaFlista(head,f){
    if(!head)return 0
    if(f(head.val))return 1+contaFlista(head.next,f)
    return contaFlista(head.next,f)
}