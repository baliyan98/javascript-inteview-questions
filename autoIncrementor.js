// const timer = (init = 0, steps = 2) => {
//   let intervalId = null;
//   let count = init;

//   const startTimer = () => {
//     if (!intervalId) {
//       intervalId = setInterval(() => {
//         console.log("count is ", count);
//         count += steps;
//       }, 1000);
//     }
//   };

//   const endTimer = () => {
//     clearInterval(intervalId);
//     intervalId = null;
//   };

//   return {
//     startTimer,
//     endTimer,
//   };
// };

// const setTimer = timer(1, 5);
// setTimer.startTimer();

// setTimeout(() => {
//   setTimer.endTimer();
// }, 5000);

function pipe(func) {
  let result = 0;
  return function () {
    let argValue = arguments[0];
    if (func.length === 0) return argValue;
    for (let i = 0; i < func.length; i++) {
      let mathFn = func[i];
      result = mathFn(argValue);
      argValue = result;
    }
    return result;
  };
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

console.log(pipe([times(2), subtract(3), divide(4)]));
