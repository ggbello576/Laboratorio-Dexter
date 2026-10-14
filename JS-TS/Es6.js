function map_tree(tree,sx_fun,dx_fun){
    function calcola(tree,funzione){
        if(!tree)return null
        let nuovo
        if(funzione==undefined)nuovo=tree.val
        else nuovo=funzione(tree.val)
        return{
            val:nuovo,
            sx:calcola(tree.sx,sx_fun),
            dx:calcola(tree.dx,dx_fun)
        }
    }
    return calcola(tree,sx_fun)
}
let a = {
    val: 5,
    sx: {
        val: 8,
        sx: { val: 2, sx: null, dx: null },
        dx: { val: 4, sx: null, dx: null }
    },
    dx: {
        val: 10,
        sx: null,
        dx: { val: 7, sx: null, dx: null }
    }
}
console.log(map_tree(a, x => x + 1, x => x - 1))