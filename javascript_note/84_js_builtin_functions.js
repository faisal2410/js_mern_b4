//👉 JavaScript provides a wide range of built -in functions that you can use to perform common tasks and manipulate data.Let's explore some of the most commonly used ones along with code examples:
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


// ✅parseInt(): This function converts a string to an integer.

// let numString = "42";
// let num = parseInt(numString);
// console.log(num); // Output: 42

// ✅parseFloat(): Similar to parseInt(), parseFloat() converts a string to a floating - point number.

// let floatString = "3.14";
// let floatNum = parseFloat(floatString);
// console.log(floatNum); // Output: 3.14

// ✅toString(): This function converts a value to a string.

// let number = 42;
// let stringNum = number.toString();
// console.log(stringNum); // Output: "42"

// ✅toUpperCase() and toLowerCase(): These functions convert a string to uppercase and lowercase, respectively.
 
// let message = "Hello, World!";
// let uppercaseMessage = message.toUpperCase();
// console.log(uppercaseMessage); // Output: "HELLO, WORLD!"

// let lowercaseMessage = message.toLowerCase();
// console.log(lowercaseMessage); // Output: "hello, world!"

//✅ length: The length property returns the length of a string or the number of elements in an array.

// let greeting = "Hello!";
// console.log(greeting.length); // Output: 6

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length); // Output: 5

// ✅push() and pop(): These functions add and remove elements from the end of an array, respectively.

// let fruits = ["apple", "banana", "orange"];
// fruits.push("grape");
// console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// let removedFruit = fruits.pop();
// console.log(removedFruit); // Output: "grape"
// console.log(fruits); // Output: ["apple", "banana", "orange"]

// ✅indexOf() and lastIndexOf(): These functions search for a specified value in an array and return the index of the first and last occurrence, respectively.

// let numbers = [1, 2, 3, 2, 4, 2];
// console.log(numbers.indexOf(2)); // Output: 1
// console.log(numbers.lastIndexOf(2)); // Output: 5



// ✅slice(): This function returns a shallow copy of a portion of an array into a new array.

// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// let slicedFruits = fruits.slice(1, 4);
// console.log(slicedFruits); // Output: ["banana", "orange", "grape"]

// ✅join(): The join() function creates and returns a new string by concatenating all the elements of an array, separated by a specified separator.

// let fruits = ["apple", "banana", "orange"];
// let joinedString = fruits.join(", ");
// console.log(joinedString); // Output: "apple, banana, orange"

// ✅Math.random(): This function generates a random number between 0(inclusive) and 1(exclusive).

// let randomNumber = Math.random();
// console.log(randomNumber); // Output: a random number between 0 and 1

// ✅Math.floor() and Math.ceil(): These functions round a number down and up to the nearest integer, respectively.

// let number = 3.7;
// let roundedDown = Math.floor(number);
// console.log(roundedDown); // Output: 3

// let roundedUp = Math.ceil(number);
// console.log(roundedUp); // Output: 4

// ✅setInterval(): This function repeatedly calls a function or evaluates an expression at a specified interval(in milliseconds).
 
// function displayTime() {
//     let currentTime = new Date().toLocaleTimeString();
//     console.log(currentTime);
// }

// setInterval(displayTime, 1000); // Output: current time displayed every second

// ✅setTimeout(): This function calls a function or evaluates an expression after a specified delay(in milliseconds).

// function greet() {
//     console.log("Hello!");
// }

// setTimeout(greet, 2000); // Output: "Hello!" displayed after a 2-second delay


// ✅toFixed(): This function formats a number to a specified number of decimal places and returns it as a string.

// let number = 3.14159;
// let formattedNumber = number.toFixed(2);
// console.log(formattedNumber); // Output: "3.14"

// Math.max() and Math.min(): These functions return the maximum and minimum value from a list of numbers, respectively.

// let maxNumber = Math.max(5, 8, 2, 10);
// console.log(maxNumber); // Output: 10

// let minNumber = Math.min(5, 8, 2, 10);
// console.log(minNumber); // Output: 2

// ✅Array.isArray(): This function checks if a value is an array and returns true or false.

// let array = [1, 2, 3];
// console.log(Array.isArray(array)); // Output: true

// let string = "Hello";
// console.log(Array.isArray(string)); // Output: false


// ✅Math.pow(): This function returns the base raised to the exponent power.

// let result = Math.pow(2, 3);
// console.log(result); // Output: 8

//✅ charAt(): This function returns the character at a specified index in a string.

// let message = "Hello";
// let character = message.charAt(1);
// console.log(character); // Output: "e"



// ✅Array.prototype.forEach(): This function executes a provided callback function once for each element in an array.

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (number) {
//     console.log(number);
// });
// Output:
// 1
// 2
// 3
// 4
// 5


// ✅JSON(JavaScript Object Notation) is a lightweight data interchange format commonly used for transmitting data between a server and a web application, or between different parts of a web application.It provides a way to represent structured data in a human - readable format that is easy to parse and generate.

// JSON consists of key - value pairs, similar to objects in JavaScript.The keys are always strings, and the values can be strings, numbers, booleans, arrays, or nested objects.JSON is often used to exchange data between a server and a client, as it is a widely supported format across different programming languages.

//     Now, let's dive into the JSON.parse() function. It is used to parse a JSON string and convert it into a JavaScript object.

// Here's an example:


// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const person = JSON.parse(jsonString);

// console.log(person.name);  // Output: John
// console.log(person.age);   // Output: 30
// console.log(person.city);  // Output: New York

// In the code above, we have a JSON string stored in the jsonString variable.We use JSON.parse(jsonString) to parse the string and convert it into a JavaScript object.We then access the properties of the resulting object(person) using dot notation.

//  ✅   Now, let's move on to the JSON.stringify() function. It is used to convert a JavaScript object into a JSON string.

// Here's an example:


// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// In the code above, we have a JavaScript object person with properties representing a person's name, age, and city. We use JSON.stringify(person) to convert the object into a JSON string. The resulting JSON string is then printed to the console using console.log(jsonString).

// The output will be:


// { "name": "John", "age": 30, "city": "New York" }

// Note that JSON.stringify() also accepts additional parameters that allow you to customize the stringification process, such as specifying a replacer function or adding whitespace for readability.However, these are optional and not necessary for basic usage.



// ✅setTimeout() is a function in JavaScript that allows you to schedule a single execution of a function after a specified delay in milliseconds.Here's the syntax:


// setTimeout(function, delay, param1, param2, ...)
// function is the function to be executed.
// delay is the time in milliseconds to wait before executing the function.
// param1, param2, and so on are optional parameters that can be passed to the function.
// Here's an example that demonstrates the usage of setTimeout():


// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// setTimeout(greet, 2000, 'John');

// In this example, the greet function will be executed after a delay of 2000 milliseconds(or 2 seconds), and it will pass the value 'John' as the name parameter.

// ✅setInterval() is similar to setTimeout(), but it repeatedly executes a function at a specified interval.The syntax is as follows:


// setInterval(function, delay, param1, param2, ...)
// function is the function to be executed repeatedly.
// delay is the time in milliseconds between each execution of the function.
// param1, param2, and so on are optional parameters that can be passed to the function.
// Here's an example that demonstrates the usage of setInterval():


// let count = 0;

// function incrementCounter() {
//     count++;
//     console.log(`Counter: ${count}`);
// }

// let intervalId = setInterval(incrementCounter, 1000);

// In this example, the incrementCounter function will be executed every 1000 milliseconds(or 1 second), incrementing the count variable and logging its value.The setInterval() function returns an interval ID that can be used to stop the interval later.

// To stop the execution of a function scheduled using setInterval(), you can use the clearInterval() function. Here's the syntax:


// ✅clearInterval(intervalId);
// intervalId is the ID returned by setInterval() when creating the interval.
//     Here's an example that demonstrates the usage of clearInterval():


// let count = 0;

// function incrementCounter() {
//     count++;
//     console.log(`Counter: ${count}`);

//     if (count >= 5) {
//         clearInterval(intervalId);
//     }
// }

// let intervalId = setInterval(incrementCounter, 1000);
// In this example, the incrementCounter function is executed every second until the count variable reaches 5. At that point, clearInterval() is called with the intervalId to stop further execution of the function.




// ✅find(): The find() function is used to search through an array and return the first element that satisfies a provided condition.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const evenNumber = numbers.find((num) => num % 2 === 0);
// console.log(evenNumber); // Output: 2

// In the example, the find() function looks for the first even number in the numbers array.

// ✅filter(): The filter() function creates a new array with all elements that pass a given condition.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// The filter() function filters out the odd numbers from the numbers array and returns a new array with only the even numbers.

// ✅map(): The map() function is used to create a new array by applying a transformation to each element of an existing array.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// The map() function multiplies each number in the numbers array by 2 and returns a new array with the transformed values.

// ✅reduce(): The reduce() function is used to accumulate the elements of an array into a single value by applying a function that reduces it.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

// In the example, the reduce() function adds up all the numbers in the numbers array and returns the sum.

// ✅findIndex(): The findIndex() function returns the index of the first element in an array that satisfies a given condition.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const evenIndex = numbers.findIndex((num) => num % 2 === 0);
// console.log(evenIndex); // Output: 1

// In the example, the findIndex() function finds the index of the first even number in the numbers array.

// sort(): The sort() function is used to sort the elements of an array in place.Here's an example:
// javascript

// const numbers = [3, 1, 4, 2, 5];

// numbers.sort();
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// The sort() function sorts the numbers array in ascending order.





































