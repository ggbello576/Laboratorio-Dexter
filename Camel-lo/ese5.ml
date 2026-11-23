type btree =
  | Node of int * btree * btree
  | Leaf of int

let rec cerca k bt =
    match bt with
    |Leaf n -> if n=k then true else false
    |Node (n,sx,dx) -> if n=k then true else (cerca k sx )||(cerca k dx)

let rec raddoppia_albero bt =
    match bt with
    |Leaf n -> Leaf(n*2)
    |Node (n,sx,dx)-> Node(n*2,raddoppia_albero sx, raddoppia_albero dx )

let rec filtra_presenti k btlis=
    match btlis with
    |[]->[]
    |x ::t -> if cerca k x then x::( filtra_presenti k t) else filtra_presenti k t
