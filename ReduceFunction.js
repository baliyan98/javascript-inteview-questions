// const arr = [1, 2, 3, 4, 5];

// performing sum with initial value as 10

// const sum = arr.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);

// console.log("sum is ", sum);

/****************************** */

// Let’s say we have an array of functions and a value, the value has to
// be passed through these functions in a pipe. Like the initial value has
// to be passed to the first function and then the returned value from
// the first function has to be passed to the next function and so on.

// function func(val) {
//   return 2 * val;
// }

// const arr = [func, func, func, func];
// const result = arr.reduce((prevFunc, currFunc) => currFunc(prevFunc), 3);

// console.log("result is ", result);

/************************************* */

// resolving promise in sequence

const asyncTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise complete in ${time}`);
    }, time);
  });
};
const taskArray = [asyncTask(2000), asyncTask(1000), asyncTask(3000)];

const asyncSeriesExecutor = function (promises) {
    promises.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};

asyncSeriesExecutor(taskArray)
