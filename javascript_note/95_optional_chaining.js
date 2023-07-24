//  👉Optional Chaining in JavaScript

// Optional Chaining is a feature introduced in ECMAScript 2020(ES2020) that allows you to safely access properties and methods of an object without worrying about the existence of intermediate properties or the object itself.It helps prevent errors when accessing nested properties on an object that may be null or undefined.

// The syntax for Optional Chaining is the question mark(?) followed by a dot(.) operator.It can be placed between any two property accesses in a chain.Here's an example to illustrate its usage:


// const person = {
//     name: 'John',
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         zipCode: '10001'
//     }
// };

 // Accessing properties without Optional Chaining
// const city = person.address.city; // 'New York'
// const country = person.address.country; // TypeError: Cannot read property 'country' of undefined

 // Accessing properties with Optional Chaining
// const city = person?.address?.city; // 'New York'
// const country = person?.address?.country; // undefined


// In the first set of code, we try to access the city property of the address object using the regular dot notation.It works as expected and returns 'New York'.However, when we try to access the non - existent country property, it throws a TypeError because the address object is defined, but country is not.

// In the second set of code, we use Optional Chaining to access the properties.The question mark(?) after person checks if the person object is defined before proceeding.Similarly, the question mark after address checks if the address property exists on the person object.If any intermediate property is null or undefined, the result will be undefined instead of throwing an error.

// Optional Chaining is particularly useful when dealing with nested objects and when you're unsure if all properties in the chain exist. It simplifies the code and reduces the need for explicit null or undefined checks.

// ✅Additionally, you can also use Optional Chaining with function calls.Here's an example:


// const calculator = {
//     add: (a, b) => a + b,
//     multiply: (a, b) => a * b
// };

// const result = calculator?.add?.(3, 5);
// console.log(result); // 8

// In this example, we use Optional Chaining to safely call the add function on the calculator object.If calculator or add is undefined, the code will gracefully handle it without throwing an error.

//     That's the basic idea behind Optional Chaining in JavaScript. It provides a concise way to handle property access on nested objects, reducing the risk of errors when dealing with potentially missing or undefined values.



// ✅Example 1: Accessing array elements


// const data = {
//     items: [
//         { id: 1, name: 'Item 1' },
//         { id: 2, name: 'Item 2' },
//         { id: 3, name: 'Item 3' }
//     ]
// };

 // Accessing array elements without Optional Chaining
// const firstItem = data.items[0]; // { id: 1, name: 'Item 1' }
// const fourthItem = data.items[3]; // undefined

 // Accessing array elements with Optional Chaining
// const firstItem = data.items?.[0]; // { id: 1, name: 'Item 1' }
// const fourthItem = data.items?.[3]; // undefined

// In this example, we have an object data that contains an array items.Without Optional Chaining, accessing an array element that doesn't exist results in undefined or an out-of-bounds error. With Optional Chaining, the ?. operator ensures that accessing non-existent array elements returns undefined instead of throwing an error.

// ✅Example 2: Checking method existence


// const obj = {
//     greet: () => console.log('Hello, World!')
// };

 // Checking method existence without Optional Chaining
// if (obj.greet) {
//     obj.greet(); // 'Hello, World!'
// }

 // Checking method existence with Optional Chaining
// obj.greet?.(); // 'Hello, World!'

// In this example, we have an object obj with a greet method.Without Optional Chaining, we need to manually check if the method exists before calling it to avoid errors.With Optional Chaining, the?.operator handles the check internally and safely calls the method if it exists.

//    ✅ Example 3: Chaining multiple optional properties


// const user = {
//     name: 'John',
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         zipCode: '10001'
//     },
//     job: {
//         title: 'Developer',
//         company: 'ABC Corp'
//     }
// };

// Accessing nested properties without Optional Chaining
// const jobTitle = user.job && user.job.title; // 'Developer'
// const companyName = user.job && user.job.company; // 'ABC Corp'

 // Accessing nested properties with Optional Chaining
// const jobTitle = user?.job?.title; // 'Developer'
// const companyName = user?.job?.company; // 'ABC Corp'

// In this example, we have an object user that contains nested properties.Without Optional Chaining, accessing nested properties requires multiple checks to avoid errors.With Optional Chaining, the?.operator handles the checks for us, resulting in cleaner and more concise code.


// ✅Example 1: Accessing properties of an array of objects


// const users = [
//     { id: 1, name: 'John', email: 'john@example.com' },
//     { id: 2, name: 'Jane', email: 'jane@example.com' },
//     { id: 3, name: 'Alex' }
// ];

 // Accessing properties without Optional Chaining
// const firstUserName = users[0].name; // 'John'
// const secondUserEmail = users[1].email; // 'jane@example.com'
// const thirdUserEmail = users[2].email; // TypeError: Cannot read property 'email' of undefined

 // Accessing properties with Optional Chaining
// const firstUserName = users?.[0]?.name; // 'John'
// const secondUserEmail = users?.[1]?.email; // 'jane@example.com'
// const thirdUserEmail = users?.[2]?.email; // undefined

// In this example, we have an array of user objects.Without Optional Chaining, accessing properties of array elements can lead to errors if the property does not exist.With Optional Chaining, we can safely access the properties, and if any intermediate property or object is missing, it gracefully returns undefined.

//    ✅ Example 2: Chaining methods and accessing nested properties


// const user = {
//     id: 1,
//     name: 'John',
//     getProfile: function () {
//         return {
//             email: 'john@example.com',
//             address: {
//                 city: 'New York',
//                 zipCode: '10001'
//             }
//         };
//     }
// };

 // Accessing properties and calling methods without Optional Chaining
// const userEmail = user.getProfile().email; // 'john@example.com'
// const userCity = user.getProfile().address.city; // 'New York'

 // Accessing properties and calling methods with Optional Chaining
// const userEmail = user.getProfile?.().email; // 'john@example.com'
// const userCity = user.getProfile?.().address?.city; // 'New York'

// In this example, we have an object user with a getProfile method that returns an object containing user details.Without Optional Chaining, accessing nested properties and calling methods can result in errors if any intermediate property or object is missing.With Optional Chaining, we can safely access the properties and call methods, and if any intermediate property or object is missing, it gracefully returns undefined.

//   ✅  Example 3: Checking and calling optional callback functions


// const button = document.querySelector('#myButton');

 // Checking and calling a callback function without Optional Chaining
// if (button && button.addEventListener) {
//     button.addEventListener('click', handleClick);
// }

 // Checking and calling a callback function with Optional Chaining
// button?.addEventListener?.('click', handleClick);

// In this example, we have a button element selected from the DOM.Without Optional Chaining, we need to explicitly check if the button element and the addEventListener method exist before adding an event listener.With Optional Chaining, we can directly call the addEventListener method without worrying about null or undefined values, resulting in more concise code.



// ✅Example 4: Optional Chaining with conditional logic


// const user = {
//     name: 'John',
//     address: null
// };

 // Checking if address is available and displaying a message
// if (user.address && user.address.city) {
//     console.log(`User lives in ${user.address.city}`);
// } else {
//     console.log('User address is not available');
// }

 // Optional Chaining with conditional logic
// console.log(`User lives in ${user.address?.city ?? 'unknown'}`);

// In this example, we have an object user with a name property and an address property that may be null.Without Optional Chaining, we need to perform explicit checks for each property to avoid errors.With Optional Chaining and the nullish coalescing operator(??), we can simplify the code and provide a fallback value in case the property or object is null or undefined.

//  ✅   Example 5: Optional Chaining with dynamic property access


// const user = {
//     name: 'John',
//     getAddress: function () {
//         return {
//             city: 'New York',
//             zipCode: '10001'
//         };
//     }
// };

// const property = 'zipCode';

 // Accessing dynamic property without Optional Chaining
// const dynamicValue = user.getAddress()[property]; // '10001'

 // Accessing dynamic property with Optional Chaining
// const dynamicValue = user.getAddress?.()?.[property]; // '10001'

// In this example, we have an object user with a getAddress method that returns an address object.We also have a dynamic property stored in the property variable.Without Optional Chaining, accessing the dynamic property requires multiple checks.With Optional Chaining, we can handle the dynamic property access in a concise manner while also handling the possibility of null or undefined values.

//  ✅   Example 6: Optional Chaining with function calls


// const mathUtils = {
//     add: (a, b) => a + b,
//     multiply: (a, b) => a * b
// };

// const operation = 'add';

 // Calling a dynamic function without Optional Chaining
// const result = mathUtils[operation](2, 3); // 5

 // Calling a dynamic function with Optional Chaining
// const result = mathUtils?.[operation]?.(2, 3); // 5

// In this example, we have an object mathUtils with dynamic functions add and multiply.We also have a dynamic function name stored in the operation variable.Without Optional Chaining, accessing and calling the dynamic function requires additional checks.With Optional Chaining, we can safely call the dynamic function and handle the possibility of null or undefined values.








