//initializing the variable that will contain the sum
var sum = 0;

//looping through all the natural numbers from 0 to 1000 
for (var x = 0; x < 1000; x++)
{
    //here we check if the number is a multiple of 3 or 5
    if (x % 3 === 0 || x % 5 === 0)
    {
        //if it is, we add it to our sum 
       sum += x;
    }
}

//once we itterated through all our natural numbers, we output the sum
console.log(sum);