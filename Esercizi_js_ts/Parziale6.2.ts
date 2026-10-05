type Timestamp = {//tipo timestamp
  minute:number,
  hour:number,
  day:number,
  month:number,
  year:number,
}

type UpdateFunction<T>=(value:T)=>T;//tipo che prende un valoore e restituisce un valore dello stesso tipo
type Update<T>={//tipo update con f che è updatefunction e timestamp che è timestamp(ovvio eh :D)
  f:UpdateFunction<T>,
  timestamp:Timestamp,
}

function compareTimestamps(a:Timestamp,b:Timestamp):number {//confronta due timestamp cosi mi do una mano(se funzionasse)
  if(a.year!==b.year) return a.year-b.year
  if(a.month!==b.month) return a.month-b.month
  if(a.day!==b.day) return a.day-b.day
  if(a.hour!==b.hour) return a.hour-b.hour
  return a.minute-b.minute
}

class EarlierUpdateError extends Error{//errore se il timestamp è precedente
  timestamp:Timestamp;

  constructor(timestamp:Timestamp) {
    super()
    this.timestamp=timestamp
  }
}

class UpdateChain<T> {
  initial_value:T//valore iniziale
  updates:Array<Update<T>>//array di aggiornamenti

  constructor(initial_value:T) {//setti il valore iniziale e l'array vuoto
    this.initial_value=initial_value
    this.updates=[]
  }

  get current_value():T{//applichi le funzioni di aggiornamento al valore iniziale
    let value=this.initial_value

    for(let update of this.updates) {
      value=update.f(value)
    }
    return value;
  }

  add(update_function:UpdateFunction<T>,timestamp:Timestamp):void{//aggiungi un aggiornamento alla lista mantenendo l'ordine se da err
    let lastUp=this.updates[this.updates.length-1]
    if(lastUp && compareTimestamps(timestamp,lastUp.timestamp)<0) {
      throw new EarlierUpdateError(timestamp)
    }

    this.updates.push({f:update_function, timestamp:timestamp,})
  }
}