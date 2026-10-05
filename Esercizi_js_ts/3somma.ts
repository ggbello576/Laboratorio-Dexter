type NestedArray = (number | NestedArray)[]


function sumNestedArray(a:NestedArray):number{
    let b=0
    for(let i of a){
        if(typeof i =="number"){
            b+=i
        }
        else b+=sumNestedArray(i)
    }
    return b
}
let arr: NestedArray = [[1, 2, [3]], 4, [], [[5, 6], 7]]
console.log(sumNestedArray(arr))