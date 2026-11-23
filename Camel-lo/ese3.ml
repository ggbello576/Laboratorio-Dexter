type articolo =
  | Pezzo of float * float    (* quantità, prezzo unitario *)
  | Peso of float * float     (* kg, prezzo al kg *)

let valore_articolo a =
    match a with
    |Pezzo (a,b) -> a *. b
    |Peso (a,b) -> a *. b

let rec totale_carrello lis =
  match lis with
  | [] -> 0.0
  | h :: t -> (valore_articolo h) +. (totale_carrello t)


let rec separa_articoli lis =
    match lis with
    |[]->([],[])
    |h :: t ->
        let (l1,l2) = separa_articoli t in 
        (match h with
            | Pezzo _ -> (h::l1,l2)
            |Peso _ -> (l1,h::l2))
