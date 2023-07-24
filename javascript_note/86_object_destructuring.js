//👉 Object destructuring is a powerful feature that allows you to extract values from objects and assign them to variables in a concise and flexible manner.Let's dive into the details with some code examples.

// ✅Basic Object Destructuring:

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
// };

// Destructuring assignment
// const { firstName, lastName, age } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(age);       // Output: 30

// In the example above, we have an object called person with properties like firstName, lastName, and age.Using object destructuring, we assign these properties to variables with the same names.This way, we can directly access the values of those properties using the new variables.

//✅ Assigning to Different Variable Names:


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
// };

// Destructuring assignment with different variable names
// const { firstName: fName, lastName: lName, age: personAge } = person;

// console.log(fName);       // Output: John
// console.log(lName);       // Output: Doe
// console.log(personAge);   // Output: 30

// In this example, we use object destructuring to assign the values of firstName, lastName, and age to variables with different names(fName, lName, and personAge respectively).

// Default Values:

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
// };

// ✅Destructuring assignment with default values

// const { firstName, lastName, age = 30 } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(age);       // Output: 30 (default value)

// Here, we assign a default value of 30 to the age property in case it doesn't exist in the person object. If the age property is present, its value will be assigned; otherwise, the default value will be used.

// ✅Nested Object Destructuring:


// const person = {
//     name: {
//         firstName: 'John',
//         lastName: 'Doe',
//     },
//     age: 30,
// };

// Destructuring assignment for nested objects
// const { name: { firstName, lastName }, age } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(age);       // Output: 30

// In this example, we have a nested object structure where the name property itself contains firstName and lastName properties.Using object destructuring, we can access these nested properties directly.

// ✅Rest Syntax:

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     country: 'USA',
// };

// Destructuring assignment with rest syntax
// const { firstName, lastName, ...rest } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(rest);      // Output: { age: 30, country: 'USA' }

// Here, we use the rest syntax(...rest) to gather all remaining properties into a new object called rest.This way, we can easily access a subset of properties while keeping the remaining properties in a separate object.


// Here are some additional details about object destructuring in JavaScript:

// ✅Destructuring Parameters:
// Object destructuring can also be used with function parameters, allowing you to extract specific values from an object directly in the function signature.

// function printPersonDetails({ firstName, lastName }) {
//     console.log(`First Name: ${firstName}`);
//     console.log(`Last Name: ${lastName}`);
// }

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
// };

// printPersonDetails(person);

// In this example, the printPersonDetails function takes an object parameter and uses object destructuring to extract the firstName and lastName properties directly.This way, we can pass the person object to the function and only the required properties will be used within the function body.

// ✅Computed Property Names:
// With object destructuring, you can use computed property names as well.It allows you to assign values to variables dynamically based on the property name.

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
// };


// const propertyName = 'age';
// const { [propertyName]: personAge } = person;

// console.log(personAge); // Output: 30

// In this example, we define a variable called propertyName with a value of 'age'.By enclosing propertyName in square brackets within the destructuring assignment, we can dynamically assign the value of the age property to the personAge variable.

// ✅Destructuring Arrays of Objects:
// Object destructuring can be combined with array destructuring to handle arrays of objects.

// const users = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Alice', lastName: 'Smith' },
//     { firstName: 'Bob', lastName: 'Johnson' },
// ];

// for (const { firstName, lastName } of users) {
//     console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
// }

// In this example, we have an array of user objects.By using object destructuring within a for...of loop, we can directly extract the firstName and lastName properties from each object in the array and use them within the loop body.

// ✅Destructuring with Default Values:
// Object destructuring also supports default values, which are assigned to variables when the corresponding property is undefined.

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
// };


// const { firstName = 'Unknown', lastName = 'Unknown', age = 30 } = person;

// console.log(firstName); // Output: John (from the person object)
// console.log(lastName);  // Output: Doe (from the person object)
// console.log(age);       // Output: 30 (default value since age doesn't exist in the person object)

// In this example, if any of the properties(firstName, lastName, or age) are not present in the person object, the variables will be assigned the corresponding default values.

// Object destructuring provides a concise and convenient way to extract and assign values from objects in JavaScript.By using it effectively, you can simplify your code and make it more readable.








