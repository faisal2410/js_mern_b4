// 👉Grouping operator: ()

// The grouping operator ( ) is used to override the default precedence and explicitly define the order of operations.

// let result = (2 + 3) * 4;
// console.log(result); // Output: 20



// 👉Member access operator: . []

// The member access operator . and [] are used to access properties or methods of an object.

// let person = {
//   name: 'John',
//   age: 30
// };
// console.log(person.name); // Output: John
// console.log(person['age']); // Output: 30

// 👉Computed member access operator: []

// The computed member access operator [] is used to access object properties dynamically.

// let prop = 'name';
// let person = {
//   name: 'John',
//   age: 30
// };
// console.log(person[prop]); // Output: John

// 👉Function call operator: ()

// The function call operator () is used to invoke a function.

// function sayHello(name) {
//   console.log('Hello, ' + name + '!');
// }
// sayHello('Alice'); // Output: Hello, Alice!



// 👉new operator

// The new operator is used to create an instance of an object or to call a constructor function.

// function Person(name) {
//   this.name = name;
// }
// let john = new Person('John');
// console.log(john.name); // Output: John


// 👉Increment and decrement operators: ++ --

// The increment ++ and decrement -- operators are used to increase or decrease the value of a variable by one.

// let count = 5;
// count++;
// console.log(count); // Output: 6

// 👉Logical NOT operator: !

// The logical NOT operator ! is used to negate a boolean value.

// let isTrue = true;
// let isFalse = !isTrue;
// console.log(isFalse); // Output: false

// 👉Multiplication and division operators: * / %

// The multiplication *, division /, and modulus % operators perform arithmetic operations.

// let product = 5 * 3;
// console.log(product); // Output: 15

// let quotient = 10 / 2;
// console.log(quotient); // Output: 5

// let remainder = 10 % 3;
// console.log(remainder); // Output: 1



// 👉Addition and subtraction operators: + -

// The addition + and subtraction - operators perform arithmetic operations.

// let sum = 2 + 3;
// console.log(sum); // Output: 5

// let difference = 7 - 4;
// console.log(difference); // Output: 3


// 👉Relational operators: < > <= >=

// The relational operators <, >, <=, and >= compare the values of two operands.

// console.log(5 < 10); // Output: true
// console.log(8 >= 8); // Output: true



// 👉Equality operators: == !=

// The equality operators == and != compare the values of two operands for equality, performing type coercion if necessary.

// console.log(5 == '5'); // Output: true
// console.log(8 != '8'); // Output: false

// 👉Strict equality operators: === !==

// The strict equality operators === and !== compare the values of two operands without performing type coercion.

// console.log(5 === '5'); // Output: false
// console.log(8 !== '8'); // Output: true

// 👉Logical AND operator: &&

// The logical AND operator && returns true if both operands are true, and false otherwise.

// console.log(true && false); // Output: false
// console.log(5 > 3 && 2 < 4); // Output: true

// 👉Logical OR operator: ||

// The logical OR operator || returns true if either of the operands is true, and false otherwise.

// console.log(true || false); // Output: true
// console.log(5 > 3 || 2 > 4); // Output: true

// 👉Conditional operator: ?:

// The conditional operator ?: is a shorthand for an if-else statement. It returns one of two expressions based on a condition.

// let age = 20;
// let message = (age >= 18) ? 'You are an adult' : 'You are a minor';
// console.log(message); // Output: You are an adult

// 👉Assignment operators: = += -= *= /= %=

// Assignment operators are used to assign values to variables and perform arithmetic operations with assignment.

// let x = 5;
// x += 3; // Equivalent to: x = x + 3;
// console.log(x); // Output: 8

// let y = 10;
// y -= 2; // Equivalent to: y = y - 2;
// console.log(y); // Output: 8








// ✅Grouping operator: ()

// let result = (2 + 3) * 4;
// console.log(result); // Output: 20

// ✅Member access operator: . []

// let person = {
//   name: 'John',
//   age: 30
// };
// console.log(person.name); // Output: John
// console.log(person['age']); // Output: 30

// ✅Computed member access operator: []

// let prop = 'name';
// let person = {
//   name: 'John',
//   age: 30
// };
// console.log(person[prop]); // Output: John

// ✅Function call operator: ()


// function sayHello(name) {
//   console.log('Hello, ' + name + '!');
// }
// sayHello('Alice'); // Output: Hello, Alice!

// ✅new operator

// function Person(name) {
//   this.name = name;
// }
// let john = new Person('John');
// console.log(john.name); // Output: John

// ✅Increment and decrement operators: ++ --

// let count = 5;
// count++;
// console.log(count); // Output: 6

// ✅Logical NOT operator: !

// let isTrue = true;
// let isFalse = !isTrue;
// console.log(isFalse); // Output: false

// ✅Multiplication and division operators: * / %

// let product = 5 * 3;
// console.log(product); // Output: 15

// let quotient = 10 / 2;
// console.log(quotient); // Output: 5

// let remainder = 10 % 3;
// console.log(remainder); // Output: 1

// ✅Addition and subtraction operators: + -

// let sum = 2 + 3;
// console.log(sum); // Output: 5

// let difference = 7 - 4;
// console.log(difference); // Output: 3

// ✅Relational operators: < > <= >=

// console.log(5 < 10); // Output: true
// console.log(8 >= 8); // Output: true

// ✅Equality operators: == !=

// console.log(5 == '5'); // Output: true
// console.log(8 != '8'); // Output: false

// ✅Strict equality operators: === !==

// console.log(5 === '5'); // Output: false
// console.log(8 !== '8'); // Output: true

// ✅Logical AND operator: &&

// console.log(true && false); // Output: false
// console.log(5 > 3 && 2 < 4); // Output: true

// ✅Logical OR operator: ||

// console.log(true || false); // Output: true
// console.log(5 > 3 || 2 > 4); // Output: true

// ✅Conditional operator: ?:

// let age = 20;
// let message = (age >= 18) ? 'You are an adult' : 'You are a minor';
// console.log(message); // Output: You are an adult

// ✅Assignment operators: = += -= *= /= %=

// let x = 5;
// x += 3; // Equivalent to: x = x + 3;
// console.log(x); // Output: 8

// let y = 10;
// y -= 2; // Equivalent to: y = y - 2;
// console.log(y); // Output:




// ✅✅👉👉 Operator Precedence

// ✅Precedence of Multiplication and Addition Operators:

// let result = 5 + 2 * 3;
// console.log(result); // Output: 11

// In this example, the multiplication * operator has higher precedence than the addition + operator. So, 2 * 3 is evaluated first, resulting in 6. Then, 5 + 6 is performed, giving us the output 11.

// ✅Associativity of Addition Operator:

// let result = 10 + 5 + 2;
// console.log(result); // Output: 17

// In this example, the addition + operator has left-to-right associativity. So, the expression is evaluated from left to right: 10 + 5 is performed first, resulting in 15. Then, 15 + 2 is performed, giving us the output 17.


// ✅Precedence and Associativity of Comparison and Logical Operators:

// let result = 10 > 5 && 5 < 8 || 2 !== 4;
// console.log(result); // Output: true

// In this example, the comparison operators (>, <, !==) have higher precedence than the logical operators (&&, ||). The expression is evaluated as follows:

// 10 > 5 evaluates to true.
// 5 < 8 evaluates to true.
// 2 !== 4 evaluates to true.
// The logical AND && operator has higher precedence than the logical OR || operator, so true && true is evaluated to true.
//     Finally, true || true is evaluated to true.


// ✅Precedence of Assignment Operators:
// javascript
// Copy code
// let x = 5;
// let y = 10;
// let z = 15;

// x += y *= z;
// console.log(x); // Output: 155

// In this example, the compound assignment operator *= has higher precedence than the addition assignment operator +=. So, y *= z is evaluated first, resulting in 150. Then, x += 150 is performed, giving us the output 155.

// These examples demonstrate how the precedence and associativity of operators affect the evaluation order of expressions in real-life scenarios. Understanding these concepts is crucial for writing correct and predictable code.







// ✅Precedence of Exponentiation and Division Operators:

// let result = 4 ** 2 / 8;
// console.log(result); // Output: 2
// In this example, the exponentiation ** operator has higher precedence than the division / operator. So, 4 ** 2 is evaluated first, resulting in 16. Then, 16 / 8 is performed, giving us the output 2.

// ✅Associativity of Assignment Operators:

// let x = 5;
// let y = 10;

// x += y += 3;
// console.log(x); // Output: 18
// console.log(y); // Output: 13

// In this example, both the addition assignment operator += and the compound assignment operator += have right-to-left associativity. The expression is evaluated as follows:

// y += 3 is evaluated first, resulting in y = y + 3 = 13.
// Then, x += 13 is performed, resulting in x = x + 13 = 18.

// ✅Precedence of Bitwise Operators:

// let result = 10 & 6 ^ 2;
// console.log(result); // Output: 8

// In this example, the bitwise AND & operator has higher precedence than the bitwise XOR ^ operator. So, 10 & 6 is evaluated first, resulting in 2. Then, 2 ^ 2 is performed, giving us the output 8.


// ✅Precedence of Ternary Operator:

// let age = 25;
// let message = (age >= 18) ? 'You are an adult' : 'You are a minor';
// console.log(message); // Output: You are an adult

// This example demonstrates the precedence of the ternary operator ?:. If the condition age >= 18 is true, the value 'You are an adult' is assigned to the message variable. Otherwise, the value 'You are a minor' is assigned.

// ✅Precedence and Associativity of Logical Operators:

// let result = true || false && true;
// console.log(result); // Output: true
// In this example, the logical AND && operator has higher precedence than the logical OR || operator. So, false && true is evaluated first, resulting in false. Then, true || false is performed, giving us the output true.

// These examples provide further illustrations of operator precedence and associativity in practical scenarios. Understanding these concepts is essential for writing correct and efficient code in JavaScript.




// ✅Precedence of Bitwise Shift Operators:

// let result = 16 >> 2 + 1;
// console.log(result); // Output: 2

// In this example, the addition + operator has higher precedence than the right shift >> operator. So, 2 + 1 is evaluated first, resulting in 3. Then, 16 >> 3 is performed, giving us the output 2.

// ✅Associativity of Assignment Operators:

// let x = 5;
// let y = 10;

// x += y -= 3;
// console.log(x); // Output: 12
// console.log(y); // Output: 7

// In this example, both the subtraction assignment operator -= and the compound assignment operator += have right-to-left associativity. The expression is evaluated as follows:

// y -= 3 is evaluated first, resulting in y = y - 3 = 7.
// Then, x += 7 is performed, resulting in x = x + 7 = 12.


// ✅Precedence of Bitwise XOR and Logical Operators:

// let result = true ^ false || true;
// console.log(result); // Output: true

// In this example, the bitwise XOR ^ operator has higher precedence than the logical OR || operator. So, true ^ false is evaluated first, resulting in true. Then, true || true is performed, giving us the output true.

// ✅Precedence of Conditional (Ternary) Operator:

// let number = 15;
// let result = number > 10 ? 'Greater than 10' : number < 10 ? 'Less than 10' : 'Equal to 10';
// console.log(result); // Output: Greater than 10

// This example demonstrates the precedence of multiple conditional (ternary) operators ?:. It checks if number is greater than 10, less than 10, or equal to 10, and assigns the corresponding message to the result variable.

// ✅Precedence and Associativity of Logical NOT and Logical OR Operators:

// let result = !true || false;
// console.log(result); // Output: false
// In this example, the logical NOT ! operator has higher precedence than the logical OR || operator. So, !true is evaluated first, resulting in false. Then, false || false is performed, giving us the output false.

// These examples provide further insights into operator precedence and associativity, covering all the operators in JavaScript. Understanding these concepts is crucial for writing effective and error-free code.




// 🏆Final Example explaining associativity and precedence in precedence table:

// 👀 Home work :

// let a = 2;
// let b = 3;
// let c = 4;
// let d = 5;

// let result = a * b + c / d % (a + b) - c;
// console.log(result); // Output: 5.2


// In this example, the expression a * b + c / d % (a + b) - c involves various operators with different precedence levels and associativity.

//     Here's the breakdown of how the expression is evaluated:

// The parentheses(a + b) are evaluated first.Since a = 2 and b = 3, (a + b) results in 5.

// The modulus % operator has higher precedence than both the multiplication * and division / operators.So, c / d % (a + b) is evaluated next.

//     c / d is performed, resulting in 0.8(4 divided by 5).
// 0.8 % 5 is evaluated, which gives us 0.8 as the remainder of dividing 0.8 by 5.
// The multiplication * operator has higher precedence than the addition + operator.So, a * b is evaluated next.

// 2 * 3 is performed, resulting in 6.
// The addition + operator is evaluated next.

// 6 + 0.8 is performed, resulting in 6.8.
//     Finally, the subtraction - operator is evaluated.

// 6.8 - c is performed, resulting in 6.8 - 4, which gives us the final result 2.8.
//     Therefore, the overall output of the expression a * b + c / d % (a + b) - c is 5.2.

// This example showcases the importance of understanding operator precedence and associativity to accurately evaluate complex expressions.By knowing the rules, you can determine the order in which operations are performed, ensuring the desired results in your code.

















