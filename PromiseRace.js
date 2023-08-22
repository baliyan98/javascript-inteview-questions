// Polyfill for Promise.race function

// polyfill method  which accepts an array of promise and return a
// promise as soon as one of the promise resolved or reject with the reason of being resolved or reject

function race(promises) {
  return new Promise((resolve, reject) => {
    promises.map((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);

      console.log("promise is ", promise);
    });
  });
}

const createPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, time);
  });
};

const promiseArray = [
  createPromise(1000),
  createPromise(2000),
  createPromise(3000),
  createPromise(4000),
];

console.log(race(promiseArray));
