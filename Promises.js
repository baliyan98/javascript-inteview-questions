// create a promise that will resolve after 5 seconds

// const promise = new Promise((resolve , reject) => {
//     return setTimeout(()=> {
//         resolve("I am resolved in 5 seconds")
//     } , 5000)
// });
// const resolvePromise = promise.then((value) => console.log(value));
// console.log(resolvePromise);

// reject a promise after 5 seconds

// const promise = new Promise((resolve , reject) => {
//     return setTimeout(()=> {
//         reject("I will be rejecting in 5 seconds")
//     } , 5000)
// });
// // const rejectPromise = promise.then(null, (error) => console.log(error)); one way of handling error
// const rejectPromise = promise.catch((error) => console.log(error)); //  handling error with catch

// console.log(rejectPromise);

/******************** */

// handling promise using async await

const promise = Promise.resolve("Resolved promise");

//promise.then(value => console.log(value));

async function example(promise){
    const res = await promise;
    console.log(res);
}
example(promise);

// A function declare with async keyword returns a promise
