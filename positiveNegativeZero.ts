function plusMinus(arr: number[]): void {
    const length = arr.length
    let positive = 0
    let negative = 0
    let zero = 0
    
    for(let i = 0; i<length; i++) {
        if(arr[i] > 0) {
            positive++
        } else if(arr[i] < 0) {
            negative++
        } else {
            zero++
        }
    }
    
    console.log((positive/length).toFixed(6) + " ")
    console.log((negative/length).toFixed(6) + " ")
    console.log((zero/length).toFixed(6) + " ")
}