type expr =
  | Cost of int
  | Somma of expr * expr
  | Molt of expr * expr
  | Div of expr * expr

let rec eval e =
    match e with
    |Cost n -> Some n 
    |Somma (e1,e2) ->
        (match (eval e1,eval e2) with
            |(Some v1, Some v2) -> Some(v1+v2)
            |_ -> None)
    |Molt (e1,e2) ->
        (match (eval e1, eval e2) with
        |(Some v1, Some v2) -> Some(v1 * v2)
        |_ ->None)
    |Div (e1,e2) -> 
        (match (eval e1, eval e2) with
        |(Some v1, Some v2) -> if v2=0 then None else Some (v1/v2)
        |_ ->None)
