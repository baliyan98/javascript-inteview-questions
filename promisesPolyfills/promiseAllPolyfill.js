console.log("Polyfill for Promise.All");

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

const promiseAllPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let promiseCompleted = 0;
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          results[index] = res;
          promiseCompleted++;
          if (promiseCompleted === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const asyncTaskArray = [
  asyncResolveTask(3),
  asyncResolveTask(2),
  asyncResolveTask(1),
];

promiseAllPolyfill(asyncTaskArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//  asyncRejectTask(2).then(res => console.log(res)).catch(err => console.log(err));
