// poly fill for Promise.any
// Promise.any() takes an iterable of Promise objects. It returns a single
// promise that fulfills as soon as any of the promises in the iterable
// fulfills, with the value of the fulfilled promise. If no promises in the
// iterable fulfill (if all of the given promises are rejected), then the
// returned promise is rejected with an AggregateError, a new subclass of
// Error that groups together individual errors

function any(promises) {
  const arr = new Array(promises.length);
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.map((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          arr[index] = err;
          counter += 1;
          if (counter === arr.length) {
            reject(arr);
          }
        });
    });
  });
}

const test1 = new Promise(function (resolve, reject) {
    setTimeout(reject, 500, 'one');
  });
  const test2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'two');
  });
  const test3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 200, 'three');
  });
  any([test1, test2, test3]).then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value);
  }).catch(function (err){
    console.log(err);
  });
