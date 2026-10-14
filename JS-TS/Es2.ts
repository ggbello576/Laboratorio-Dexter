function enqueue<T extends {priority:number}>(e:T,queue:T[]):void{
    let a:number=queue.length
    for(let i:number=0;i<queue.length;i++){
        if(queue[i].priority>=e.priority){
            a=i
            break
        }
    }
    queue.splice(a,0,e)
}


function dequeue<T>(queue:T[]):T|undefined{
    if (queue.length === 0) return undefined
    else return queue.pop()
}