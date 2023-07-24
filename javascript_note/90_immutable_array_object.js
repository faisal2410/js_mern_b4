// 👉 working with immutable arrays in JavaScript.
//  Immutable arrays are arrays that cannot be changed once they are created.Instead of modifying the original array, you create a new array with the desired changes.This approach can be useful for functional programming and avoiding unintended side effects.Let's dive into the details with some code examples.

// ✅Creating an Immutable Array:
// To start, let's create an immutable array in JavaScript. There are a few different ways to achieve this, but one common method is to use the spread syntax (...) to create a new array based on an existing array.


// const originalArray = [1, 2, 3, 4, 5];
// const immutableArray = [...originalArray];
// console.log(immutableArray, originalArray)

// In this example, we create a new array immutableArray by spreading the elements of originalArray.Now, any modifications made to immutableArray will not affect originalArray.

// ✅Adding Elements to an Immutable Array:
// To add an element to an immutable array, you can use the spread syntax again to create a new array with the additional element.


// const originalArray = [1, 2, 3];
// const newArray = [...originalArray, 4];
// console.log(newArray); // Output: [1, 2, 3, 4]

// In this case, we create a new array newArray by spreading the elements of originalArray and adding the element 4 at the end.The original array originalArray remains unchanged.

// ✅Removing Elements from an Immutable Array:
// To remove an element from an immutable array, you can use the filter() method, which creates a new array containing only the elements that meet a specified condition.


// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.filter((element) => element !== 3);
// console.log(newArray); // Output: [1, 2, 4, 5]

// In this example, we create a new array newArray by filtering originalArray based on a condition that excludes the element 3. The resulting array does not contain the removed element, while originalArray remains unchanged.

// ✅Updating Elements in an Immutable Array:
// To update an element in an immutable array, you can use the map() method, which creates a new array by applying a function to each element.


// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.map((element) => (element === 3 ? 33 : element));
// console.log(newArray); // Output: [1, 2, 33, 4, 5]

// In this case, we create a new array newArray by mapping originalArray and replacing the element 3 with 33. The resulting array contains the updated value, while originalArray remains unchanged.

// These are some basic examples of working with immutable arrays in JavaScript.Remember, each time you want to make a change to an immutable array, you create a new array based on the existing one while applying the desired modifications.By doing so, you ensure that the original array remains unchanged, which can be helpful for maintaining the integrity of your data and avoiding unintended side effects.


// ✅Example 1: Concatenating Arrays
// To concatenate two arrays while keeping them both immutable, you can use the spread syntax to create a new array containing all the elements from both arrays.


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedArray = [...array1, ...array2];
// console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// In this example, we create a new array concatenatedArray by spreading the elements of array1 and array2.This results in a new array that contains all the elements from both arrays, while the original arrays remain unchanged.

//  ✅   Example 2: Reversing an Array
// To reverse the order of elements in an immutable array, you can use the reverse() method together with the spread syntax to create a new array with the reversed order.


// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = [...originalArray].reverse();
// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// In this example, we create a new array reversedArray by spreading the elements of originalArray and applying the reverse() method.The resulting array contains the elements in reverse order, while originalArray remains unchanged.

//   ✅  Example 3: Filtering and Mapping
// You can combine filtering and mapping operations on an immutable array to create a new array with specific elements modified or excluded.


// const originalArray = [1, 2, 3, 4, 5];
// const modifiedArray = originalArray
//     .filter((element) => element % 2 === 0) // Filter even numbers
//     .map((element) => element * 2); // Double each element

// console.log(modifiedArray); // Output: [4, 8]

// In this example, we first filter originalArray to include only the even numbers using the filter() method.Then, we use the map() method to double each element in the resulting array.The final modifiedArray contains the modified elements[4, 8], while originalArray remains unchanged.


// ✅Example 4: Slicing an Array
// To create a new array that contains a subset of elements from an existing array, you can use the slice() method.


// const originalArray = [1, 2, 3, 4, 5];
// const slicedArray = originalArray.slice(1, 4);
// console.log(slicedArray); // Output: [2, 3, 4]

// In this example, we use the slice() method on originalArray to create a new array slicedArray that contains elements from index 1 to index 3(excluding the element at index 4).The resulting array[2, 3, 4] is a subset of originalArray, while originalArray itself remains unchanged.

//   ✅  Example 5: Sorting an Array
// To sort the elements of an immutable array in a specific order, you can use the sort() method together with the spread syntax.


// const originalArray = [5, 1, 3, 4, 2];
// const sortedArray = [...originalArray].sort();
// console.log(sortedArray); // Output: [1, 2, 3, 4, 5]

// In this example, we create a new array sortedArray by spreading the elements of originalArray and applying the sort() method.The resulting array is sorted in ascending order[1, 2, 3, 4, 5], while originalArray remains unchanged.

//    ✅ Example 6: Finding the Maximum Value
// To find the maximum value in an immutable array, you can use the reduce() method.


// const originalArray = [5, 8, 3, 2, 10];
// const maxValue = originalArray.reduce((max, current) => (current > max ? current : max), originalArray[0]);
// console.log(maxValue); // Output: 10

// In this example, we use the reduce() method on originalArray to find the maximum value.The callback function compares each element with the current maximum value(max) and returns the larger value.We initialize max with the first element of the array to start the comparison.The resulting maxValue is 10, which is the maximum value in originalArray.

// ✅Example 7: Finding the Sum of Array Elements
// To find the sum of all elements in an immutable array, you can use the reduce() method.


// const originalArray = [1, 2, 3, 4, 5];
// const sum = originalArray.reduce((total, current) => total + current, 0);
// console.log(sum); // Output: 15

// In this example, we use the reduce() method on originalArray to calculate the sum of all elements.The callback function adds each element(current) to the running total(total), starting from an initial value of 0. The resulting sum is 15, which is the sum of all elements in originalArray.

//   ✅  Example 8: Checking for Element Existence
// To check if a specific element exists in an immutable array, you can use the includes() method.


// const originalArray = [1, 2, 3, 4, 5];
// const elementExists = originalArray.includes(3);
// console.log(elementExists); // Output: true

// In this example, we use the includes() method on originalArray to check if the element 3 exists in the array.The resulting value of elementExists is true, indicating that 3 is present in originalArray.

//   ✅  Example 9: Immutable Array of Objects
// Working with an immutable array of objects follows similar principles.Here's an example demonstrating how to update a specific property of an object in an immutable array.


// const originalArray = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Adam' }
// ];

// const updatedArray = originalArray.map(obj => {
//     if (obj.id === 2) {
//         return { ...obj, name: 'Janet' };
//     }
//     return obj;
// });

// console.log(updatedArray);
/*
Output:
[
  { id: 1, name: 'John' },
  { id: 2, name: 'Janet' },
  { id: 3, name: 'Adam' }
]
*/

// In this example, we have an array of objects originalArray.We use the map() method to iterate over each object in the array.If the object's id matches the desired ID (in this case, 2), we create a new object using the spread syntax ({ ...obj }) to copy all the existing properties, and then we update the name property to 'Janet'. For objects that don't match the specified ID, we simply return them as is.The resulting updatedArray contains the modified object while keeping the rest of the objects and the original array intact.


// 👉Working with immutable objects in JavaScript.

// Immutable objects are objects that cannot be changed once they are created.Instead of modifying the original object, you create a new object with the desired changes.This approach can be useful for functional programming and avoiding unintended side effects.Let's dive into the details with some code examples.

// ✅Creating an Immutable Object:
// To start, let's create an immutable object in JavaScript. One common method is to use the spread syntax (...) to create a new object based on an existing object.


// const originalObject = { name: 'John', age: 25 };
// const immutableObject = { ...originalObject };
// console.log(immutableObject)

// In this example, we create a new object immutableObject by spreading the properties of originalObject.Now, any modifications made to immutableObject will not affect originalObject.

// ✅Updating Properties of an Immutable Object:
// To update a property of an immutable object, you can use the spread syntax to create a new object with the desired changes.


// const originalObject = { name: 'John', age: 25 };
// const updatedObject = { ...originalObject, age: 26 };
// console.log(updatedObject); // Output: { name: 'John', age: 26 }


// In this case, we create a new object updatedObject by spreading the properties of originalObject and updating the age property to 26. The original object originalObject remains unchanged.

// ✅Adding Properties to an Immutable Object:
// To add a property to an immutable object, you can use the spread syntax to create a new object with the additional property.


// const originalObject = { name: 'John', age: 25 };
// const newObject = { ...originalObject, city: 'New York' };
// console.log(newObject); // Output: { name: 'John', age: 25, city: 'New York' }

// In this example, we create a new object newObject by spreading the properties of originalObject and adding the city property with the value 'New York'.The original object originalObject remains unchanged.

// ✅Nested Objects and Immutability:
// When dealing with nested objects, it's important to maintain immutability at each level. You can use the spread syntax recursively to update or add properties within nested objects.


// const originalObject = {
//     name: 'John',
//     age: 25,
//     address: {
//         street: '123 Main St',
//         city: 'New York'
//     }
// };

// Updating a nested property
// const updatedObject = {
//     ...originalObject,
//     address: {
//         ...originalObject.address,
//         city: 'San Francisco'
//     }
// };
// console.log(updatedObject)

// Adding a nested property
// const newObject = {
//     ...originalObject,
//     address: {
//         ...originalObject.address,
//         state: 'CA'
//     }
// };

// console.log(updatedObject);
// console.log(newObject);
/*
Output:
{
  name: 'John',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'San Francisco'
  }
}
*/

// console.log(newObject);
/*
Output:
{
  name: 'John',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'CA'
  }
}
*/
// In this example, we have an originalObject with a nested address object.To update the city property, we create a new object updatedObject by spreading the properties of originalObject and the nested address object.We update the city property to 'San Francisco', while keeping the rest of the properties unchanged.To add a state property to the address object, we follow the same approach by spreading the address object properties and adding the state property with the value 'CA'.By maintaining immutability at each level, we ensure that the original object and its nested objects remain unchanged.

// These are some basic examples of working with immutable objects in JavaScript.Remember, each time you want to make a change to an immutable object, you create a new object based on the existing one while applying the desired modifications.By doing so, you ensure that the original object remains unchanged, which can be helpful for maintaining data integrity and avoiding unintended side effects.


// ✅Example 1: Removing Properties from an Object
// To remove a property from an immutable object, you can use destructuring assignment to create a new object that excludes the specified property.


// const originalObject = { name: 'John', age: 25, city: 'New York' };
// const { city, ...newObject } = originalObject;
// console.log(newObject); // Output: { name: 'John', age: 25 }

// In this example, we use destructuring assignment to create a new object newObject that excludes the city property.By destructuring originalObject and omitting the city property, we effectively remove it from the resulting newObject.

//   ✅  Example 2: Freezing an Object
// To prevent any modifications to an object, you can use the Object.freeze() method.This makes the object effectively immutable by preventing the addition, deletion, or modification of its properties.


// const originalObject = { name: 'John', age: 25 };
// const frozenObject = Object.freeze(originalObject);

// frozenObject.age = 26; // Attempt to modify a property
// console.log(frozenObject); // Output: { name: 'John', age: 25 }

// In this example, we use the Object.freeze() method to freeze the originalObject, making it immutable.When we attempt to modify the age property of the frozenObject, the assignment is ignored and the property remains unchanged.

//  ✅   Example 3: Merging Objects
// To merge multiple objects into a new immutable object, you can use the spread syntax to combine their properties.


// const object1 = { name: 'John' };
// const object2 = { age: 25 };
// const object3 = { city: 'New York' };

// const mergedObject = { ...object1, ...object2, ...object3 };
// console.log(mergedObject); // Output: { name: 'John', age: 25, city: 'New York' }

// In this example, we create a new object mergedObject by spreading the properties of object1, object2, and object3.The resulting object contains all the properties from the three objects, effectively merging them into a single immutable object.









































