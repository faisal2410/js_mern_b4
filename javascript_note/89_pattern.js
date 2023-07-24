//👉 The for loop is a fundamental control structure in JavaScript that allows you to iterate over a set of values for a specified number of times.It is commonly used for tasks that require repetitive execution, such as iterating over arrays or performing calculations.

//  ✅   Here's the basic syntax of a for loop:


// for (initialization; condition; increment / decrement) {
//     // Code to be executed in each iteration
// }


// Now, let's break down each part of the for loop:

// Initialization: This part is executed only once before the loop starts.It is used to initialize the loop variable(s) and is typically used to set a counter variable to an initial value.

//     Condition: This part is evaluated before each iteration.If the condition is true, the loop continues to execute; if it's false, the loop terminates. It's usually based on the loop variable(s) or other conditions.

//         Increment / Decrement: This part is executed at the end of each iteration and is used to update the loop variable(s).It increments or decrements the loop counter to control the loop's progress.

// ✅Now, let's dive into some examples of how you can use the for loop effectively with code:

// Example 1: Printing numbers from 1 to 5


// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// In this example, we initialize i with the value 1. The loop continues as long as i is less than or equal to 5. After each iteration, i is incremented by 1. The loop will output the numbers 1, 2, 3, 4, and 5.

//✅ Example 2: Iterating over an array


// const fruits = ['apple', 'banana', 'orange'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// In this example, we use the for loop to iterate over an array called fruits.We start with i equal to 0 and continue until i is less than the length of the array.The loop outputs each element of the array, one by one.

//  ✅   Example 3: Summing numbers using a for loop


// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

// console.log(sum); // Output: 55

// In this example, we use a for loop to calculate the sum of numbers from 1 to 10. We start with sum initialized to 0 and then add each number to sum in each iteration.After the loop finishes, we output the final sum.

// These examples illustrate some common use cases of the for loop in JavaScript.Remember, the for loop is versatile and can be adapted to suit a variety of scenarios.It's essential to understand the initialization, condition, and increment/decrement parts of the loop to control its behavior effectively.


// ✅Some tips and tricks to help you print different types of patterns using JavaScript for loops.These techniques will enable you to approach pattern printing more efficiently and with better control.Let's dive in:

// ✅Nested for loops: Many patterns require nested loops to control both rows and columns.The outer loop generally controls the rows, while the inner loop handles the columns or elements within each row.By properly managing the loop variables and their ranges, you can print complex patterns.

// ✅Using conditional statements: Conditional statements like if and else can be employed within the inner loop to determine which character or symbol to print at each position.You can utilize conditions based on row numbers, column numbers, or other variables to create intricate patterns.

// ✅Utilizing arithmetic operations: Arithmetic operations can help calculate the number of spaces, symbols, or digits required at each position in a pattern.You can perform addition, subtraction, multiplication, or division to determine the values to be printed.

// ✅Manipulating loop variables: You can manipulate the loop variables(i, j, etc.) within the loops to create varying patterns.Changing the increment or decrement value can alter the progression or direction of the pattern, such as printing in a reverse order.

//✅ String concatenation: Use string concatenation to build the pattern line by line within the loops.By appending characters, symbols, or spaces to a string variable in each iteration, you can form the desired pattern.

// ✅Optimizing loop conditions: Carefully define the conditions in the for loop to control the termination and continuation of the loop.Ensure that the conditions are set correctly to prevent infinite loops or unnecessary iterations.

// ✅Modularizing code: If you find common patterns or sub - patterns within a larger pattern, consider creating reusable functions.These functions can encapsulate the logic for generating those specific patterns and be called multiple times to achieve the desired overall pattern.

//✅ Experimentation and iteration: Pattern printing often requires trial and error.Don't hesitate to experiment with different loop structures, conditions, and variables. Iterate on your code, make adjustments, and observe the output to refine and improve your patterns.

// ✅Pattern symmetry: Take advantage of pattern symmetry to reduce the complexity of your code.If a pattern is symmetric horizontally or vertically, you can print only a portion of the pattern and then mirror or repeat it to create the complete pattern.

// ✅Using modulo operator: The modulo operator(%) can be helpful in determining specific positions within the pattern.You can utilize it to repeat or alternate characters or symbols based on their position in the loop.

// ✅Pattern scaling: To scale a pattern, you can introduce a scaling factor and adjust the loop variables accordingly.For example, if you want to print a larger version of a pattern, multiply the loop variables by the scaling factor.

//✅ Dynamic pattern size: Instead of hard - coding the size of the pattern, you can make it dynamic by accepting user input or using variables.This allows you to easily change the size of the pattern without modifying the code structure.

// ✅Pattern rotation: By manipulating the loop variables, you can rotate a pattern.For instance, you can change the direction of the pattern by modifying how the rows or columns are printed.

// ✅Pattern inversion: Inverting a pattern can be achieved by modifying the logic within the inner loop.Instead of printing the desired characters or symbols, print spaces or other characters when specific conditions are met.

// ✅Pattern animation: To create animated patterns, you can introduce a delay using setTimeout() or setInterval() functions between iterations of the for loops.This allows you to control the speed at which the pattern is printed on the console.

// ✅Pattern encapsulation: When dealing with complex patterns, consider breaking down the pattern generation into separate functions or modules.Each function can be responsible for generating a specific portion or component of the pattern, making the code more manageable and modular.

   
// Remember, practice makes perfect when it comes to printing patterns using JavaScript for loops.Start with simpler patterns and gradually progress to more complex ones.Challenge yourself by attempting new patterns and don't be afraid to think creatively. With time and experience, you'll become proficient at creating intricate patterns using for loops in JavaScript.



// Pattern 1: Square Pattern


// const size = 5;

// for (let i = 0; i < size; i++) {
//     let pattern = '';

//     for (let j = 0; j < size; j++) {
//         pattern += '* ';
//     }

//     console.log(pattern);
// }


// In this example, we use two nested for loops.The outer loop(i) iterates size number of times to print the rows, and the inner loop(j) prints the columns.We concatenate the asterisk(*) and a space to the pattern variable in each iteration of the inner loop.After completing the inner loop, we print the pattern variable, which represents a row of asterisks.

//     Pattern 2: Right Triangle Pattern


// const size = 5;

// for (let i = 0; i < size; i++) {
//     let pattern = '';

//     for (let j = 0; j <= i; j++) {
//         pattern += '* ';
//     }

//     console.log(pattern);
// }

// In this pattern, the number of asterisks in each row is determined by the value of i.The inner loop(j) iterates from 0 to i, and we concatenate the asterisk and a space to the pattern variable in each iteration.As i increases, the number of asterisks in each row also increases.

//     Pattern 3: Inverted Right Triangle Pattern


// const size = 5;

// for (let i = size; i > 0; i--) {
//     let pattern = '';

//     for (let j = 0; j < i; j++) {
//         pattern += '* ';
//     }

//     console.log(pattern);
// }

// This pattern is similar to the previous one, but it is inverted.The outer loop starts from size and decrements i by 1 in each iteration.The inner loop iterates from 0 to i, and we concatenate the asterisk and a space to the pattern variable.As i decreases, the number of asterisks in each row also decreases.

//     Pattern 4: Pyramid Pattern


// const size = 5;

// for (let i = 0; i < size; i++) {
//     let pattern = '';

//     for (let j = size - i; j > 1; j--) {
//         pattern += ' ';
//     }

//     for (let k = 0; k <= i; k++) {
//         pattern += '* ';
//     }

//     console.log(pattern);
// }

// This pattern creates a pyramid - like structure.The first inner loop(j) prints the required spaces before the asterisks in each row.The second inner loop(k) prints the asterisks based on the value of i.As i increases, the number of spaces decreases and the number of asterisks increases.



// Pattern 1: Left Triangle Pattern


// const size = 5;

// for (let i = 0; i < size; i++) {
//     let pattern = '';

//     for (let j = size - i; j > 0; j--) {
//         pattern += '*';
//     }

//     console.log(pattern);
// }

// In this pattern, we use two nested for loops.The outer loop(i) controls the number of rows.The inner loop(j) prints the asterisks based on the value of i.As i increases, the number of asterisks in each row decreases.Instead of adding a space after each asterisk, we concatenate only the asterisk itself to the pattern variable.

//     Pattern 2: Diamond Pattern


// const size = 5;

// for (let i = 1; i <= size; i++) {
//     let pattern = ' '.repeat(size - i) + '*'.repeat(i * 2 - 1);
//     console.log(pattern);
// }

// for (let i = size - 1; i >= 1; i--) {
//     let pattern = ' '.repeat(size - i) + '*'.repeat(i * 2 - 1);
//     console.log(pattern);
// }


// In this pattern, we first print the upper half of the diamond and then the lower half.We use the repeat() function to repeat spaces and asterisks.The number of spaces decreases as i increases, and the number of asterisks increases.After printing the upper half, we print the lower half by decrementing i.

//     Pattern 3: Number Triangle Pattern



// const size = 5;

// for (let i = 1; i <= size; i++) {
//     let pattern = '';

//     for (let j = 1; j <= i; j++) {
//         pattern += j + ' ';
//     }

//     console.log(pattern);
// }

// In this pattern, each row consists of numbers from 1 to i.The outer loop(i) controls the number of rows, and the inner loop(j) prints the numbers for each row.We concatenate j and a space to the pattern variable in each iteration of the inner loop.

//     Pattern 4: Hollow Rectangle Pattern


// const width = 8;
// const height = 5;

// for (let i = 1; i <= height; i++) {
//     let pattern = '';

//     for (let j = 1; j <= width; j++) {
//         if (i === 1 || i === height || j === 1 || j === width) {
//             pattern += '*';
//         } else {
//             pattern += ' ';
//         }
//     }

//     console.log(pattern);
// }


// This pattern creates a hollow rectangle.The outer loop(i) controls the number of rows, and the inner loop(j) controls the number of columns.In each iteration of the inner loop, we check if the current position is on the boundary of the rectangle(i is the first or last row, or j is the first or last column).If it is, we add an asterisk; otherwise, we add a space.




// Pattern 1: Pascal's Triangle


// const numRows = 5;

// for (let i = 0; i < numRows; i++) {
//     let pattern = '';

//     for (let j = 0; j <= i; j++) {
//         const coefficient = calculateCoefficient(i, j);
//         pattern += coefficient + ' ';
//     }

//     console.log(pattern);
// }

// Function to calculate the binomial coefficient
// function calculateCoefficient(n, k) {
//     if (k === 0 || k === n) {
//         return 1;
//     } else {
//         return calculateCoefficient(n - 1, k - 1) + calculateCoefficient(n - 1, k);
//     }
// }

// In this pattern, we use nested for loops to print Pascal's Triangle. Each number in the triangle is the sum of the two numbers directly above it. We calculate the binomial coefficient using a recursive function called calculateCoefficient(). The outer loop (i) controls the number of rows, and the inner loop (j) prints the numbers for each row.

// Pattern 2: Pyramid Pattern with Numbers


// const size = 5;

// for (let i = 1; i <= size; i++) {
//     let pattern = '';

//     for (let j = 1; j <= size - i; j++) {
//         pattern += ' ';
//     }

//     let num = i;
//     for (let k = 1; k <= i; k++) {
//         pattern += num + ' ';
//         num++;
//     }

//     console.log(pattern);
// }

// This pattern creates a pyramid - like structure with numbers increasing from the top.The outer loop(i) controls the number of rows.The first inner loop(j) prints the required spaces before the numbers in each row.The second inner loop(k) prints the numbers starting from i and increments num in each iteration.

//     Pattern 3: Zigzag Pattern


// const size = 5;

// for (let i = 1; i <= size; i++) {
//     let pattern = '';

//     for (let j = 1; j <= size; j++) {
//         if (j === i || j === size - i + 1) {
//             pattern += '*';
//         } else {
//             pattern += ' ';
//         }
//     }

//     console.log(pattern);
// }

// This pattern creates a zigzag pattern with asterisks.The outer loop(i) controls the number of rows, and the inner loop(j) controls the number of columns.In each iteration of the inner loop, we check if the current position corresponds to the diagonal positions(j === i or j === size - i + 1).If it does, we add an asterisk; otherwise, we add a space.

//     Pattern 4: Diamond Pattern with Alphabets


// const size = 5;
// const startCharCode = 65; // 'A'

// for (let i = 0; i < size; i++) {
//     let pattern = '';

//     for (let j = 0; j < size - i - 1; j++) {
//         pattern += ' ';
//     }

//     for (let k = 0; k <= i; k++) {
//         const charCode = startCharCode + k;
//         pattern += String.fromCharCode(charCode) + ' ';
//     }

//     console.log(pattern);
// }

// for (let i = size - 2; i >= 0; i--) {
//     let pattern = '';

//     for (let j = 0; j < size - i - 1; j++) {
    
//         pattern += ' ';
//     }

//     for (let k = 0; k <= i; k++) {
//         const charCode = startCharCode + k;
//         pattern += String.fromCharCode(charCode) + ' ';
//     }

//     console.log(pattern);
// }

// In this pattern, we use two sets of loops.The first loop(i) controls the number of rows for the upper half of the diamond.The second loop(k) prints the alphabets based on the value of i.We calculate the corresponding character code using the String.fromCharCode() method and concatenate it with a space to the pattern variable.

// After printing the upper half of the diamond, we need to print the lower half.We achieve this by using another set of loops, starting from size - 2 and decrementing i until it reaches 0. This loop structure prints the lower half of the diamond with the appropriate alphabets.

// Feel free to modify these patterns, add your own variations, and experiment with different characters or values to create interesting and unique patterns!


















