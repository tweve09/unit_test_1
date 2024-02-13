module.exports.greetings = ()=>{
    console.log("Hello, from elementrix")
}

module.exports.add = (firstNumber, secondNumber)=>{
    if((typeof(firstNumber) !== "number") || (typeof(secondNumber) !== "number")){
        return NaN
    }
    return firstNumber + secondNumber
}

module.exports.fizzBuzz = function(input) { 
    if (typeof input !== 'number') 
      throw new Error('Input should be a number.');
      
    if ((input % 3 === 0) && (input % 5) === 0)
      return 'FizzBuzz';
  
    if (input % 3 === 0)
      return 'Fizz';
  
    if (input % 5 === 0)
      return 'Buzz'; 
  
    return input; 
  }