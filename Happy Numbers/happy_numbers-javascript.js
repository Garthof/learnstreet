function happyNum(number) {
    var prevNumbers = [];
    var newNumber = number;
    
    while (true) {
        var sum = 0;
        var strNumber = newNumber.toString();
        
        // Compute the sum of squares of the number.
        for (i = 0; i < strNumber.length; i++) {
            var digit = strNumber[i];
            sum += digit * digit;
        }
        
        // If the sum is 1, we have a happy number.
        if (sum == 1) {
            return "Happy Number";
        }
        
        // It's not a happy number. Check if this sum was obtained before.
        for (i = 0; i < prevNumbers.length; i++) {
            var n = prevNumbers[i];
            
            if (sum == n) {
                return "Unhappy Number";
            }
        }
        
        // Repeat the cycle with the computed sum.
        prevNumbers.push(sum);
        newNumber = sum;
    }
}
