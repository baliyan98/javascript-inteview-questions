// Implement a function in JavaScript that retries
// promises N number of times with a delay between each call.

// delay function

const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Resolved"), ms);
  });

const retry = (func, retries = 3, delay = 1000, finalError = "FailedError") =>
  new Promise((resolve, reject) => {
    func.then(resolve).catch((err) => {
      if (retries > 0) {
        return wait(delay)
          .then(retry.bind(null, func, retries - 1, delay, finalError))
          .then(resolve)
          .catch(reject);
      }
      return reject(finalError);
    });
  });
