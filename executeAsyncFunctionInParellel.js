// Implement a function that takes a list of async functions as input
// and a callback function and executes the input tasks in parallel i.e
// all at once and invokes the callback after every task is finished.

function async(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}`);
    }, time);
  });
}

const asyncArray = [async(3000), async(4000), async(1000), async(2000)];

const callback = (result) => {
  console.log("I am the callback and Promise is resolved in ", result);
};

function executeInParallel(taskArray , result){
    taskArray.forEach(task => {
        task.then(val => {
            result(val)  
        })
    });
};

executeInParallel(asyncArray , callback)
