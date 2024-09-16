console.log("Polyfill for Promise.Race");

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

const promiseRacePolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const asyncTaskArray = [
  asyncRejectTask(3),
  asyncRejectTask(2),
  asyncResolveTask(3),
];

promiseRacePolyfill(asyncTaskArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
