class Imbarcazione{
    nome
    constructor(nome){
        this.nome=nome
    }
}
class Nave extends Imbarcazione{
    porto
    constructor(nome,porto){
        super(nome)
        this.porto=porto
    }
}
class Barca extends Imbarcazione{
    lunghezza
    constructor(nome,lunghezza){
        super(nome)
        this.lunghezza=lunghezza
    }
    get metri(){
        return this.lunghezza

    }
    set metri(x){
        this.lunghezza=x
    }
}
class Motoscafo extends Barca{
    motori
    constructor(nome,lunghezza,motori){
        super(nome,lunghezza)
        this.motori=motori
    }
}

function trovaBarca(a) {
    let f = undefined

    if (a instanceof Array) {
        for (let b of a) {
            if (b instanceof Barca) {
                if (f === undefined || b.lunghezza > f.lunghezza) {
                    f = b
                }
            }
        }
    }

    return f
}