// Exercise 1 IS EVEN
// Write a function isEven() whick takes a single numeric argument 
// and returns true if the number is even and false otherwise.

// var num = ""

// function isEven(num) {
//   if (num % 2 == 0) {
//     return true
//   }
//   else {
//     return false
//   }
// }

// isEven(num)

// Exercise 2 FACTORIAL
// write a function factorial() which takes a single numeric argument and
// returns the factorial of that number

// var num = "";
// var resultado = 1;

// function factorial(num) {
//   for (let i = num; i > 0; i--){
//     resultado = resultado * i; 
//   };
//   return resultado;
// };

// factorial(num);

// kebabToSnake()
// write a function kebabToSnake() which takes a single kebab-cased 
// string argument and returns the snake_cased version

function kebabToSnake(input) {
  var output = input.replace(/-/g, "_");
  console.log(output)
  return output
}

kebabToSnake("kebab-to-snake")
