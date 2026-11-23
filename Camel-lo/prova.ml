let rec count_above k l =
  match l with
  | [] -> 0
  | (a, b) :: t ->
      if a > k && b mod 2 = 0 then 1 + count_above k t
      else count_above k t

