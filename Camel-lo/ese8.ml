let rec coppie_adiacenti lis =
    match lis with
    |[]->[]
    |[x]->[]
    |x::y::t -> (x,y) ::( coppie_adiacenti (y :: t))

let rec posizioni_pari lis =
  match lis with
  | [] -> []
  | [x] -> [x]
  | x :: y :: t -> x :: (posizioni_pari t)

let rec unzip lis =
  match lis with
  | [] -> ([], [])
  | (a, b) :: t ->
      let (l1, l2) = unzip t in
      (a :: l1, b :: l2)
      