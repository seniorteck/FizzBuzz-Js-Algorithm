// When the user inputs a number
// Initialize a counter variable and set its value to one
// While counter is smaller than user inputted number increment the counter by one
// Print the value of the counter variable to the console



let answer = parseInt(prompt('Please ener the number you wann fizzBuzz'));

for(let i=1; i<=answer; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}
