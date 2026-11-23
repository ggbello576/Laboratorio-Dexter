type ntree =
  | Node of int * ntree list

let rec somma_ntree t =
  let rec somma_lista l =
    match l with
    | [] -> 0
    | h :: tl -> (somma_ntree h) + (somma_lista tl)
  in
  match t with
  | Node (n, tlist) -> n + (somma_lista tlist)

let rec incrementa_ntree k t =
  let rec inc_lista l =
    match l with
    | [] -> []
    | h :: tl -> (incrementa_ntree k h) :: (inc_lista tl)
  in
  match t with
  | Node (n, tlist) -> Node (n + k, inc_lista tlist)