type btree =
  | Node of int * btree * btree
  | Leaf of int

let rec somma_nodi a =
    match a with
    | Leaf n -> 0
    | Node (n,sx,dx) -> n +somma_nodi sx + somma_nodi dx


let rec conta_foglie a =
  match a with
  | Leaf n -> 1
  | Node (n, sx, dx) -> conta_foglie sx + conta_foglie dx


let rec max_foglie btlist =
  match btlist with
  | [] -> 0
  | r :: t ->
      let f1 = conta_foglie r in
      let f2 = max_foglie t in
      if f1 > f2 then f1 else f2