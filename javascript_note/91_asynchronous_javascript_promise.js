// ✅the concept of asynchronous JavaScript and Promises.

// Asynchronous programming is crucial in JavaScript for handling time - consuming operations such as fetching data from a server or reading files without blocking the execution of other code.Promises are a way to manage asynchronous operations and provide a more organized approach to handling their results.

//     Let's start with a basic explanation of Promises.

// ✅Promises:
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.It's commonly used for handling asynchronous operations in JavaScript. A Promise can be in one of three states:

// ✅Pending: The initial state of a Promise.The operation associated with the Promise is still in progress.

// ✅Fulfilled: The operation completed successfully, and the Promise now has a resulting value.

// ✅Rejected: The operation encountered an error, and the Promise now has a reason for the failure.
            // Now, let's dive into some code examples to understand how Promises work.

// ✅Example 1: Creating a Promise


const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data from a server

    // Simulating a successful operation
    setTimeout(() => {
        const data = 'Some result';
        resolve(data); // Promise fulfilled with the resulting data
    }, 2000);

    // Simulating a failed operation
    // Uncomment the code below to simulate a rejected Promise
    /*
    setTimeout(() => {
      const error = new Error('Something went wrong');
      reject(error); // Promise rejected with an error
    }, 2000);
    */
});

// In the above example, we create a Promise called myPromise using the new Promise() syntax.It takes a function with two parameters, resolve and reject.These parameters are functions that allow you to control the Promise's state.

// Inside the Promise's function, we simulate an asynchronous operation using setTimeout. After 2 seconds, we call the resolve function to fulfill the Promise with the result. If we uncomment the code that simulates a failed operation, the reject function would be called instead to reject the Promise with an error.

// ✅Example 1a: Consuming a Promise


// myPromise
//     .then((result) => {
//         console.log('Promise fulfilled:', result);
//     })
//     .catch((error) => {
//         console.error('Promise rejected:', error);
//     });

// In this example, we consume the Promise myPromise using the.then() and.catch() methods.
    
// The.then() method takes a callback function that will be executed when the Promise is fulfilled, receiving the resulting value as an argument.
    
// The.catch() method takes a callback function that will be executed when the Promise is rejected, receiving the error as an argument.

// By chaining.then() and.catch() methods, we can handle both fulfilled and rejected Promises in a structured manner.

// This is just a basic introduction to Promises and asynchronous JavaScript.Promises also support more advanced features like chaining, parallel execution, and handling multiple Promises together.



    // ✅Example 2: Chaining Promises


function fetchUserData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous request to fetch user data from a server
        setTimeout(() => {
            const user = { id: 1, name: 'John Doe' };
            resolve(user);
        }, 2000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous request to fetch user posts from a server
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            resolve(posts);
        }, 1500);
    });
}

fetchUserData()
    .then((user) => {
        console.log('User:', user);
        return fetchUserPosts(user.id);
    })
    .then((posts) => {
        console.log('Posts:', posts);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// In this example, we have two functions: fetchUserData() and fetchUserPosts().Each function returns a Promise that simulates fetching data from a server.The fetchUserData() function returns a Promise that resolves with user data, and the fetchUserPosts(userId) function returns a Promise that resolves with an array of user posts, given a userId.

// By chaining Promises using.then(), we can call fetchUserData(), and once it resolves, we can extract the user's ID and pass it to fetchUserPosts(userId). Finally, we can handle the resolved posts array in the second .then() block.

// ✅Example 3: Error Handling with Promises


function performAsyncOperation() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve(randomNumber);
            } else {
                const error = new Error('Operation failed');
                reject(error);
            }
        }, 2000);
    });
}

performAsyncOperation()
    .then((result) => {
        console.log('Operation succeeded:', result);
    })
    .catch((error) => {
        console.error('Operation failed:', error);
    });

// In this example, the performAsyncOperation() function returns a Promise that resolves with a random number between 0 and 1. If the number is less than 0.5, the Promise is fulfilled with the number.Otherwise, the Promise is rejected with an error.

// When consuming the Promise, we use the.then() method to handle the fulfilled Promise and the.catch() method to handle the rejected Promise.If the Promise is fulfilled, we log the result.If the Promise is rejected, we log the error.

    // ✅Example 4: Running Promises in Parallel


function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous request to fetch data from a URL
        setTimeout(() => {
            const data = `Data from ${url}`;
            resolve(data);
        }, Math.random() * 2000);
    });
}

const urls = ['https://example.com', 'https://google.com', 'https://github.com'];

const promises = urls.map((url) => fetchData(url));

Promise.all(promises)
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One or more promises rejected:', error);
    });

// In this example, we have an array of URLs that we want to fetch data from.We use the fetchData(url) function, which returns a Promise that resolves with the fetched data from the specified URL.

// To run the promises in parallel, we use Promise.all(), passing in an array of promises.This method returns a new Promise that fulfills when all the promises in the array have fulfilled, and it rejects if any of the promises reject.

// In the.then() block, we receive an array of the resolved data from all the promises.In the.catch() block, we handle the case where one or more promises reject.






