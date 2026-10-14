class InvalidTransitionError extends Error{//creo errore invalid..
    #current_state:RequestState
    #target_state:RequestState//creo i paramentri cosi da passargli lo stato attuale e quello obbiettivo
    constructor(current_state:RequestState,target_state:RequestState){
        super()
        this.#current_state=current_state
        this.#target_state=target_state
    }
}
class InvalidOperationError extends Error{//creo errore ecc
    constructor(){
        super()
    }
}

enum RequestState{//enum per gli stati di state
    Draft,
    Review,
    Approved,
    Rejected,
    Archived,
}

class MyRequest{//classe principale
    #title:string
    #content:string="TBD"
    #state:RequestState
   constructor(title:string,content:string="TBD"){//costruttore come richiesto
    this.#title=title
    this.#content=content
    this.#state=RequestState.Draft
}//vari getter per lavorare sui campi
    get title():string{
        return this.#title
    }
    get state():RequestState{
        return this.#state
    }
    get content():string{
        return this.#content
    }

    advance(new_stage:RequestState):void{//semplicemente controllo che le freccie vadano nel modo giusto altrimenti throw un errore
        if((this.#state==RequestState.Draft&&new_stage==RequestState.Review)
        ||(this.#state==RequestState.Review&&new_stage==RequestState.Approved)
        ||(this.#state==RequestState.Review&&new_stage==RequestState.Rejected)
        ||(this.#state==RequestState.Approved&&new_stage==RequestState.Archived)
        ||(this.#state==RequestState.Rejected&&new_stage==RequestState.Archived)){
                this.#state=new_stage
        }else throw new InvalidTransitionError(this.#state,new_stage)
    }
    
    set content(x:string){//setto il content solo se sono su draft o rejected
        if((this.#state==RequestState.Draft)||this.#state==RequestState.Rejected){
            this.#content=x
        }else throw new InvalidOperationError()
        
    }
}

function score(requests:MyRequest[]):number{//semplicemente con una serie di if conto i punti!
    let c=0
    for (let a of requests){
        if (a.state===RequestState.Draft) {
            c=c-1
        } else if (a.state===RequestState.Review) {
            c=c+0
        } else if (a.state===RequestState.Approved) {
            c=c+1
        } else if (a.state===RequestState.Rejected) {
            c=c-2
        } else if (a.state===RequestState.Archived) {
            c=c+3
        }
    }
    return c
}