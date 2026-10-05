//da qui in avanti creo tutte le classi eccezioni estese ad errore, non spiego ogni Classe 
//dato che ho poco tempo, ne spiego una e il procedimento è pressoche sempre il solito
class ModificaNonConsentita extends Error {//estendi ad error cosi hai le sue proprieta e metodi
  #identificatore//testo richiede due prorieta nuove 
  #stato

  constructor(identificatore, stato) {//prendi le proprieta
    super("Stai facendo una modifica non consentita")//richiami il costruttore padre
    this.name = "ModificaNonConsentita"//setti il name dell error a x
    this.#identificatore = identificatore//imposti la proprieta con l argomento passato nel momento dell istanza
    this.#stato = stato//idem
  }

  //faccio i getter cosi che si possano vedere all esterno della classe ed usare nei metodi
  get id() { return this.#identificatore }

  get identificatore() { return this.#identificatore }
  get stato() { return this.#stato }
}


class StatoNonValido extends Error {
  constructor() {
    super("stato non valido")
    this.name="StatoNonValido"
  }
}


class CatenaDelFreddoRotta extends Error {
  constructor() {
    super("Catena del freddo rotta")
    this.name="CatenaDelFreddoRotta"
  }
}

class Pacco {
  #identificatore
  #peso
  #stato
  #eventi

  constructor(id, peso) {
    if (typeof id !== "string" || id.length === 0) throw new Error("id non valido")
    if (typeof peso !== "number" || Number.isNaN(peso)) throw new Error("peso non valido")

    this.#identificatore = id
    this.#peso = peso


    this.#stato = "CREATO"


    this.#eventi = []
  }

  //faccio i getter cosi che si possano vedere all esterno della classe ed usare nei metodi
  get id() { return this.#identificatore }

  get identificatore() { return this.#identificatore }
  get stato() { return this.#stato }
  get eventi() { return this.#eventi }
  get peso() { return this.#peso }

  // peso che puo esseremodificato solo in CREATO
  set peso(k) {
    if (typeof k!=="number") throw new Error

    if (this.#stato!=="CREATO"){
      throw new ModificaNonConsentita(this.#identificatore, this.#stato)//se non è creato appunto mandi l eccezione
    }

    this.#peso=k
  }

  // cambio lo stato e registro l' evento
  avanza(nuovoStato) {
    if (
      nuovoStato !== "CREATO" &&
      nuovoStato !== "IN_TRANSITO" &&
      nuovoStato !== "CONSEGNATO" &&
      nuovoStato !== "BLOCCATO"
    ) {
      throw new StatoNonValido()
    }

    this.#stato=nuovoStato
    this.#eventi.push([new Date(), nuovoStato])//uso new Date()come nell esercitazione
  }
}
//crei la classe pacco refrigerato che estende pacco
class PaccoRefrigerato extends Pacco {
  #temperatura_minima
  #temperatura_massima
  #temperatura_attuale

  constructor(id, peso, temperatura_minima, temperatura_massima, temperatura_attuale) {
    super(id, peso)

    // verifichi le condizioni del testo da paccorefrigerato in poi nel costruttore eanceh fuori 
    if (temperatura_minima>=temperatura_massima) {
      throw new RangeError()
    }
    this.#temperatura_minima = temperatura_minima
    this.#temperatura_massima = temperatura_massima

    // controllo temperatura all inizio di tutto
    if (temperatura_attuale < temperatura_minima || temperatura_attuale > temperatura_massima) {
      this.avanza("BLOCCATO")//richiami il metodo padre
      throw new CatenaDelFreddoRotta()
    }
    this.#temperatura_attuale=temperatura_attuale
  }
  //soliti get
  get temperatura_minima() { return this.#temperatura_minima }
  get temperatura_massima() { return this.#temperatura_massima }
  get temperatura_attuale() { return this.#temperatura_attuale }
 //setti come da problema la temperatura attuale rispettando il testo
  set temperatura_attuale(t) {
    // controllo prima che se l'è fuori range non aggiorno
    if(t<this.#temperatura_minima||t> this.#temperatura_massima) {
      this.avanza("BLOCCATO")
      throw new CatenaDelFreddoRotta()
    }
    this.#temperatura_attuale=t
  }
}

class PaccoFreezer extends PaccoRefrigerato {
  // temperatura massima fissa a 0
  constructor(id, peso, temperatura_minima, temperatura_attuale) {
    super(id, peso, temperatura_minima, 0, temperatura_attuale)
  }
}

// aggiorna la temperatura e ritorna cosa la rompe(quindi ovviamente usi try e catch senno si fermerebbe al primo errore invece ci voglio lavorare)
function aggiorna(pacchi_refrigerati,temperatura){
  let rotti=[]

  for(let p of pacchi_refrigerati){
    try{
      p.temperatura_attuale=temperatura
    } catch(e){
      if(e instanceof CatenaDelFreddoRotta) {
        rotti.push(p)
      } else{
        throw e
      }
    }
  }
  return rotti
}

// un genratore che da solo pacchi in stato bloccato e non refrigerati uno dopo l altro nello stesso ordine di pacchi
function* bloccati(pacchi){
  for (let p of pacchi){
    if (p==null)continue//se è null lo salti ma continui l esecuzione non ti fermi

    if (!(p instanceof PaccoRefrigerato)&&p.stato==="BLOCCATO") {
      yield p
    }
  }
}