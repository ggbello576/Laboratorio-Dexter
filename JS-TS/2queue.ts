function enqueue<T extends {priority:number}>(e:T,queue:T[]):T[]{
    if(queue.length==0)return queue=[e]
    let a:number=0
    while (a < queue.length && queue[a].priority >= e.priority) {
        a++;
    }
    queue.splice(a, 0, e);
    return queue
    
}
function queue<T extends{priority:number}>(queue:T[]):T|undefined{
    if(queue.length==0)return undefined
    else return queue.pop()
}