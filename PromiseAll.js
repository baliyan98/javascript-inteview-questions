// Promise.All()
// It accepts a list of promises and return a promise which resolve when all the promises
// resolves or iteration over and reject with the reason of first reject promise when any of the promise it reject.

const myPromiseAll = (promises) => {
  let arrayResolved = [];
  let taskCompleted = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          arrayResolved[index] = val;
          taskCompleted += 1;
          if (taskCompleted === promises.length) {
            resolve(arrayResolved);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

const createResolvedPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved in ${time}ms`);
    }, time);
  });
};

const createRejectPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Promise rejected in ${time}ms`);
    }, time);
  });
};

const resolvedPromiseArray = [
  createResolvedPromise(1000),
  createResolvedPromise(2000),
  createResolvedPromise(4000),
  createResolvedPromise(3000),
];

const resolvedAndRejectPromiseArray = [
  createRejectPromise(1000),
  createRejectPromise(2000),
  createRejectPromise(4000),
  createRejectPromise(3000),
];

myPromiseAll(resolvedPromiseArray)
  .then((val) => console.log("resolved ", val))
  .catch(console.error);
