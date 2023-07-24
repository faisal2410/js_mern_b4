// 👉String literals are used to represent text or string values in JavaScript code.They are enclosed within either single quotes('') or double quotes("").Here are some examples:


// ✅Using single quotes
// let message1 = 'Hello, world!';
// console.log(message1); // Output: Hello, world!

// ✅Using double quotes
// let message2 = "Welcome to JavaScript!";
// console.log(message2); // Output: Welcome to JavaScript!

// Both single quotes and double quotes can be used interchangeably, and the choice between them depends on your preference.However, it's important to be consistent in your codebase to maintain readability.

// String literals can contain any character, including numbers, special characters, and even escape sequences.Let's take a look at a few examples:


// ✅String with numbers and special characters

// let alphanumeric = 'abc123!@#';
// console.log(alphanumeric); // Output: abc123!@#

// ✅String with escape sequences
// let escapedString = 'This is a \'quoted\' string';
// console.log(escapedString); // Output: This is a 'quoted' string

// New line and tab characters
// let formattedText = 'First line\n\tIndented line';
// console.log(formattedText);
// Output:
// First line
//     Indented line

// In the first example, we have a string that includes alphanumeric characters and special characters.The second example demonstrates the use of escape sequences, where we escape the single quotes within the string.The third example shows how you can include new lines and tabs using the escape sequences \n and \t respectively.

// ✅String literals also support string interpolation, which allows you to embed expressions or variables within the string using the ${ } syntax.Here's an example:


// let name = 'John';
// let greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, John!

// In this example, we use backticks() to define a template literal.Within the template literal, we use ${ }to embed thename` variable's value into the string.


//✅ Concatenation:
// You can concatenate strings using the + operator.Here's an example:


// let firstName = 'John';
// let lastName = 'Doe';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName); // Output: John Doe

// In this example, we concatenate the firstName, a space, and the lastName to form the fullName string.

//   ✅  Length:
// You can determine the length of a string using the length property.It returns the number of characters in the string.Here's an example:


// let message = 'Hello, world!';
// console.log(message.length); // Output: 13
// The length property in this example returns the value 13 because the message string has 13 characters.

// ✅Accessing Characters:
// You can access individual characters within a string by using square brackets and the character's index. Remember that JavaScript uses zero-based indexing. Here's an example:


// let message = 'Hello, world!';
// console.log(message[7]); // Output: w

// In this example, message[7] retrieves the character at index 7, which is 'w'.

// ✅String Methods:
// JavaScript provides several built -in methods to manipulate and extract information from strings.Here are a few commonly used ones:


// let text = 'Hello, world!';

// console.log(text.toUpperCase()); // Output: HELLO, WORLD!
// console.log(text.toLowerCase()); // Output: hello, world!
// console.log(text.indexOf('world')); // Output: 7
// console.log(text.includes('Hello')); // Output: true
// console.log(text.slice(7, 12)); // Output: world

// In this example, we use the toUpperCase() and toLowerCase() methods to convert the string to uppercase and lowercase, respectively.The indexOf() method returns the index of the first occurrence of the specified substring, while the includes() method checks if a substring is present in the string.Lastly, the slice() method extracts a portion of the string based on the specified start and end indexes.

// ✅String Escape Sequences:
// Apart from the escape sequences mentioned earlier, there are a few more commonly used ones:


// let escapedString = 'This string contains a backslash: \\';
// console.log(escapedString); // Output: This string contains a backslash: \

// let quoteString = 'He said, "Hello!"';
// console.log(quoteString); // Output: He said, "Hello!"
// In the first example, we use a double backslash(\\) to include a literal backslash in the string.In the second example, we use double quotes to define the string and single quotes within the string to include the spoken words.

// These are some additional concepts and techniques related to string literals in JavaScript.By combining string manipulation methods, string interpolation, and other programming constructs, you can perform powerful string operations.Feel free to experiment with these concepts and let me know if you have any more questions!









