// 👉Short - circuiting and logical operators in JavaScript.

// These concepts are fundamental to understanding how to control the flow of your code based on certain conditions.Let's dive into each concept one by one.

//✅ 1. Short - Circuiting:
// In JavaScript, short - circuiting refers to the behavior of logical operators && and || when evaluating expressions.When these operators are used in an expression with multiple conditions, JavaScript stops evaluating the expression as soon as the final outcome can be determined.

//   ✅  The && operator:

// The && operator returns the first falsy value or the last truthy value encountered, depending on the evaluation.
// If the left operand is falsy(e.g., false, 0, null, undefined, NaN), it is returned.Otherwise, the right operand is returned.
//     Here's an example:

// const result = false && true;
// console.log(result);  // Output: false

// In this case, since the left operand(false) is falsy, JavaScript stops evaluating and returns false.

//    ✅ The || operator:

// The || operator returns the first truthy value or the last falsy value encountered, depending on the evaluation.
// If the left operand is truthy, it is returned.Otherwise, the right operand is returned.
//     Here's an example:

// const result = true || false;
// console.log(result);  // Output: true

// In this case, since the left operand(true) is truthy, JavaScript stops evaluating and returns true.

// 2. ✅Logical Operators: &&, ||, ??
//     In addition to short - circuiting, JavaScript provides logical operators that are commonly used for conditional expressions.

//      ✅   The && operator:

//     The && operator returns true if both the left and right operands are truthy; otherwise, it returns false.
//         Here's an example:

// const result = true && false;
// console.log(result);  // Output: false

// In this case, since one of the operands(false) is falsy, the expression evaluates to false.


// ✅    The || operator:

// The || operator returns true if either the left or right operand(or both) are truthy; it returns false if both operands are falsy.
//     Here's an example:

// const result = true || false;
// console.log(result);  // Output: true

// In this case, since one of the operands(true) is truthy, the expression evaluates to true.


//    ✅ The ?? operator(Nullish Coalescing Operator):

// The ?? operator returns the right operand if the left operand is null or undefined; otherwise, it returns the left operand.
// This operator is useful for providing a default value when dealing with potentially null or undefined values.
//     Here's an example:

// const name = null;
// const defaultName = name ?? 'John Doe';
// console.log(defaultName);  // Output: John Doe

// In this case, since name is null, the right operand('John Doe') is returned as the default value.
// These are the main concepts related to short - circuiting and logical operators in JavaScript.Understanding them is crucial for writing concise and efficient code.Feel free to ask if you have any questions or need further clarification!


// ✅Example 1: Using short - circuiting to handle default values:


// function greetUser(name) {
//     name = name || 'Guest';
//     console.log('Hello, ' + name + '!');
// }

// greetUser();  // Output: Hello, Guest!
// greetUser('John');  // Output: Hello, John!

// In this example, if the name parameter is falsy(e.g., undefined, null, or an empty string), the short - circuiting behavior of the || operator assigns the default value 'Guest' to the name variable.

// ✅Logical Operators: &&, ||, ??

//     Example 2: Using logical operators for conditional statements:


// function checkAge(age) {
//     if (age >= 18 && age <= 65) {
//         console.log('You are eligible.');
//     } else {
//         console.log('You are not eligible.');
//     }
// }

// checkAge(25);  // Output: You are eligible.
// checkAge(10);  // Output: You are not eligible.

// In this example, the && operator is used to check if the age falls within the range of 18 to 65. If both conditions are true, the user is considered eligible.

//  ✅   Example 3: Using the Nullish Coalescing Operator to handle nullable values:


// function getUserRole(user) {
//     const role = user.role ?? 'Guest';
//     console.log('User role: ' + role);
// }

// const user1 = { role: 'Admin' };
// const user2 = { role: null };
// const user3 = {};  // role property is undefined

// getUserRole(user1);  // Output: User role: Admin
// getUserRole(user2);  // Output: User role: Guest
// getUserRole(user3);  // Output: User role: Guest

// In this example, the Nullish Coalescing Operator(??) is used to provide a default value of 'Guest' when the role property of the user object is null or undefined.



// ✅Example 4: Using short - circuiting to prevent errors when accessing nested properties:


// const user = {
//     id: 1,
//     name: 'John',
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//     },
// };

 // Accessing nested property using short-circuiting
// const city = user.address && user.address.city;
// console.log(city);  // Output: New York

// In this example, the short - circuiting behavior of the && operator is used to prevent errors if the address property or city property is not defined.It safely assigns the value of user.address.city to the city variable only if both user.address and user.address.city exist.

    //✅ Example 5: Using short - circuiting for function fallback:


// function greet(name) {
//         name = name || getDefaultName();
//         console.log('Hello, ' + name + '!');
//     }

// function getDefaultName() {
//     console.log('Fetching default name...');
//     return 'Guest';
// }

// greet();  // Output: Fetching default name... Hello, Guest!
// greet('John');  // Output: Hello, John!

// In this example, if the name argument is falsy, the short - circuiting behavior of the || operator calls the getDefaultName() function to fetch the default name.This can be useful when providing fallback values or performing additional computations.

//✅ Logical Operators: &&, ||, ??

//   ✅  Example 6: Using logical operators for conditional assignment:

// const age = 21;
// const canDrink = age >= 18 && age <= 65;
// console.log(canDrink);  // Output: true

// In this example, the && operator is used to check if age is between 18 and 65(inclusive).The result of the expression is assigned to the canDrink variable, which evaluates to true since the condition is satisfied.

//    ✅ Example 7: Using the Nullish Coalescing Operator to handle default values:


// const username = getUserInput() ?? 'Anonymous';
// console.log('Username:', username);

// function getUserInput() {
     // Simulating user input
//     return null;
// }
// In this example, the Nullish Coalescing Operator(??) is used to assign the value of getUserInput() to the username variable.If the user input is null or undefined, the default value 'Anonymous' is used instead.







