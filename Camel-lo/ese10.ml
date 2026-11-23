let rec inserisci_ordinato x lis =
    match lis with
    |[]->[x]
    |a::t -> if x>a then x::a::t else a::(inserisci_ordinato x t)

let rec insertion_sort lis =
    match lis with
    |[]->[]
    |x::t -> inserisci_ordinato x (insertion_sort t)

let rec rimuovi_tutti x lis =
  match lis with
  | [] -> []
  | a :: t ->
      if x = a then rimuovi_tutti x t
      else a :: (rimuovi_tutti x t)