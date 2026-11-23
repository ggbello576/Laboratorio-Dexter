type btree =
  | Node of int * btree * btree
  | Leaf of int

let rec specchio bt=
    match bt with
    |Leaf n -> Leaf n
    |Node (n,sx,dx)-> Node(n,specchio dx, specchio sx)



let rec lista_foglie bt=
    match bt with
    |Leaf n -> n :: []
    | Node (n, sx, dx) -> (lista_foglie sx) @ (lista_foglie dx)

let rec tutti_positivi bt=
    match bt with
    |Leaf n -> if n>0 then true else false
    | Node (n, sx, dx) -> if n > 0 then (tutti_positivi sx) && (tutti_positivi dx) else false
