let rec find_value k l =
    match l with
    |[] -> None
    |(a,b) :: t ->
        if a=k then Some b else find_value k t 
