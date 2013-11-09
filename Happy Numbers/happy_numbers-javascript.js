function happyNum(number) {
    var prevNumbers = [];
    var newNumber = number;
    
    while (true) {
        var sum = 0
        var strNumber = newNumber.toString();
        
        // Compute the sum of squares of the number.
        for (digit in strNumber) {
            sum += digit * digit;
        }
        
        // If the sum is 1, we have a happy number.
        if (sum == 1) {
            return "Happy Number";
        }
        
        // It's not a happy number. Check if this sum was obtained before.
        for (n in prevNumbers) {
            if (sum == n) {
                return "Unhappy Number";
            }
        }
        
        // Repeat the cycle a
        prevNumbers.push(sum);
        newNumber = sum;
    }
}