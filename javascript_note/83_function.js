
// ✅Here is a list of different types of functions in JavaScript:

// Named Functions
// Anonymous Functions(Function Expressions)
// Arrow Functions
// Recursive Functions
// Higher - Order Functions

// ✅ Built In Functions List :

// Here are some of the most commonly used built -in functions in JavaScript:

    // alert() - Displays a dialog box with a message and an OK button.
    // console.log() - Outputs a message to the web console.
    // prompt() - Displays a dialog box with a message and a text input field.
    // confirm() - Displays a dialog box with a message and OK / Cancel buttons.
    // parseFloat() - Converts a string to a floating - point number.
    // parseInt() - Converts a string to an integer.
    // String() - Converts a value to a string.
    // Number() - Converts a value to a number.
    // Boolean() - Converts a value to a boolean.
    // Array() - Creates a new array object.
    // Object() - Creates a new object.
    // Date() - Creates a new Date object representing a specific time.
    // Math.random() - Generates a random number between 0 and 1.
    // Math.floor() - Rounds a number down to the nearest integer.
    // Math.ceil() - Rounds a number up to the nearest integer.
    // Math.round() - Rounds a number to the nearest integer.
    // Math.max() - Returns the largest number from a list of arguments.
    // Math.min() - Returns the smallest number from a list of arguments.
    // Math.abs() - Returns the absolute value of a number.
    // Math.sqrt() - Calculates the square root of a number.
    // typeof () - Returns the data type of a value.
    // isNaN() - Checks if a value is NaN(Not - a - Number).
    // isFinite() - Checks if a value is a finite number.
    // length() - Returns the length of a string or the number of elements in an array.
    // charAt() - Returns the character at a specified index in a string.
    // substring() - Extracts a substring from a string, based on starting and ending indexes.
    // toUpperCase() - Converts a string to uppercase.
    // toLowerCase() - Converts a string to lowercase.
    // concat() - Joins two or more strings.
    // split() - Splits a string into an array of substrings based on a specified delimiter.
    // join() - Joins all elements of an array into a string.
    // push() - Adds one or more elements to the end of an array.
    // pop() - Removes the last element from an array and returns that element.
    // shift() - Removes the first element from an array and returns that element.
    // unshift() - Adds one or more elements to the beginning of an array.
    // indexOf() - Returns the first index at which a specified element is found in an array.
    // includes() - Checks if an array contains a specified element and returns true or false.
    // slice() - Extracts a section of an array and returns a new array.
    // forEach() - Executes a provided function once for each array element.
    // map() - Creates a new array with the results of calling a provided function on every element in the array.

// reduce() - Applies a function to an accumulator and each element in an array(from left to right) to reduce it to a single value.
// filter() - Creates a new array with all elements that pass a test implemented by a provided function.
// find() - Returns the first element in an array that satisfies a provided testing function.
// findIndex() - Returns the index of the first element in an array that satisfies a provided testing function.
// sort() - Sorts the elements of an array in place and returns the sorted array.
// reverse() - Reverses the order of the elements in an array.
// toFixed() - Formats a number using fixed - point notation and returns a string representation.
// toLocaleString() - Returns a string representation of a number using locale - specific formatting.
// toPrecision() - Formats a number to a specified precision and returns a string representation.
// decodeURI() - Decodes a Uniform Resource Identifier(URI) that has been encoded with encodeURI().
// encodeURI() - Encodes a Uniform Resource Identifier(URI) by replacing each instance of certain characters with escape sequences.
// decodeURIComponent() - Decodes a Uniform Resource Identifier(URI) component that has been encoded with encodeURIComponent().
// encodeURIComponent() - Encodes a Uniform Resource Identifier(URI) component by replacing each instance of certain characters with escape sequences.
// setTimeout() - Calls a function or evaluates an expression after a specified delay(in milliseconds).
// setInterval() - Calls a function or evaluates an expression at specified intervals(in milliseconds) repeatedly.
// clearTimeout() - Cancels a timeout previously scheduled with setTimeout().
//  clearInterval() - Cancels an interval previously set with setInterval().
//  JSON.parse() - Parses a JSON string and converts it into a JavaScript object.
//  JSON.stringify() - Converts a JavaScript object into a JSON string.
//  encodeURIComponent() - Encodes a Uniform Resource Identifier(URI) component by replacing each instance of certain characters with escape sequences.
                                                                




// Functions are an essential part of JavaScript programming as they allow you to encapsulate reusable blocks of code.They are like mini - programs within your program that can perform specific tasks.Functions can be defined and called in different ways, and they can accept parameters and return values.

//     Here's an example of how to define and call a simple function in JavaScript:


// 👉Function definition

// function greet() {
//     console.log("Hello, world!");
// }

// Function call
// greet(); // Output: Hello, world!

// In this example, we define a function called greet(), which logs the message "Hello, world!" to the console.To call the function, we simply write greet();. This will execute the code inside the function and produce the output.

// Functions can also accept parameters, allowing you to pass values into the function for it to use.Here's an example:


// 👉Function definition with parameters
// function addNumbers(a, b) {
//     var sum = a + b;
//     console.log("The sum is: " + sum);
// }

// Function call with arguments
// addNumbers(5, 3); // Output: The sum is: 8

// In this case, the addNumbers() function takes two parameters, a and b, and calculates their sum.When we call the function with addNumbers(5, 3);, the values 5 and 3 are passed as arguments, and the function calculates the sum and logs it to the console.

// Functions can also return values using the return statement.Here's an example:


// 👉Function definition with a return statement

// function multiply(a, b) {
//     var product = a * b;
//     return product;
// }

// Function call and storing the result
// var result = multiply(4, 6);
// console.log("The result is: " + result); // Output: The result is: 24

// In this example, the multiply() function calculates the product of two numbers and returns it using the return statement.We call the function and store the returned value in the variable result, which we then log to the console.




// Here are some commonly used types of functions in JavaScript:

// ✅Named Functions: These are the traditional functions that have a name assigned to them.They can be defined using the function keyword followed by the function name, parameters, and function body.

// function add(a, b) {
//     return a + b;
// }

// ✅Anonymous Functions: Anonymous functions, also known as function expressions, do not have a name and are typically assigned to variables or used as arguments to other functions.

// var greet = function () {
//     console.log("Hello!");
// };

// ✅Arrow Functions: Introduced in ECMAScript 6(ES6), arrow functions provide a concise syntax for writing functions.They are commonly used for writing shorter, one - line functions.

// var multiply = (a, b) => a * b;


// ✅Recursive Functions: Recursive functions are functions that call themselves during their execution.They are useful for solving problems that can be divided into smaller subproblems.

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// ✅Higher - Order Functions: Higher - order functions are functions that can accept other functions as arguments or return functions as their result.They are often used for creating more flexible and reusable code.

// function map(arr, callback) {
//     var mappedArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         mappedArr.push(callback(arr[i]));
//     }
//     return mappedArr;
// }




//✅ Named functions, also known as function declarations, are the traditional way of defining functions in JavaScript.They have a name assigned to them and can be referenced and called by their name within the code.Named functions are defined using the function keyword followed by the function name, a pair of parentheses for optional parameters, and a block of code enclosed in curly braces.

//     Here's an example of a named function that adds two numbers:


// function add(a, b) {
//     return a + b;
// }

// In the above code, the function add is defined with two parameters, a and b, which represent the numbers to be added.The function body contains the addition operation return a + b;, which returns the sum of the two numbers.

// Named functions offer several advantages:

// Readability and Reusability: By giving a meaningful name to a function, it becomes easier to understand its purpose and makes the code more readable.Additionally, named functions can be reused at multiple places within the code.

//     Hoisting: Named functions in JavaScript are hoisted to the top of their scope.This means you can call a named function before its actual definition in the code, and JavaScript will still be able to find and execute it correctly.


// console.log(add(3, 4)); // Outputs: 7

// function add(a, b) {
//     return a + b;
// }

// ✅Recursion: Named functions are particularly useful for implementing recursive algorithms, where a function calls itself during its execution.

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Outputs: 120

// In the above example, the factorial function calculates the factorial of a number using recursion.It calls itself with a smaller value(n - 1) until it reaches the base case (n === 0), then returns the final result by multiplying n with the factorial of n - 1.

// Named functions can also be assigned to variables or passed as arguments to other functions, allowing for more flexibility in JavaScript programming.

   
// var multiply = function multiply(a, b) {
//     return a * b;
// };

// console.log(multiply(2, 3)); // Outputs: 6

// In the code above, the named function multiply is assigned to a variable, multiply, demonstrating that named functions can be used in a function expression syntax as well.

// ✅ Anonymous Function :

// Anonymous functions are functions that are defined without a name and can be assigned to variables or passed as arguments to other functions.They are commonly used in scenarios where you need a function for a specific task but don't necessarily need to reuse it elsewhere.

// Let's start with a simple example:


// var greet = function (name) {
//     console.log("Hello, " + name + "!");
// };

// greet("John");

// In this example, we declare a variable called greet and assign an anonymous function to it.The function takes a parameter called name and logs a greeting to the console using the console.log() function.Finally, we invoke the greet function with the argument "John," resulting in the message "Hello, John!" being printed to the console.

// 👉Anonymous functions can also be passed as arguments to other functions.Here's an example that demonstrates this:


// function doSomething(callback) {
//     // Perform some task
//     var result = 5 + 10;

//     // Invoke the callback function
//     callback(result);
// }

// doSomething(function (result) {
//     console.log("The result is: " + result);
// });

// In this case, we have a function called doSomething that takes a callback function as an argument.Inside doSomething, we perform some task(in this case, adding 5 and 10) and then invoke the callback function, passing the result as an argument.The callback function, defined as an anonymous function when calling doSomething, receives the result as a parameter and logs it to the console.

// Anonymous functions are also commonly used in event handlers.Here's an example that shows how an anonymous function can handle a button click event:


// var button = document.getElementById("myButton");
// button.addEventListener("click", function () {
//     console.log("Button clicked!");
// });

// In this example, we select a button element with the ID "myButton" using document.getElementById().Then we attach an event listener using addEventListener(), specifying the "click" event and an anonymous function to handle the event.When the button is clicked, the anonymous function is executed, and the message "Button clicked!" is logged to the console.


// ✅ Arrow Function :

// Arrow Functions are a concise way to write functions in JavaScript, introduced in ES6(ECMAScript 2015).They provide a more concise syntax compared to traditional function expressions and offer some additional benefits.

//     Here's the basic syntax of an Arrow Function:


// const functionName = (parameter1, parameter2, ...) => {
//     // Function body
// };

// Let's go through the various aspects of Arrow Functions:

// 👉Single Parameter: If your function takes only one parameter, you can omit the parentheses around the parameter.
  
// const greet = name => {
//     console.log(`Hello, ${name}!`);
// };

// greet('John'); // Output: Hello, John!

// 👉Multiple Parameters: If your function takes multiple parameters, you'll need to wrap them in parentheses.

// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(5, 3)); // Output: 8

// 👉No Parameters: If your function doesn't take any parameters, you still need to include empty parentheses.

// const sayHello = () => {
//     console.log('Hello!');
// };

// sayHello(); // Output: Hello!

// 👉Implicit Return: Arrow Functions provide implicit return.If the function body consists of a single expression, you can omit the curly braces and the return keyword.
 
// const double = num => num * 2;

// console.log(double(5)); // Output: 10

// 👉Multiple Statements: If your function body requires multiple statements, you must include curly braces and explicitly return a value if needed.
   
// const multiply = (a, b) => {
//     const result = a * b;
//     return result;
// };

// console.log(multiply(3, 4)); // Output: 12

// ✅Lexical 'this': Arrow Functions do not bind their own 'this' value.Instead, they inherit 'this' from the enclosing scope.This can be especially useful when dealing with callbacks and event handlers.
 
// const person = {
//     name: 'John',
//     greet: function () {
//         setTimeout(() => {
//             console.log(`Hello, ${this.name}!`);
//         }, 1000);
//     }
// };

// person.greet(); // Output: Hello, John!

// In the example above, using an Arrow Function inside setTimeout allows us to access the correct value of this(referring to the person object) within the callback function.

// That's a brief overview of Arrow Functions in JavaScript! They offer a concise and convenient way to write functions, especially in scenarios where shorter, anonymous functions are required. I hope this helps you understand Arrow Functions better. Let me know if you have any further questions!


// ✅ Recursive Function:


// Recursive functions are functions that call themselves to solve a problem by breaking it down into smaller, more manageable subproblems.They are widely used in programming and can be particularly useful for tasks that exhibit repetitive patterns.

//     Let's start with a simple example to demonstrate the concept of recursion. Consider calculating the factorial of a number. The factorial of a non-negative integer n is denoted by n! and is the product of all positive integers less than or equal to n.

// Here's the recursive function for calculating the factorial:


// function factorial(n) {
//     // Base case: factorial of 0 or 1 is 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     // Recursive case: factorial of n is n multiplied by factorial of (n-1)
//     return n * factorial(n - 1);
// }

// Let's break down how this recursive function works:

// First, we define the function factorial that takes a parameter n.
//     Next, we define a base case, which is the simplest form of the problem that doesn't require any further recursive calls. In this case, if n is 0 or 1, we return 1 since the factorial of 0 or 1 is 1.
// If the base case is not met, we move to the recursive case.Here, we make a recursive call to factorial with the parameter n - 1 and multiply it by n.This recursive call breaks down the problem into a smaller subproblem, eventually reaching the base case.
// The function keeps making recursive calls, each time reducing n by 1, until it reaches the base case and the recursion stops.
//     Finally, the function returns the calculated factorial.
//         Let's test the factorial function with a few examples:

// console.log(factorial(0));  // Output: 1
// console.log(factorial(1));  // Output: 1
// console.log(factorial(5));  // Output: 120
// console.log(factorial(8));  // Output: 40320

// In the example above, you can see that the factorial function successfully calculates the factorial of different numbers using recursion.

//     It's important to note that when working with recursive functions, you need to ensure that there is a termination condition (the base case) that will eventually be met. Otherwise, the function will continue making recursive calls indefinitely, leading to a stack overflow error.



// ✅Higher Order Function:


// Higher - order functions are functions that can accept other functions as arguments or return functions as their results.They provide a powerful way to work with functions and can lead to more concise and expressive code.

//     Let's start with an example to illustrate the concept. Suppose we have an array of numbers, and we want to double each number in the array. We can use a higher-order function called map to achieve this. Here's how it works:


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function (num) {
//     return num * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// In the code above, map is a higher - order function that takes a callback function as an argument.The callback function is applied to each element in the array numbers, and the results are collected into a new array called doubledNumbers.The callback function takes an argument num which represents each element in the array and returns the doubled value.

//     Let's explore some other commonly used higher-order functions:

// forEach: It applies a provided function to each element in an array.


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (num) {
//     console.log(num);
// });
// // Output: 1 2 3 4 5



// filter: It creates a new array with all elements that pass a certain condition.

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function (num) {
//     return num % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]

// reduce: It applies a function to an accumulator and each element in an array, resulting in a single value.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function (acc, num) {
//     return acc + num;
// }, 0);

// console.log(sum); // Output: 15

// find: It returns the first element in an array that satisfies a condition.
  
// const numbers = [1, 2, 3, 4, 5];

// const foundNumber = numbers.find(function (num) {
//     return num > 3;
// });

// console.log(foundNumber); // Output: 4

// These are just a few examples of higher - order functions in JavaScript.The beauty of higher - order functions is that they provide a way to abstract common patterns and make your code more declarative and readable.By understanding higher - order functions, you can take advantage of the functional programming paradigm and write more concise and maintainable code.



















    

















