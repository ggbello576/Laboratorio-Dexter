let rec comprimi lis =
    match lis with
    |[]->[]
    |[x]->[x]
    |a::b::t ->if a=b then comprimi (b::t) else a::(comprimi (b::t))

let rec zip_liste l1 l2=
    match (l1,l2) with
    |(x::t1, y::t2) -> (x,y)::(zip_liste t1 t2)
    | _ ->[]
    

let rec dividi_segno lis=
    match lis with
    |[]->([],[])
    |x::t -> let(l1,l2) = dividi_segno t in 
        if x >=0 then (x::l1,l2) else (l1,x::l2)
    