function miniMaxSum(arr: number[]): void {
    const length = arr.length
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let total = 0
    
    for(let i = 0; i < length; i++) {
        total += arr[i]
    }
    
    let maxSum = total - max
    let minSum = total - min
    
    console.log(maxSum, minSum)
}