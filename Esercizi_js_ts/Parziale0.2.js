function dronePiuVicino(a,p,epsilon){
if (a.length == 0) return

    function eulidea(a,p){
        return Math.sqrt(
            ((p.x-a.x)**2)+
            ((p.y-a.y)**2)+
            ((p.z-a.z)**2)
        )
    }
    let min=eulidea(a[0],p)
    let drone=a[0]
    for(let i=1;i<a.length;i++){

        if((Math.abs(eulidea(a[i],p)-min)>=epsilon)&&(eulidea(a[i],p)<min)) {
                min=eulidea(a[i],p)    
                drone=a[i]
        }
    }
    return drone
}


