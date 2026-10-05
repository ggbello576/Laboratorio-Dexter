function filtraLista(head) {
    if (!head) {
        return { lista: null, rimossi: 0 }
    }

    let ris = filtraLista(head.next)

    if (Number.isInteger(head.val) && head.val % 2 !== 0) {
        return {
            lista: ris.lista,
            rimossi: ris.rimossi + 1
        }
    }

    head.next = ris.lista

    return {
        lista: head,
        rimossi: ris.rimossi
    }
}