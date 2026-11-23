let rec cerca_chiave k lis =
    match lis with
    |[]->None
    |(a,b)::t ->if a=k then Some b else cerca_chiave k t 

let somma_opzioni o1 o2 =
  match (o1, o2) with
  | (Some n1, Some n2) -> Some (n1 + n2)
  | _ -> None

let applica_opzione f opt =
  match opt with
  | None -> None
  | Some x -> Some (f x)