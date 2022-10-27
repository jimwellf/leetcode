function timeConversion(s: string) {
    const hours = s.substring(0,2)
    const hh = parseInt(hours)
    const rest = s.substring(2,8)
    const meridiem = s.slice(-2)
    
    switch(meridiem) {
        case "PM" : {
            if(parseInt(hours) == 12) {
                return hours + rest
            } else {
                return String(hh + 12) + rest
            } 
        }
        
        case "AM" : {
            if(parseInt(hours) > 12) {
                return String(hh - 12) + rest
            } else if (hh == 12){
                return "00" + rest
            } else {
                return hours + rest
            }
        }
    }
}