function largestPalindrome(){

    //initializing an array
    var arr = 0; 
    
    //looping trough all 3 digits natural numbers once
    for(var i =999; i>100; i--){

        //looping through all 3 digits natural numbers a second time to test all multiplactions
        for(var j = 999; j>100; j--){

            //here we simply muliply the variables from the loops
            var mul = j*i;
            if(isPalin(mul)){

                //if it it a palindrome, we store the two variables in the array we initialized
                arr = j * i;
            }
        }
    }

    return arr
}

//this function turns the product into a string and checks wether it is a palindromic number
function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("");
}


console.log(largestPalindrome());