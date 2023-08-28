// Given a list of promises and their priorities, call them parallelly
// and resolve with the value of the first promise with the most priority.
// If all the promises fail then reject with a custom error.

function asyncFunction() {
  const randomNumber = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber > 7) {
        resolve(randomNumber);
      } else {
        reject();
      }
    }, randomNumber * 100);
  });
}

const asyncTaskArray = [
  { task: asyncFunction(), priority: 4 },
  { task: asyncFunction(), priority: 1 },
  { task: asyncFunction(), priority: 2 },
  { task: asyncFunction(), priority: 3 },
];

function resolvePromisesWithPriority(promises) {
  promises.sort((a, b) => a.priority - b.priority); // to sort the promise array in ascending order;
  let maxPriority = 0; // to check current max Priority resolve promise 
  let result = {}; // store final result
  let rejected = {}; // store rejected result
  let taskCompeted = 0; // track how many task completed
  return new Promise((resolve, reject) => {
    promises.forEach(({ task, priority }, i) => {
      task
        .then((val) => {
          result[priority] = val; // got our promise resolved and store it in result
        })
        .catch((err) => {
          rejected[priority] = true;
          if (priority === promises[maxPriority].priority) {
            maxPriority++;
          }
        })
        .finally(() => {
          if (
            !rejected[priority] &&
            priority === promises[maxPriority].priority
          ) {
            console.log("rejected is " , rejected);
            resolve(priority);
          }
          taskCompeted++;
          if (taskCompeted === promises.length) {
            reject("All Apis Failed");
          }
        });
    });
  });
}

resolvePromisesWithPriority(asyncTaskArray).then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
