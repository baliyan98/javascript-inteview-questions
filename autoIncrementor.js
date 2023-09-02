const timer = (init = 0, steps = 2) => {
  let intervalId = null;
  let count = init;

  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log("count is ", count);
        count += steps;
      }, 1000);
    }
  };

  const endTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  return {
    startTimer,
    endTimer,
  };
};

const setTimer = timer(1, 5);
setTimer.startTimer();

setTimeout(() => {
  setTimer.endTimer();
}, 5000);
