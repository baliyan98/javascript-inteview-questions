function sampler(fn, limit) {
  let count = limit;
  return function (...args) {
    count--;
    if (count > 0) {
      return;
    } else {
      fn.apply(this, ...args);
      count = limit;
    }
  };
}

function message() {
  console.log("hello");
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed
