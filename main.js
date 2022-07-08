// The constant named 'kelvin' points to the number '273' ...this value was changed to '0' for step 12
const kelvin = 0;
console.log(kelvin);

// The variable named 'celsius' points to a number that is the difference between the value for kelvin and the number 273
var celsius = kelvin - 273;
console.log(celsius);

// The variable named 'fahrenheit' points to a number that involves an equation to convert celsius to fahrenheit using the math operators '*', '/', and '+' 
var fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

//We can round a number using Math objects. We can round up, round down, or round to the nearest greatest integer
Math.floor(fahrenheit);
console.log(Math.floor(fahrenheit));

var TEMPERATURE = (fahrenheit);
console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);

var newton = celsius * (33 / 100);
console.log(newton);

Math.floor(newton);
console.log(Math.floor(newton));
