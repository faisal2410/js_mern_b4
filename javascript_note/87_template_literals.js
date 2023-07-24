// 👉 template literals in JavaScript.

// Template literals, also known as template strings, provide a convenient way to concatenate strings and include dynamic expressions within them.They were introduced in ECMAScript 6(ES6) and have become widely adopted due to their readability and flexibility.

//  Template literals are created using backticks() instead of single or double quotes.Let's explore their features and usage with some code examples:

// ✅ Basic Syntax:
//  Template literals allow you to embed expressions by enclosing them within ${ } placeholders.Here's a simple example:

// let person = {
//     name: "Faisal ahmed",
//     age: 50,
//     address: {
//         road: 3,
//         house: 50,
//         city:"Sylhet"
//     },
//     marks: [50, 23, 55]
    
// }
// const {name}=person

// let info = `My name is ${name}. I am ${person?.age} years old. I live in ${person.address.city}. In the last exam I got ${person.marks[2]} marks`

// console.log(info);

// const name = 'John';
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, John!


// In the example above, the expression ${ name } is evaluated and its value is inserted into the template literal.

//  ✅   Multi - line Strings:
// Template literals make it easy to work with multi - line strings without resorting to manual concatenation or escape characters.Here's an example:


// const message = `
//        This is a multi-line
//   string using template literals.
//   It preserves line breaks and indentation.
//       test
// `;
// console.log(message);


// The resulting output will retain the line breaks and indentation specified within the template literal.

// ✅Expression Evaluation:
// Template literals allow for complex expressions to be evaluated within the ${ } placeholders.This includes arithmetic operations, function calls, and even nested template literals.Here's an example:


// const num1 = 5;
// const num2 = 7;
// const result = `The sum of ${num1} and ${num2} is ${num1 * num2}.`;
// console.log(result); // Output: The sum of 5 and 7 is 12.

// In this example, the expressions ${ num1 }, ${ num2 }, and ${ num1 + num2 } are all evaluated and their values are inserted into the resulting template literal.




// ✅Escaping Backticks:
// If you need to include a backtick character within a template literal, you can escape it by preceding it with a backslash().Here's an example:


// const message = `I'm using \`template literals\` in JavaScript.`;
// console.log(message); // Output: I'm using `template literals` in JavaScript.


// In this case, the backticks within the template literal are treated as literal characters and not as the start or end of the template literal itself.

// ✅Conditional Expressions(Ternary Operator):
// Template literals can incorporate conditional expressions using the ternary operator(condition ? expr1 : expr2).This allows you to include different content based on a condition.Here's an example:


// const age = 11;
// const message = `You are ${age >= 18 ? (age>=40)?"Bura":"Young" : (age>=10)?"Kishor":"Baby"}.`;
// console.log(message); // Output: You are an adult.

// In this example, the expression age >= 18 ? 'an adult' : 'a minor' is evaluated, and the corresponding string is included in the template literal based on whether the condition is true or false.

// ✅Expression Nesting:
// Template literals can be nested within each other, allowing for more complex expressions and dynamic content.Here's an example:


// const firstName = 'John';
// const lastName = 'Doe';
// const fullName = `${firstName}           ${lastName}`;
// const fullName = `${firstName+lastName}`;
// const message = `Hello, my name
//  is ${fullName}.`;
// console.log(message); // Output: Hello, my name is John Doe.


// In this example, the variables firstName and lastName are concatenated within the fullName variable, which is then used within the template literal for the message variable.

// ✅Raw String Access:
// Template literals provide a special feature called "raw string access," which can be useful when working with escape sequences.By accessing the raw property of a template literal, you can retrieve the raw, unprocessed string.Here's an example:



// const message = String.raw`Hello\n template.js World`;
// console.log(message); // Output: Hello\nWorld


// In this example, the String.raw function is used to retrieve the raw string from the template literal, preserving the escape sequence(\n) instead of interpreting it as a line break.







// ✅Template Literals in Function Calls:
// Template literals can be used as arguments in function calls, enabling flexible and expressive code.Here's an example using the fetch function to make a GET request with a dynamic URL:


// const userId = 42;
// const url = `https://api.example.com/users/${userId}`;

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         //  Handle the response data
//     })
//     .catch(error => {
//         // Handle errors
//     });

// In this example, the URL for the GET request is constructed using a template literal, which allows you to easily insert the userId variable into the URL.

//  ✅   Multi - line Function Templates:
// Template literals can be particularly useful when defining multi - line functions without the need for explicit concatenation or escaping.Here's an example of a multi-line function template:


// const greet = (name) => {
//     return `
//                 Hello, ${name}!
             

//     How are you doing today?
//   `;
// };

// console.log(greet('John'));

// In this example, the greet function uses a template literal to define a multi - line string as its return value.This makes the code more readable and eliminates the need for explicit line concatenation.

// ✅Template Literals with Destructuring:
// Template literals can be combined with destructuring assignments to extract values from objects and arrays conveniently.Here's an example:


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
// };

// const { firstName, lastName, age } = person;
// const message = `${firstName} ${lastName} is ${age} years old.`;
// console.log(message); // Output: John Doe is 30 years old.

// In this example, the values from the person object are extracted using destructuring assignments and then used within the template literal to create a descriptive message.



