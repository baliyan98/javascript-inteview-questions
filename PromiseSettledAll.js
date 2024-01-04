// promise.settledAll polyfill

// an async task that will be resolved in given time
function asyncResolveTask(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`resolved in ${time} seconds`);
    }, time * 1000);
  });
}

// an async task that will be reject in given time
function asyncRejectTask(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(`reject in ${time} seconds`);
    }, time * 1000);
  });
}

// async task array

const asyncTaskArray = [
  asyncResolveTask(4),
  asyncRejectTask(3),
  asyncResolveTask(2),
];

// promise.settledAll

function customPromiseSettledAll(promises) {
  return new Promise(function (resolve, reject) {
    const mappedPromises = promises.map(function (promise) {
      Promise.resolve(promise).then(
        function (value) {
          ({ status: "fullfilled", value: value });
        },
        function (error) {
          ({ status: "rejected", value: error });
        }
      );
    });
    return customPromiseAll(mappedPromises);
  });
}

function customPromiseAll(promises) {
  const results = [];
  let taskCompleted = 0;
  return new Promise(function (resolve, reject) {
    promises.forEach(function (promise, index) {
      promise
        .then(function (val) {
          results.push(val);
          taskCompleted++;
          if (taskCompleted === promises.length) {
            resolve(results);
          }
        })
        .catch(function (error) {
          reject(error);
        });
    });
  });
}

customPromiseSettledAll(asyncTaskArray).then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
