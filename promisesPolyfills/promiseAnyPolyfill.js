console.log("Polyfill for Promise.Any");

const asyncResolveTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved in ${time} seconds`);
    }, time * 1000);
  });
};

const asyncRejectTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Promise reject in ${time} seconds`);
    }, time * 1000);
  });
};

const promiseAnyPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const errors = [];
    let promiseFailed = 0;
    promises.forEach((promise, index) => {
      promise
        .then((res) => resolve(res))
        .catch((err) => {
          errors[index] = err;
          promiseFailed++;
          if (promiseFailed == promises.length) {
            reject(new Error(errors));
          }
        });
    });
  });
};

const asyncTaskArray = [
  asyncRejectTask(3),
  asyncRejectTask(2),
  asyncRejectTask(1),
];

promiseAnyPolyfill(asyncTaskArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
