// 👉Ternaries instead of if/else statements in JavaScript. 

// Ternaries are a concise way of writing conditional statements, making your code more readable and compact. Let's dive into the details and explore some code examples.

// In JavaScript, an if/else statement allows you to perform different actions based on a condition. For example:


// if (condition) {
   // code to execute if the condition is true
// } else {
   // code to execute if the condition is false
// }

// Instead of using if/else statements, you can leverage the ternary operator ? to achieve the same result in a more compact way. Here's the syntax of a ternary operator:

// condition ? expression1 : expression2

// If the condition evaluates to true, expression1 is executed; otherwise, expression2 is executed. It's important to note that ternaries are expressions, meaning they return a value that can be assigned to a variable or used directly within another expression.

// Let's see some code examples to illustrate the usage of ternaries:

// ✅Example 1: Checking if a number is even or odd


// const number = 7;
// const result = number % 2 === 0 ? "even" : "odd";
// console.log(result); // Output: odd

// In this example, the ternary operator checks if the number is even by evaluating the condition number % 2 === 0. If the condition is true, the result will be "even"; otherwise, it will be "odd".

// ✅Example 2: Determining the maximum value between two numbers


// const num1 = 10;
// const num2 = 15;
// const max = num1 > num2 ? num1 : num2;
// console.log(max); // Output: 15

// Here, the ternary operator compares num1 and num2 using the condition num1 > num2. If the condition is true, num1 is assigned to max; otherwise, num2 is assigned.

// ✅Example 3: Converting a boolean value to a string


// const isActive = true;
// const status = isActive ? "active" : "inactive";
// console.log(status); // Output: active

// In this example, the ternary operator checks if isActive is true. If true, the result will be "active"; otherwise, it will be "inactive".

// Ternaries can be nested, allowing for more complex conditions and multiple possible outcomes. However, it's essential to maintain code readability and not overuse nested ternaries, as it can lead to confusion.

// That's it! Ternaries provide a concise way of writing conditional statements in JavaScript. They can make your code more elegant and easier to understand. Practice using ternaries in different scenarios to become comfortable with this powerful coding technique. If you have any further questions, feel free to ask!



// ✅Example 4: Checking the temperature range


// const temperature = 25;
// const weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cool";
// console.log(weather); // Output: Warm

// In this example, the nested ternaries are used to determine the weather based on the temperature. If the temperature is greater than 30, the result is "Hot". If the temperature is not greater than 30 but is greater than 20, the result is "Warm". Otherwise, the result is "Cool".

// ✅Example 5: Determining a student's grade


// const marks = 85;
// const grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : "D";
// console.log(grade); // Output: B

// In this example, the nested ternaries are used to determine the grade based on the marks obtained by a student. If the marks are greater than or equal to 90, the result is "A". If the marks are not greater than or equal to 90 but are greater than or equal to 80, the result is "B". If the marks are not in the previous ranges but are greater than or equal to 70, the result is "C". Otherwise, the result is "D".

// ✅Example 6: Checking user roles


// const isAdmin = true;
// const isModerator = false;
// const accessLevel = isAdmin ? "Admin" : isModerator ? "Moderator" : "User";
// console.log(accessLevel); // Output: Admin

// In this example, the nested ternaries are used to determine the accessLevel based on the user's role. If the user is an isAdmin, the result is "Admin". If the user is not an isAdmin but is a isModerator, the result is "Moderator". Otherwise, the result is "User".



// ✅Example 7: Checking the time of day


// const hour = 17;
// const timeOfDay = hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";
// console.log(timeOfDay); // Output: Afternoon

// In this example, the nested ternaries are used to determine the timeOfDay based on the hour value. If the hour is less than 12, the result is "Morning". If the hour is not less than 12 but is less than 18, the result is "Afternoon". Otherwise, the result is "Evening".

// ✅Example 8: Checking if a number is positive, negative, or zero


// const number = 0;
// const sign = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
// console.log(sign); // Output: Zero

// In this example, the nested ternaries are used to determine the sign based on the number. If the number is greater than 0, the result is "Positive". If the number is not greater than 0 but is less than 0, the result is "Negative". Otherwise, the result is "Zero".

// ✅Example 9: Checking if a string is uppercase, lowercase, or mixed case


// const str = "HelloWorld";
// const caseType = str === str.toUpperCase() ? "Uppercase" : str === str.toLowerCase() ? "Lowercase" : "Mixed case";
// console.log(caseType); // Output: Mixed case

// In this example, the nested ternaries are used to determine the caseType based on the str value. If the str is equal to its uppercase version, the result is "Uppercase". If the str is not equal to its uppercase version but is equal to its lowercase version, the result is "Lowercase". Otherwise, the result is "Mixed case".








