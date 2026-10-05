function visitaFunzioni(tree, v) {
    if (!tree) return v

    if (v === undefined) {
        v = tree.val(0)
    } else {
        v = tree.val(v)
    }

    v = visitaFunzioni(tree.sx, v)
    v = visitaFunzioni(tree.dx, v)

    return v
}