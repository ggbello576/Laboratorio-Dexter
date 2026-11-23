let rec filter_map p f l = 
    match l with
    |[] -> []
    |a :: t ->
        if p a then (f a) :: filter_map p f t  else filter_map p f t