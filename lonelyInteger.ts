function lonelyinteger(a: number[]): number {
    const length = a.length
    
    for(let i = 0; i<length; i++) {
        
        let count = 0
        
        for(let x = 0; x<length; x++) {
            if(a[i] == a[x])
            count++
        }
        
        if(count == 1) {
            return a[i]
        }
    }
    
    return 0
}