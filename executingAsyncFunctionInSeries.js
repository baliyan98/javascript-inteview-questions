// we will have an array of async function and we need to execute them in  series i.e one after another

function asyncTask(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved in ${time}`);
    }, time * 1000);
  });
}

const asyncTaskArray = [asyncTask(2), asyncTask(1), asyncTask(3)];

// Method 1
// via async await introduced in ES6

const executingInSeries1 = async function(tasks) {
  for (let promise of tasks) {
    const res = await promise;
    console.log(res);
  }
};

executingInSeries(asyncTaskArray);

//using recursion Method 2

const executingInSeries2 = function(tasks) {
  const promise = tasks.shift();
  console.log(tasks);
  promise.then((res) => {console.log(res)});
  console.log("after promise")
  if (tasks.length > 0) {
    executingInSeries(tasks);
  }
}

executingInSeries(asyncTaskArray);

//Method 3 Array.reduce

const executingInSeries = function (tasks) {
  tasks.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => console.log(val));
    });
  }, Promise.resolve());
};

executingInSeries(asyncTaskArray);
