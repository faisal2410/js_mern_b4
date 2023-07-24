//👉 The concept of asynchronous JavaScript and how to use the async / await syntax.

// Asynchronous programming is a way of writing non - blocking code in JavaScript, allowing your programs to perform tasks concurrently and efficiently.

// In JavaScript, we commonly encounter situations where we need to perform tasks that take some time to complete, such as making API calls, reading files, or performing time - consuming computations.Traditionally, JavaScript used callbacks and promises to handle these asynchronous operations.While they are still viable options, async / await is a more modern and intuitive approach to deal with asynchronous code.

// The async / await syntax is built on top of promises and provides a more synchronous - looking code structure, making it easier to read and reason about asynchronous operations.It allows you to write asynchronous code that looks similar to synchronous code, without blocking the execution of other tasks.

//   ✅  Let's go through an example to see how async/await works:


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function fetchData() {
//     console.log('Fetching data...');
//     await delay(2000); // Simulating an asynchronous operation

//  Simulating API response
//     const data = { id: 1, name: 'John Doe' };
//     return data;
// }

// async function main() {
//     console.log('Start');
//     const result = await fetchData();
//     console.log('Received data:', result);
//     console.log('End');
// }

// main();

// In the code above, we have a function called delay that returns a promise which resolves after a specified time delay.We use this function to simulate an asynchronous operation.

// The fetchData function is declared with the async keyword, which indicates that it's an asynchronous function. Inside this function, we log a message and then await the delay function for 2000 milliseconds (2 seconds). This simulates some async work that takes time. After the delay, we create an object representing the data we fetched and return it.

// The main function is also declared as async.Within this function, we log 'Start', and then we await the fetchData function. This means that the execution of main will pause until the promise returned by fetchData is resolved.Once the promise is resolved, the result is assigned to the result variable.We then log the received data and 'End' to the console.

// To execute this code, we call main().

// When you run this code, you'll see that the messages are logged in the expected order: 'Start' is logged first, then 'Fetching data...', followed by 'Received data: ' along with the fetched data, and finally 'End'. This demonstrates the sequential execution of asynchronous code with the help of async/await.

// The await keyword is used to pause the execution of the function until the awaited promise is resolved.It can only be used within an async function. When await is used, the control is handed back to the event loop, allowing other tasks to continue until the awaited promise resolves.Once the promise is resolved, the execution resumes from where it left off.

// I hope this explanation helps you understand the concept of asynchronous JavaScript and how to use async / await for writing more readable and manageable asynchronous code.Let me know if you have any further questions!


//✅ Example 1: Fetching Data from an API


// async function fetchUserData(userId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch user data');
//         }

//         const userData = await response.json();
//         return userData;
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function displayUserData(userId) {
//     const userData = await fetchUserData(userId);
//     console.log('User data:', userData);
// }

// displayUserData(1);

// In this example, we have an async function fetchUserData that fetches user data from an API using the fetch function. We handle any errors that may occur during the fetch operation using a try/catch block. If the response is not successful (e.g., a 404 error), we throw an error.

// The fetched JSON response is then extracted using response.json() and assigned to the userData variable.Finally, we return the userData.

// The displayUserData function calls fetchUserData and logs the returned user data to the console.

//✅ Example 2: Parallel Execution of Async Functions


// async function getUserData(userId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const userData = await response.json();
//     return userData;
// }

// async function getPostData(postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const postData = await response.json();
//     return postData;
// }

// async function main() {
//     const userId = 1;
//     const postId = 10;

//     const [userData, postData] = await Promise.all([
//         getUserData(userId),
//         getPostData(postId)
//     ]);

//     console.log('User data:', userData);
//     console.log('Post data:', postData);
// }

// main();

// In this example, we have two async functions, getUserData and getPostData, which fetch user data and post data respectively from an API.

// The main function demonstrates parallel execution of these two functions using Promise.all.We pass an array of promises to Promise.all, and it returns a single promise that resolves with an array of the resolved values from all the input promises.

// By using await Promise.all([...]), we can wait for both getUserData and getPostData to complete in parallel.Once both promises are resolved, we destructure the resulting array into userData and postData, and then log them to the console.

// ✅Example 3: Error Handling with Async / Await


// async function performTask() {
//     try {
//         await fetchData();
//         await processResult();
//     } catch (error) {
//         console.error('An error occurred:', error);
//     } finally {
//         console.log('Task completed.');
//     }
// }

// async function fetchData() {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     const data = await response.json();
//     console.log('Fetched data:', data);
// }

// async function processResult() {

//  Some processing code
//     throw new Error('Error during processing');
// }

// performTask();

// In this example, we have an async function performTask that calls fetchData and processResult sequentially.We wrap the function calls in a try/catch block to handle any errors that may occur during the execution.

// The fetchData function fetches data from an API similar to the previous examples, and throws an error if the response is not successful.

// The processResult function represents some processing code and deliberately throws an error to demonstrate error handling.

// When you run the code, you'll see that the error thrown by processResult is caught in the try/catch block of performTask, and the error message is logged to the console. The finally block is executed regardless of whether an error occurred or not.



//✅ Example 4: Fetching Data with Arrow Functions


// const fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         // console.log("=======>",response)
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// };

// const displayData = async () => {
//     const data = await fetchData();
//     console.log('Data:', data);
// };

// displayData();

// In this example, we define an arrow function fetchData using the async keyword.Inside the function, we fetch data from an API using fetch, similar to the previous examples.We handle any errors using a try/catch block.

// The fetched JSON response is then extracted using response.json() and assigned to the data variable.Finally, we return the data.

// We also define an arrow function displayData that calls the fetchData function and logs the returned data to the console.

//✅ Example 5: Parallel Execution with Arrow Functions


// const getUserData = async (userId) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const userData = await response.json();
//     return userData;
// };

// const getPostData = async (postId) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const postData = await response.json();
//     return postData;
// };

// const main = async () => {
//     const userId = 1;
//     const postId = 10;

//     const [userData, postData] = await Promise.all([
//         getUserData(userId),
//         getPostData(postId)
//     ]);

//     console.log('User data:', userData);
//     console.log('Post data:', postData);
// };

// main();

// In this example, we define two arrow functions, getUserData and getPostData, using the async keyword.These functions fetch user data and post data from an API, respectively.

// The main arrow function demonstrates parallel execution of the getUserData and getPostData functions using Promise.all.We pass an array of promises to Promise.all, and once both promises are resolved, we destructure the resulting array into userData and postData.Finally, we log the data to the console.

//✅ Example 6: Error Handling with Arrow Functions


const performTask = async () => {
    try {
        await fetchData();
        await processResult();
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Task completed.');
    }
};

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('Fetched data:', data);
};

const processResult = async () => {
    //  Some processing code
    throw new Error('Error during processing');
};

performTask();

// In this example, we define arrow functions performTask, fetchData, and processResult using the async keyword.

// The performTask function calls fetchData and processResult sequentially within a try/catch block. If an error occurs in either of the functions, it is caught in the catch block, and the error message is logged to the console. The finally block is executed regardless of whether an error occurred or not.

// These examples demonstrate how you can use arrow functions with async / await syntax to write concise and readable asynchronous code in JavaScript.
